import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setScreenSize } from "../../features/ScreenSizeSlice";
import { useMediaPredicate } from "react-media-hook";
import styled from "styled-components";
import AppBar from "./components/AppBar";
import NavBar from "./components/navBar/NavBar";
import PageHeader from "../../components/PageHeader";
import { selectUserType } from "../../features/UserSlice";
import { useLocation } from "react-router";

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
    if ((pathname !== "/messages" && userType) || !userType)
      return <PageHeader isProtege={userType} />;
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
    </StyledLayout>
  );
};

export default Layout;
