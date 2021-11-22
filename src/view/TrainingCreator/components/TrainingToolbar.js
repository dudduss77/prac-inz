import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import GridSliderArrow from "../../../components/GridSlider/GridSliderArrow";
import { Icon } from "../../../components/Reusable";
import { addDay } from "../../../features/TrainingCreatorSlice";

const StyledTrainingToolbar = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 10px;
  border-bottom: 2px solid ${({ theme }) => theme.naturalFive};
`;

const AddNewTraining = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;

const TrainingToolbar = ({ sliderArrowConfig }) => {
  const creatorTrainingDispatch = useDispatch();
  const addTrainingDay = () => {
    creatorTrainingDispatch(addDay());
  };
  return (
    <StyledTrainingToolbar>
      <GridSliderArrow direction="left" arrowConfig={sliderArrowConfig} />
      <AddNewTraining onClick={addTrainingDay}>
        <Icon fontSize="1.2em">
          <FontAwesomeIcon icon="plus" />
        </Icon>
        Dodaj kolejny trening
      </AddNewTraining>
      <GridSliderArrow direction="right" arrowConfig={sliderArrowConfig} />
    </StyledTrainingToolbar>
  );
};

export default TrainingToolbar;
