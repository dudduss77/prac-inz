import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

const StyledAddImageInput = styled.div`
  width: 75px;
  height: 75px;
  background: ${({ theme }) => theme.naturalThree};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7em;
  input {
    width: 75px;
    height: 75px;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;

const AddImageInput = ({onChange}) => {
  return (
    <StyledAddImageInput>
      <input type="file"  onChange={onChange}/>
      <FontAwesomeIcon icon="file-image" />
    </StyledAddImageInput>
  );
};

export default AddImageInput;
