import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ theme }) => theme.naturalOne};
  border: 1px solid ${({ theme }) => theme.naturalFive};
  box-sizing: border-box;
  border-radius: 2px;
  overflow: hidden;

  &:focus-within {
    outline-offset: 0px;
    outline: 2px solid #0000ff;
  }

  @media screen and (max-width: ${({ mediaQueryPoint }) =>
      mediaQueryPoint ?? "900px"}) {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  width: ${({ width }) => width ? width : "360px"};
  height: ${({ height }) => height ? height : "42px"};
  border: none;
  padding: 0;
  padding-left: ${({ paddingLeft }) => paddingLeft};

  &:focus-visible {
    outline: none;
    border: none;
  }

  @media screen and (max-width: ${({ mediaQueryPoint }) =>
      mediaQueryPoint ?? "900px"}) {
    width: 100%;
  }
`;

const StyledSVG = styled.div`
  margin-left: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = ({
  icon,
  placeholder = "",
  width = "360px",
  height = "42px",
  mediaQueryPoint = "400px",
  useInput,
  paddingLeft = "10px",
  as = "Input"
}) => {
  const Icon = icon;

  return (
    <Container width={width} height={height} mediaQueryPoint={mediaQueryPoint}>
      {icon && (
        <StyledSVG>
          <Icon />
        </StyledSVG>
      )}

      <StyledInput
        {...useInput}
        placeholder={placeholder}
        width={width}
        height={height}
        mediaQueryPoint={mediaQueryPoint}
        paddingLeft={paddingLeft}
        as={as}
      />
    </Container>
  );
};

export default Input;
