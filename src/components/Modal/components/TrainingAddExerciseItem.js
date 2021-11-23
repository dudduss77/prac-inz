import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectModalData } from "../../../features/AppSlice";
import {
  addExercise,
  selectExercise,
} from "../../../features/TrainingCreatorSlice";
import { useInput } from "../../../hooks/useInput";
import Input from "../../Input";
import { Button, Icon, Row } from "../../Reusable";
import ExerciseSettings from "./ExerciseSettings";

const StyledTrainingAddExerciseItem = styled.div`
  width: calc(100% - 20px);
  padding: 5px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.naturalSeven};
  display: flex;
  flex-direction: ${({ isOpen }) => (isOpen ? "column" : "row")};
  align-items: ${({ isOpen }) => (isOpen ? "flex-start" : "center")};
  gap: 5px;
  h5 {
    color: ${({ theme }) => theme.CharacterSecoundary};
  }
`;

const IsOpen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const TrainingAddExerciseItem = () => {
  const modalData = useSelector(selectModalData);
  const trainingCreatorDispatch = useDispatch();
  const [exerciseName, setExerciseName] = useState("Wyciskanie");
  const [isOpen, setIsOpen] = useState(false);
  const [exerciseData, setExerciseData] = useState([{ id: 1 }]);

  const modExerciseData = () => {
    setExerciseData([
      ...exerciseData,
      { id: exerciseData[exerciseData.length - 1].id + 1 },
    ]);
  };

  const deleteExerciseData = (id) => {
    let newData = exerciseData.filter((item) => item.id !== id);
    setExerciseData(newData);
  };

  const add = () => {
    trainingCreatorDispatch(
      addExercise({
        dayId: modalData.config.dayId,
        typeId: modalData.config.typeId,
        name: exerciseName,
        data: exerciseData,
      })
    );
  };
  return (
    <StyledTrainingAddExerciseItem
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      {exerciseName}
      {isOpen && (
        <IsOpen onClick={(evt) => evt.stopPropagation()}>
          {exerciseData.map((exercise, i, arr) => {
            if (arr.length - 1 === i)
              return (
                <ExerciseSettings
                  key={exercise.id}
                  currentValue={exercise}
                  setValue={setExerciseData}
                  array={exerciseData}
                  iconFun={modExerciseData}
                  addIcon={true}
                />
              );
            else
              return (
                <ExerciseSettings
                  key={exercise.id}
                  currentValue={exercise}
                  setValue={setExerciseData}
                  array={exerciseData}
                  iconFun={deleteExerciseData}
                  deleteIcon={true}
                />
              );
          })}
          <Button onClick={add}>Dodaj</Button>
        </IsOpen>
      )}
    </StyledTrainingAddExerciseItem>
  );
};

export default TrainingAddExerciseItem;
