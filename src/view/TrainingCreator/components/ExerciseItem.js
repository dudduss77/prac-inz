import React from "react";
import styled from "styled-components";

const StyledExerciseItem = styled.div`
  padding: 5px 0;
  display: grid;
  grid-template-columns: 0.2fr 0.5fr 3fr;
  &:nth-child(2n) {
    background: ${({ theme }) => theme.naturalFive};
  }
`;

const ItemCenter = styled.div`
  width: 100%;
  text-align: center;
`;

const ExerciseItem = ({ serieId, serieWeight, serieRepeat }) => {
  return (
    <StyledExerciseItem>
      <ItemCenter>{serieId}</ItemCenter>
      <ItemCenter>{serieWeight + "kg"}</ItemCenter>
      {serieRepeat + " powtórzeń"}
    </StyledExerciseItem>
  );
};

export default ExerciseItem;
