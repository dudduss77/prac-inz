import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUserType } from "../features/UserSlice";
import { StyledTile } from "./Reusable";

const SmallHeader = styled.h4`
  color: ${({ theme }) => theme.CharacterSecoundary};
`;

const DeleteIcon = styled.div`
  position: absolute;
  top: 2px;
  right: 5px;
`;

const deleteSubmit = (event) => {
  event.stopPropagation();
  alert("delete");
};

const Tile = ({ tileId, tileHeader, tileSmallHeader, tileOpenClick }) => {
  const userType = useSelector(selectUserType);
  return (
    <StyledTile onClick={() => tileOpenClick()}>
      {!userType && (
        <DeleteIcon onClick={deleteSubmit}>
          <FontAwesomeIcon icon="times" />
        </DeleteIcon>
      )}

      <h3>{tileHeader}</h3>
      <SmallHeader>{tileSmallHeader}</SmallHeader>
    </StyledTile>
  );
};

export default Tile;
