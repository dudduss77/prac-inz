import React, { useState } from "react";
import styled from "styled-components";
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
          <Input placeholder="Nazwa ćwiczenia" />
          <Row isGap noMedia>
            <Button>Dodaj</Button>
            <Button onClick={() => setIsOpen(false)}>Anuluj</Button>
          </Row>
        </>
      )}
    </StyledTrainingAddExerciseItemAdd>
  );
};

export default TrainingAddExerciseItemAdd;
