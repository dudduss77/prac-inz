import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUserId, selectUserType } from "../features/UserSlice";
import { deleteDocFun } from "../firebase/dataFirebase";
import { StyledTile } from "./Reusable";

const SmallHeader = styled.h4`
  color: ${({ theme }) => theme.CharacterSecoundary};
`;

const DeleteIcon = styled.div`
  position: absolute;
  top: 2px;
  right: 5px;
`;

const Tile = ({ tileHeader, tileSmallHeader, tileOpenClick, tileHeight }) => {
  return (
    <StyledTile height={tileHeight} onClick={() => tileOpenClick()}>
      <h3>{tileHeader}</h3>
      <SmallHeader>{tileSmallHeader}</SmallHeader>
    </StyledTile>
  );
};

export default Tile;
