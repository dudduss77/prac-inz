import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon, AbsoluteIconWrapper } from "../../../components/Reusable";
import CircleMenu, { CircleMenuPosition } from "../../../components/CircleMenu";
import TrainingExercise from "./TrainingExercise";

const StyledTrainingType = styled.div`
  min-height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.naturalFour};
`;

const TypeHeader = styled.div`
  background: ${({ theme }) => theme.naturalOne};
  text-align: center;
  position: relative;
  padding: 7px 0;
  h5 {
    color: ${({ theme }) => theme.CharacterSecoundary};
  }
`;

const addExercise = () => {};

const copyTo = () => {};
const deleteAllExercise = () => {};

const TrainingType = ({ trainingTypeName, trainingExercisesData = [] }) => {
  return (
    <StyledTrainingType>
      <TypeHeader>
        <h4>{trainingTypeName}</h4>
        <AbsoluteIconWrapper right="10px">
          <Icon onClick={() => addExercise()}>
            <FontAwesomeIcon icon="plus" />
          </Icon>
          <CircleMenu width="150px">
            <CircleMenuPosition onClick={copyTo}>Skopiuj do</CircleMenuPosition>
            <CircleMenuPosition onClick={deleteAllExercise}>
              Usuń wszystko
            </CircleMenuPosition>
          </CircleMenu>
        </AbsoluteIconWrapper>
      </TypeHeader>
      {trainingExercisesData.map((exercise) => (
        <TrainingExercise
          key={exercise.id}
          exerciseName={exercise.name}
          exerciseSeriesData={exercise.series}
        />
      ))}
    </StyledTrainingType>
  );
};

export default TrainingType;
