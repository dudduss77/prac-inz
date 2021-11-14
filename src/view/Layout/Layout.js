import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectModalState, setScreenSize } from "../../features/AppSlice";
import { useMediaPredicate } from "react-media-hook";
import styled from "styled-components";
import AppBar from "./components/AppBar";
import NavBar from "./components/navBar/NavBar";
import PageHeader from "../../components/PageHeader";
import { selectUserType } from "../../features/UserSlice";
import { useLocation } from "react-router";
import Modal from "../../components/Modal/Modal";
import Notification from "../../components/Notification";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: ${({ theme }) => theme.CharacterPrimary};
  background: ${({ theme }) => theme.pageBackground};
`;
const ContentWrapper = styled.div`
  display: flex;
  height: calc(100% - 50px);
  max-width: 100vw;
`;

const PageWrapper = styled.div`
  flex: 1;
  overflow: auto;
  background: ${({ theme }) => theme.pageBackground};
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Layout = () => {
  const screenDispatch = useDispatch();
  const modalState = useSelector(selectModalState);
  const { pathname } = useLocation();
  const userType = useSelector(selectUserType);
  const smallScreen = useMediaPredicate("screen and (max-width: 900px)");
  const bigScreen = useMediaPredicate("screen and (min-width: 1400px)");

  useEffect(() => {
    if (smallScreen) screenDispatch(setScreenSize("small"));
    else if (bigScreen) screenDispatch(setScreenSize("big"));
    else screenDispatch(setScreenSize("mid"));
  }, [smallScreen, bigScreen]);

  const retPageHeader = () => {
    if (userType) {
      if (pathname !== "/message") return <PageHeader isProtege={userType} />;
    } else {
      if (pathname.includes("/message/")) return;
      else return <PageHeader isProtege={userType} />;
    }
  };

  return (
    <StyledLayout>
      <AppBar />
      <ContentWrapper>
        <NavBar />
        <PageWrapper>
          {retPageHeader()}
          <Outlet />
        </PageWrapper>
      </ContentWrapper>
      {modalState && <Modal />}
      <Notification />
    </StyledLayout>
  );
};

export default Layout;
