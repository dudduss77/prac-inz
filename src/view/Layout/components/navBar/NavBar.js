import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMediaPredicate } from "react-media-hook";
import {
  selectMenuStatus,
  changeOpenStateAction,
} from "../../../../features/MenuSlice";
import styled from "styled-components";
import ProtegeNav from "./ProtegeNav";
import TrainerNav from "./TrainerNav";
import useOutsideClick from "../../../../hooks/useOutsideClick";

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
  const menuStatus = useSelector(selectMenuStatus);
  const menuDispatch = useDispatch();
  const [isProtege, setIsProtege] = useState(false);
  const smallScreen = useMediaPredicate("screen and (max-width: 900px)");
  const bigScreen = useMediaPredicate("screen and (min-width: 1400px)");

  const ref = useRef();

  useOutsideClick(ref, () => {
    if (!smallScreen && !bigScreen && !menuStatus)
      menuDispatch(changeOpenStateAction(true));
  });

  useEffect(() => {
    if (smallScreen) menuDispatch(changeOpenStateAction(false));
  }, [smallScreen]);

  useEffect(() => {
    if (bigScreen) menuDispatch(changeOpenStateAction(true));
  }, [bigScreen]);

  useEffect(() => {
    if (!smallScreen && !bigScreen) menuDispatch(changeOpenStateAction(true));
  }, [smallScreen, bigScreen]);

  return (
    <StyledNavBar ref={ref} menuStatus={menuStatus}>
      {isProtege ? <ProtegeNav /> : <TrainerNav />}
    </StyledNavBar>
  );
};

export default NavBar;
