import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectScreenSize, selectMenuStatus, changeOpenState } from "../../../features/AppSlice";
import styled from "styled-components";
import {Button, Spacer} from "../../../components/Reusable";
import Logo from "../../../components/Logo";
import UserLink from "../../../components/UserLink";
import Avatar from "../../../assets/user.png";

const StyledAppBar = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px;
  min-height: 50px;
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
