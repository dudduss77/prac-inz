import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setScreenSize } from "../../features/ScreenSizeSlice";
import { useMediaPredicate } from "react-media-hook";
import styled from "styled-components";
import AppBar from "./components/AppBar";
import NavBar from "./components/navBar/NavBar";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  position: relative;
`;

const Layout = () => {
  const screenDispatch = useDispatch();
  const smallScreen = useMediaPredicate("screen and (max-width: 900px)");
  const bigScreen = useMediaPredicate("screen and (min-width: 1400px)");

  useEffect(() => {
    if (smallScreen) screenDispatch(setScreenSize("small"));
    else if (bigScreen) screenDispatch(setScreenSize("big"));
    else screenDispatch(setScreenSize("mid"));
  }, [smallScreen, bigScreen]);

  return (
    <StyledLayout>
      <AppBar />
      <ContentWrapper>
        <NavBar />
        <Outlet />
      </ContentWrapper>
    </StyledLayout>
  );
};

export default Layout;
