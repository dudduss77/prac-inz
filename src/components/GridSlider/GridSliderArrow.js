import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledGridSliderArrow = styled.div`
  font-size: 1.2em;
  cursor: pointer;
  visibility: ${({ isArrowVisible }) => isArrowVisible};
`;

const GridSliderArrow = ({ direction, arrowConfig }) => {
  return (
    <StyledGridSliderArrow
      onClick={() => {
        if (direction === "left") arrowConfig.sliderLeftArrowFunction();
        else arrowConfig.sliderRightArrowFunction();
      }}
      isArrowVisible={
        direction === "left"
          ? arrowConfig.sliderLeftArrowShow
          : arrowConfig.sliderRightArrowShow
      }
    >
      {direction === "left" && <FontAwesomeIcon icon="chevron-left" />}
      {direction === "right" && <FontAwesomeIcon icon="chevron-right" />}
    </StyledGridSliderArrow>
  );
};

export default GridSliderArrow;
