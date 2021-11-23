import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { AbsoluteIconWrapper, Icon } from "../../../components/Reusable";
import TrainingType from "./TrainingType";
import {
  deleteDay,
  selectTrainingDayCount,
} from "../../../features/TrainingCreatorSlice";

const StyledTrainingDay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-right: 2px solid ${({ theme }) => theme.naturalFive};
  min-height: 0;
  &:last-child {
    border: none;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.naturalFive};
  position: relative;
  padding: 7px 0;
  ${AbsoluteIconWrapper} {
    visibility: hidden;
  }

  &:hover ${AbsoluteIconWrapper} {
    visibility: visible;
  }

  h5 {
    color: ${({ theme }) => theme.CharacterSecoundary};
  }
`;

const Wrapper = styled.div`
  overflow: auto;
`;

const TrainingDay = ({ dayId, dayIndex, trainingTypesData = [] }) => {
  const trainingDayCount = useSelector(selectTrainingDayCount);
  const trainingCreatorDispatch = useDispatch();

  const deleteTrainingDay = () => {
    trainingCreatorDispatch(deleteDay(dayId));
  };
  return (
    <StyledTrainingDay>
      <Header>
        <AbsoluteIconWrapper left="10px">
          {trainingDayCount > 1 && (
            <Icon onClick={deleteTrainingDay}>
              <FontAwesomeIcon icon="times" />
            </Icon>
          )}
        </AbsoluteIconWrapper>
        <h4>{`Trening ${String.fromCharCode(64 + dayIndex + 1)}`}</h4>
      </Header>
      <Wrapper>
        {trainingTypesData.map((type) => (
          <TrainingType
            key={type.name}
            dayId={dayId}
            typeId={type.id}
            trainingTypeName={type.name}
            trainingExercisesData={type.exercises}
          />
        ))}
      </Wrapper>
    </StyledTrainingDay>
  );
};

export default TrainingDay;