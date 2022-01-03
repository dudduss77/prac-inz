import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as CircleMenuSVG } from "./../assets/circleMenu.svg";

const StyledContainer = styled.div`
  position: absolute;
  width: ${({ isVisible, width }) => (isVisible ? width : "0px")};
  /* height: ${({ isVisible, positionCounts }) =>
    isVisible && positionCounts ? positionCounts * 36 + "px" : "0px"}; */
  z-index: 999999999999999;
  right: 50%;
  top: 50%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgroundColorOne};
  color: #aed8ff;
  padding: 20px 0px;
  transition: all 0.4s ease;
  max-height: 184px;
  overflow: scroll;
`;

const StyledPosition = styled.div`
  height: 36px;
  line-height: 36px;
  cursor: pointer;
  text-align: initial;
  padding-left: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.PrimarySix};
  }
`;

const StyledCircleMenuSVG = styled(CircleMenuSVG)`
  cursor: pointer;
`;

const CircleMenu = ({
  TriggerElement = StyledCircleMenuSVG,
  width = "120px",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <TriggerElement onClick={() => setIsVisible((prev) => !prev)} />
      <StyledContainer
        width={width}
        isVisible={isVisible}
        positionCounts={children.length}
      >
        {isVisible && children}
      </StyledContainer>
    </>
  );
};

export default CircleMenu;

export { CircleMenu, StyledPosition as CircleMenuPosition };
