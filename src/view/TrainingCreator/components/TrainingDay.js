import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { AbsoluteIconWrapper, Icon } from "../../../components/Reusable";
import TrainingType from "./TrainingType";

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

const TrainingDay = ({ dayId, trainingTypesData = [] }) => {
  return (
    <StyledTrainingDay>
      <Header>
        <AbsoluteIconWrapper left="10px">
          <Icon>
            <FontAwesomeIcon icon="times" />
          </Icon>
        </AbsoluteIconWrapper>
        <h4>{`Trening ${String.fromCharCode(64 + dayId)}`}</h4>
      </Header>
      <Wrapper>
        {trainingTypesData.map((type) => (
          <TrainingType
            key={type.name}
            dayId={dayId}
            trainingTypeName={type.name}
            trainingExercisesData={type.exercises}
          />
        ))}
      </Wrapper>
    </StyledTrainingDay>
  );
};

export default TrainingDay;
