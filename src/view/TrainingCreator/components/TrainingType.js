import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon, AbsoluteIconWrapper } from "../../../components/Reusable";
import CircleMenu, { CircleMenuPosition } from "../../../components/CircleMenu";
import TrainingExercise from "./TrainingExercise";
import { useDispatch, useSelector } from "react-redux";
import { changeModalState, setModalData } from "../../../features/AppSlice";
import { deleteAllExercise } from "../../../features/TrainingCreatorSlice";
import { selectUserType } from "../../../features/UserSlice";

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

const TrainingType = ({
  dayId,
  typeId,
  trainingTypeName,
  trainingExercisesData = [],
}) => {
  const isProtege = useSelector(selectUserType);
  const modalDispatch = useDispatch();
  const trainingCreatorDispatch = useDispatch();
  const addExercise = () => {
    modalDispatch(changeModalState());
    modalDispatch(
      setModalData({
        name: "trainingaddexercise",
        config: { dayId: dayId, typeId: typeId },
      })
    );
  };

  const copyTo = () => {
    modalDispatch(changeModalState());
    modalDispatch(
      setModalData({
        name: "trainingcopyto",
        config: { dayId: dayId, typeId: typeId },
      })
    );
  };
  const removeAll = () => {
    trainingCreatorDispatch(
      deleteAllExercise({ dayId: dayId, typeId: typeId })
    );
  };
  return (
    <StyledTrainingType>
      <TypeHeader>
        <h4>{trainingTypeName}</h4>
        {!isProtege && (
          <AbsoluteIconWrapper right="10px">
            <Icon onClick={() => addExercise()}>
              <FontAwesomeIcon icon="plus" />
            </Icon>
            <CircleMenu width="150px">
              <CircleMenuPosition onClick={copyTo}>
                Skopiuj do
              </CircleMenuPosition>
              <CircleMenuPosition onClick={removeAll}>
                Usuń wszystko
              </CircleMenuPosition>
            </CircleMenu>
          </AbsoluteIconWrapper>
        )}
      </TypeHeader>
      {trainingExercisesData.map((exercise) => (
        <TrainingExercise
          key={exercise.id}
          dayId={dayId}
          typeId={typeId}
          exerciseId={exercise.id}
          exerciseName={exercise.name}
          exerciseSeriesData={exercise.series}
        />
      ))}
    </StyledTrainingType>
  );
};

export default TrainingType;
