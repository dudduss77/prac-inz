import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectModalData } from "../../../features/AppSlice";
import {
  selectExercise,
  updateExercise,
} from "../../../features/TrainingCreatorSlice";
import { Box, Button } from "../../Reusable";
import ExerciseSettings from "./ExerciseSettings";
import { ModalHeader } from "./ModalReusable";

const TrainingEditExercise = () => {
  const modalData = useSelector(selectModalData);
  const editExercise = useSelector(selectExercise);
  const trainingCreatorDispatch = useDispatch();

  const [exerciseData, setExerciseData] = useState([{ id: 1 }]);

  useEffect(() => {
    setExerciseData(editExercise.series);
  }, [editExercise]);

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

  const edit = () => {
    trainingCreatorDispatch(
      updateExercise({
        dayId: modalData.config.dayId,
        typeId: modalData.config.typeId,
        exerciseId: modalData.config.exerciseId,
        data: exerciseData,
      })
    );
  };

  return (
    <>
      <ModalHeader>Edytuj ćwiczenie</ModalHeader>
      <Box height="350px" width="100%" isOverflow isGap isPadding>
        {editExercise.name}
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
        <Button onClick={edit}>Edytuj</Button>
      </Box>
    </>
  );
};

export default TrainingEditExercise;
