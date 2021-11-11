import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMenuStatus, changeOpenState } from "../../../features/MenuSlice";
import { selectScreenSize } from "../../../features/ScreenSizeSlice";
import styled from "styled-components";
import Button from "../../../components/Button";
import Logo from "../../../components/Logo";
import UserLink from "../../../components/UserLink";
import Avatar from "../../../assets/user.png";
import Spacer from "../../../components/Spacer";

const StyledAppBar = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px;
  height: 50px;
  background: ${({ theme }) => theme.backgroundColorOne};
  display: flex;
  align-items: center;
  gap: 20px;
`;

const AppBar = () => {
  const menuStatus = useSelector(selectMenuStatus);
  const menuDispatch = useDispatch();
  const screenSize = useSelector(selectScreenSize);

  const retIcon = () => {
    if (screenSize === "mid") {
      return menuStatus ? (
        <FontAwesomeIcon icon="indent" />
      ) : (
        <FontAwesomeIcon icon="outdent" />
      );
    } else {
      return menuStatus ? (
        <FontAwesomeIcon icon="outdent" />
      ) : (
        <FontAwesomeIcon icon="indent" />
      );
    }
  };

  return (
    <StyledAppBar>
      <Logo isInvers>NoNameApp</Logo>
      <Spacer />
      {screenSize !== "small" && (
        <>
          <UserLink imgSrc={Avatar} userName="Jan Kowalski" />
        </>
      )}
      <Button onClick={() => menuDispatch(changeOpenState())}>
        {retIcon()}
      </Button>
    </StyledAppBar>
  );
};

export default AppBar;
