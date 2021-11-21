import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import GridSliderArrow from "../../../components/GridSlider/GridSliderArrow";
import { Icon } from "../../../components/Reusable";
import {
  addDietItems,
  selectCurrentDayCount,
  selectMealsCount,
} from "../../../features/DietCreatorSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { changeNotificationStateShow } from "../../../features/AppSlice";

const StyledDietToolbar = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 10px;
  border-bottom: 2px solid ${({ theme }) => theme.naturalFive};
`;

const AddNewDay = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;

const DietToolbar = ({ sliderArrowConfig }) => {
  const creatorDietDispatch = useDispatch();
  const currentDayCount = useSelector(selectCurrentDayCount);
  const mealsCount = useSelector(selectMealsCount);
  const notificationDispatch = useDispatch();

  const addDay = () => {
    if (currentDayCount < 7) creatorDietDispatch(addDietItems());
    else
      notificationDispatch(
        changeNotificationStateShow("Osiągnięto maksymalną ilość dni")
      );
  };
  return (
    <StyledDietToolbar>
      <GridSliderArrow direction="left" arrowConfig={sliderArrowConfig} />

      <AddNewDay onClick={() => addDay()}>
        <Icon fontSize="1.2em">
          <FontAwesomeIcon icon="plus" />
        </Icon>
        Dodaj kolejny dzień
      </AddNewDay>
      <GridSliderArrow direction="right" arrowConfig={sliderArrowConfig} />
    </StyledDietToolbar>
  );
};

export default DietToolbar;
