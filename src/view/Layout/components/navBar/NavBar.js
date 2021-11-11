import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectScreenSize } from "../../../../features/ScreenSizeSlice";
import {
  selectMenuStatus,
  changeOpenStateAction,
} from "../../../../features/MenuSlice";
import styled from "styled-components";
import ProtegeNav from "./ProtegeNav";
import TrainerNav from "./TrainerNav";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import NavBarLink from "./NavBarLink";
import { selectUserType } from "../../../../features/UserSlice";

const StyledNavBar = styled.div`
  background: ${({ theme }) => theme.backgroundColorOne};
  width: ${({ menuStatus }) => (menuStatus ? "280px" : "50px")};
  padding: 20px 0;
  font-size: 0.9em;
  overflow: hidden;
  transition: 0.5s;

  @media screen and (max-width: 1400px) {
    width: ${({ menuStatus }) => (menuStatus ? "50px" : "280px")};
  }

  @media screen and (max-width: 900px) {
    width: ${({ menuStatus }) => (menuStatus ? "100%" : "0")};
    height: calc(100% - 40px);
    position: absolute;
  }
`;

const NavBar = () => {
  const ref = useRef();
  const menuStatus = useSelector(selectMenuStatus);
  const menuDispatch = useDispatch();
  const screenSize = useSelector(selectScreenSize);
  const userType = useSelector(selectUserType)

  useOutsideClick(ref, () => {
    if (screenSize === "mid" && !menuStatus)
      menuDispatch(changeOpenStateAction(true));
  });

  useEffect(() => {
    if (screenSize === "small") menuDispatch(changeOpenStateAction(false));
  }, [screenSize]);

  useEffect(() => {
    if (screenSize === "big") menuDispatch(changeOpenStateAction(true));
  }, [screenSize]);

  useEffect(() => {
    if (screenSize === "mid") menuDispatch(changeOpenStateAction(true));
  }, [screenSize]);

  return (
    <StyledNavBar ref={ref} menuStatus={menuStatus}>
      {userType ? <ProtegeNav /> : <TrainerNav />}
      <NavBarLink icon="sign-out-alt" path="/logout" title="Wyloguj" />
    </StyledNavBar>
  );
};

export default NavBar;
