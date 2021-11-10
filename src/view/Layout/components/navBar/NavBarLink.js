import React from "react";
import styled from "styled-components";
import { useMediaPredicate } from "react-media-hook";
import { useLocation, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMenuStatus,
  changeOpenState,
} from "../../../../features/MenuSlice";
import Link from "./Link";

const SelectBackground = (isSublink, isActive, theme) => {
  if (isSublink) return isActive ? theme.PrimarySix : theme.backgroundColorTwo;
  return isActive ? theme.PrimarySix : theme.backgroundColorOne;
};

const StyledNavBarLink = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ isMenuOpen }) => (isMenuOpen ? "10px 20px" : "10px 0")};
  width: ${({ isMenuOpen }) => (isMenuOpen ? "calc(100% - 40px)" : "100%")};
  cursor: pointer;
  color: ${({ theme }) => theme.CharacterPrimaryInvers};
  background: ${({ isSublink, isActive, theme }) =>
    SelectBackground(isSublink, isActive, theme)};

  @media screen and (max-width: 1400px) {
    padding: ${({ isMenuOpen }) => (isMenuOpen ? "none" : "10px 20px")};
  }
  @media screen and (max-width: 900px) {
    padding: 10px 20px;
  }
`;

const NavBarLink = ({ path, icon, title, isSublink, customOnClick }) => {
  const menuStatus = useSelector(selectMenuStatus);
  const smallScreen = useMediaPredicate("screen and (max-width: 900px)");
  const midScreen = useMediaPredicate(
    "screen and (min-width: 900px) and (max-width: 1400px)"
  );
  const menuDispatch = useDispatch();

  let navigate = useNavigate();
  let { pathname } = useLocation();

  const LinkClick = () => {
    navigate(path);
    if (smallScreen) menuDispatch(changeOpenState());
    if (midScreen && !menuStatus) menuDispatch(changeOpenState());
  };

  return (
    <StyledNavBarLink
      isActive={path === pathname}
      isMenuOpen={menuStatus}
      onClick={() => (customOnClick ? customOnClick() : LinkClick())}
      isSublink={isSublink}
    >
      <Link menuStatus={menuStatus} icon={icon} title={title} />
    </StyledNavBarLink>
  );
};

export default NavBarLink;
