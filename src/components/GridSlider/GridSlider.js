import React from "react";
import styled from "styled-components";

const StyledGridSlider = styled.div`
  flex: 1;
  width: 100%;
  overflow: clip;
`;

const Grid = styled.div`
  flex: ${({ flexValue }) => flexValue};
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  overflow: ${({ overflowValue }) => overflowValue};
  width: ${({ width }) => width};
  height: 100%;
  transform: ${({ translateXValue }) => `translateX(${translateXValue}%)`};
  transition: transform 1s;
`;

const GridSlider = ({ children, gridConfig }) => {
  return (
    <StyledGridSlider>
      <Grid
        gridTemplateColumns={gridConfig.gridTemplateColumns}
        width={gridConfig.gridWidth}
        translateXValue={gridConfig.gridTranslateX}
      >
        {children}
      </Grid>
    </StyledGridSlider>
  );
};

export default GridSlider;
