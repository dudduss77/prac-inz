import React, { useState } from "react";
import styled from "styled-components";
import { createNewExercise } from "../../../firebase/dataFirebase";
import { useInput } from "../../../hooks/useInput";
import Input from "../../Input";
import { Button, Row } from "../../Reusable";

const StyledTrainingAddExerciseItemAdd = styled.div`
  width: calc(100% - 20px);
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.naturalSeven};
  h4 {
    color: ${({ theme }) => theme.CharacterSecoundary};
  }
`;

const TrainingAddExerciseItemAdd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nameInput = useInput("");

  const addProduct = async () => {
    let exercise = {
      name: nameInput.value,
    };
    await createNewExercise(exercise);
    setIsOpen(false);
  };

  return (
    <StyledTrainingAddExerciseItemAdd>
      {!isOpen && (
        <>
          <h4>Nie znaleziono ćwiczenia</h4>
          <Button onClick={() => setIsOpen(true)}>Dodaj ćwiczenie</Button>
        </>
      )}
      {isOpen && (
        <>
          <Input useInput={nameInput} placeholder="Nazwa ćwiczenia" />
          <Row isGap noMedia>
            <Button onClick={addProduct}>Dodaj</Button>
            <Button onClick={() => setIsOpen(false)}>Anuluj</Button>
          </Row>
        </>
      )}
    </StyledTrainingAddExerciseItemAdd>
  );
};

export default TrainingAddExerciseItemAdd;
