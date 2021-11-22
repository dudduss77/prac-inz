import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon, Spacer } from "../../../components/Reusable";
import ExerciseItem from "./ExerciseItem";

const HiddenIcon = styled(Icon)``;

const StyledTrainingExercise = styled.div`
  width: calc(100%);
  display: flex;
  flex-direction: column;
  position: relative;

  border-bottom: 2px solid ${({ theme }) => theme.naturalFive};

 

  ${HiddenIcon} {
    display: none;
  }

  &:hover ${HiddenIcon} {
    display: block;
  }
`;

const Header = styled.div`
  width: calc(100% - 20px);
  padding: 5px 10px;
  gap: 5px;
  display: flex;
`;

const TrainingExercise = ({ exerciseName, exerciseSeriesData = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledTrainingExercise>
      <Header>
        {exerciseName}
        <Spacer />
        <HiddenIcon>
          <FontAwesomeIcon icon="edit" />
        </HiddenIcon>
        <HiddenIcon>
          <FontAwesomeIcon icon="times" />
        </HiddenIcon>
        <Icon onClick={() => setIsOpen(!isOpen)}>
          {!isOpen && <FontAwesomeIcon icon="chevron-down" />}
          {isOpen && <FontAwesomeIcon icon="chevron-up" />}
        </Icon>
      </Header>
      {isOpen &&
        exerciseSeriesData.map((serie, index) => (
          <ExerciseItem
            key={serie.id}
            serieId={index + 1}
            serieWeight={serie.weight}
            serieRepeat={serie.repeat}
          />
        ))}
    </StyledTrainingExercise>
  );
};

export default TrainingExercise;
