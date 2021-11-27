import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectModalData } from "../../../features/AppSlice";
import {
  addDay,
  passExercise,
  selectAllExercise,
  selectTrainingDayCount,
  selectTrainingLastId,
} from "../../../features/TrainingCreatorSlice";
import { Button } from "../../Reusable";
import Select from "../../Select";
import { ModalHeader } from "./ModalReusable";

const TypeData = [
  {
    id: 1,
    name: "Rozgrzewka",
  },
  {
    id: 2,
    name: "Trening Właściwy",
  },
  {
    id: 3,
    name: "Kardio",
  },
  {
    id: 4,
    name: "Rozciąganie",
  },
];

const TrainingCopyTo = () => {
  const [selectTrainingData, setSelectTrainingData] = useState([]);
  const [selectTypeData, setSelectTypeData] = useState([]);
  const [selectedTraining, setSelectedTraining] = useState();
  const [selectedType, setSelectedType] = useState();

  const modalData = useSelector(selectModalData);
  const trainingCount = useSelector(selectTrainingDayCount);
  const exercisesData = useSelector(selectAllExercise);
  const trainingLastId = useSelector(selectTrainingLastId);
  const trainingCreatorDispatch = useDispatch();

  useEffect(() => {
    setSelectTypeData(TypeData.map((type) => type.name));
  }, []);

  useEffect(() => {
    let tempArr = [];
    for (let i = 0; i < trainingCount; i++)
      tempArr.push(`Trening ${String.fromCharCode(65 + i)}`);
    tempArr.push("Nowy Trening");
    setSelectTrainingData(tempArr);
  }, []);

  const setterTraining = (val, setter) => {
    if (val === "Nowy Trening") setter("new");
    else {
      let temp = val.substr(val.indexOf(" ") + 1);
      temp = temp.charCodeAt(0) - 64;
      setter(temp);
    }
  };

  const setterType = (val, setter) => {
    if (val) {
      const temp = TypeData.find((type) => type.name === val).id;
      if (temp) setter(temp);
    }
  };
  useEffect(() => {
    if (selectedTraining) {
      if (selectedTraining === "new")
        setSelectTypeData(TypeData.map((type) => type.name));
      else {
        let temp = TypeData.filter(
          (type) => type.id !== modalData.config.typeId
        );
        setSelectTypeData(temp.map((type) => type.name));
      }
    }
  }, [selectedTraining]);

  const pass = () => {
    if (selectedTraining === "new") {
      trainingCreatorDispatch(addDay());
      trainingCreatorDispatch(
        passExercise({
          dayId: trainingLastId + 1,
          typeId: parseInt(selectedType),
          data: exercisesData,
        })
      );
    } else {
      trainingCreatorDispatch(
        passExercise({
          dayId: parseInt(selectedTraining),
          typeId: parseInt(selectedType),
          data: exercisesData,
        })
      );
    }
  };
  return (
    <>
      <ModalHeader>Skopiuj do</ModalHeader>
      <Select
        data={selectTrainingData}
        onChange={(val) => setterTraining(val, setSelectedTraining)}
        placeholder="Trening"
      />
      <Select
        data={selectTypeData}
        onChange={(val) => setterType(val, setSelectedType)}
        placeholder="Typ"
      />
      <Button onClick={pass}>Skopiuj</Button>
    </>
  );
};

export default TrainingCopyTo;
