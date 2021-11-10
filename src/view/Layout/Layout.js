import React from "react";
import { Outlet } from "react-router-dom";
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
  return (
    <StyledLayout>
      <AppBar />
      <ContentWrapper>
        <NavBar/>
        <Outlet />
      </ContentWrapper>
    </StyledLayout>
  );
};

export default Layout;
