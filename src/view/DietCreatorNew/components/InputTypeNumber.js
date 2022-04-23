import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  -webkit-appearance: none;
  margin: 0;
  -moz-appearance: textfield;
  width: ${({ isSmall }) => (isSmall ? "25px" : "50px")};
  text-align: center;
  background: #636b7d00;
  border: none;
  color: #fff;
  border: 1px solid #636b7d;
  &:focus {
    outline: none;
  }
`;

const Button = styled.div`
  width: 20px;
  height: 20px;
  background: #636b7d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7em;
  cursor: pointer;
`;

const InputTypeNumber = ({ defaultValue, isButton }) => {
  const [value, setValue] = useState(parseInt(defaultValue));
  return (
    <Wrapper>
      {isButton && (
        <Button onClick={() => setValue(value - 1)}>
          <FontAwesomeIcon icon="minus" />
        </Button>
      )}
      <StyledInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        isSmall={isButton}
        type="number"
        defaultValue={parseInt(defaultValue)}
      />
      {isButton && (
        <Button onClick={() => setValue(value + 1)}>
          <FontAwesomeIcon icon="plus" />
        </Button>
      )}
    </Wrapper>
  );
};

export default InputTypeNumber;
