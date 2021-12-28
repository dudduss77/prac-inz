import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Icon, Spacer } from "../../../components/Reusable";
import { changeModalState, setModalData } from "../../../features/AppSlice";
import { deleteExercise } from "../../../features/TrainingCreatorSlice";
import { selectUserType } from "../../../features/UserSlice";
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

const TrainingExercise = ({
  dayId,
  typeId,
  exerciseId,
  exerciseName,
  exerciseSeriesData = [],
}) => {
  const isProtege = useSelector(selectUserType);
  const trainingCreatorDispatch = useDispatch();
  const modalDispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const removeExercise = () => {
    trainingCreatorDispatch(
      deleteExercise({ dayId: dayId, typeId: typeId, exerciseId: exerciseId })
    );
  };
  const edit = () => {
    modalDispatch(
      setModalData({
        name: "trainingeditexercise",
        config: { dayId: dayId, typeId: typeId, exerciseId: exerciseId },
      })
    );
    modalDispatch(changeModalState());
  };
  return (
    <StyledTrainingExercise>
      <Header>
        {exerciseName}
        <Spacer />
        {!isProtege && (
          <>
            <HiddenIcon>
              <FontAwesomeIcon onClick={edit} icon="edit" />
            </HiddenIcon>
            <HiddenIcon>
              <FontAwesomeIcon onClick={removeExercise} icon="times" />
            </HiddenIcon>
          </>
        )}

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
