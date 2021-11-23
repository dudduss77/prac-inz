import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { selectModalData } from "../../../features/AppSlice";
import Input from "../../Input";
import { Box, Button, Row } from "../../Reusable";
import { ModalHeader } from "./ModalReusable";
import TrainingAddExerciseItem from "./TrainingAddExerciseItem";
import TrainingAddExerciseItemAdd from "./TrainingAddExerciseItemAdd";

const TrainingAddExercise = () => {
  return (
    <>
      <ModalHeader>Dodaj ćwiczenie</ModalHeader>
      <Row noMedia width="100%">
        <Input width="100%" />
        <Button isSquare>
          <FontAwesomeIcon icon="search" />
        </Button>
      </Row>
      <Box height="350px" width="100%" isOverflow>
        <TrainingAddExerciseItem />
        <TrainingAddExerciseItemAdd />
      </Box>
    </>
  );
};

export default TrainingAddExercise;
