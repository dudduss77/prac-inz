import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { StyledTile } from "./Reusable";

const StyledAddTile = styled(StyledTile)`
  font-size: 3.5em;
`;

const AddTile = () => {
  return (
    <StyledAddTile>
      <FontAwesomeIcon icon="plus" />
    </StyledAddTile>
  );
};

export default AddTile;
