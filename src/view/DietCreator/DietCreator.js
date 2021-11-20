import React, { useEffect, useState } from "react";
import {
  Box,
  Icon,
  ReusableViewWrapper,
  ClickedInput,
  Spacer,
  NoDataHeader,
} from "../../components/Reusable";
import BoxHeader from "../../components/Box/components/BoxHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInput } from "../../hooks/useInput";
import Select from "../../components/Select";
import CreatorDay from "./components/CreatorDay";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDietCreatorItems,
  selectMealsCount,
  updateMealsCount,
} from "../../features/DietCreatorSlice";
import GridSlider from "../../components/GridSlider/GridSlider";
import { useGridSlider } from "../../hooks/useGridSlider";
import DietToolbar from "./components/DietToolbar";

import { DayData } from "../../data/DietCreator";
import {
  changeModalState,
  changeNotificationStateShow,
  setModalData,
} from "../../features/AppSlice";

const DietCreator = ({ isEdit }) => {
  const [mealValue, setMealValue] = useState(1);

  const { ...dietName } = useInput("Brak nazwy"); //Jeśli edycja to zmienić na ładowanie danych z bazy
  const { ...kcalValue } = useInput("Kaloryczność"); //Jeśli edycja to zmienić na ładowanie danych z bazy
  const items = useSelector(selectDietCreatorItems);
  const modalDispatch = useDispatch();
  const notificationDispatch = useDispatch();
  const mealsCount = useSelector(selectMealsCount);
  const creatorDietDispatch = useDispatch();
  const grid = useGridSlider({
    data: items,
    viewItems: 4,
    mediaQueries: [
      {
        maxWidth: 1400,
        viewItems: 3,
      },
      {
        maxWidth: 900,
        viewItems: 1,
      },
    ],
  });

  useEffect(() => {
    creatorDietDispatch(updateMealsCount(mealValue));
  }, [mealValue]);

  const deleteDiet = () => {
    modalDispatch(changeModalState());
    modalDispatch(setModalData({ name: "dietdelete" }));
  };

  const saveDiet = () => {
    notificationDispatch(changeNotificationStateShow("Zapisano"));
  };

  const handleSelect = (event) => {
    setMealValue(parseInt(event.target.value));
  };
  console.log("meal", mealValue);

  return (
    <ReusableViewWrapper flexValue="1">
      <Box width="100%" height={`${mealsCount * 50}%`} minHeight="100%">
        <BoxHeader>
          <Icon>
            <FontAwesomeIcon icon="chevron-left" />
          </Icon>
          <ClickedInput {...dietName} title="Zmień nazwę diety" />
          <ClickedInput {...kcalValue} title="Nadaj kaloryczność diety" />
          <select onChange={handleSelect}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <Spacer />
          <Icon onClick={() => saveDiet()} fontSize="1.3em">
            <FontAwesomeIcon icon="save" />
          </Icon>
          <Icon onClick={() => deleteDiet()} fontSize="1.2em">
            <FontAwesomeIcon icon="trash-alt" />
          </Icon>
        </BoxHeader>
        <DietToolbar sliderArrowConfig={grid} />
        <GridSlider gridConfig={grid}>
          {items.length > 0 ? (
            items.map((item, index) => (
              <CreatorDay
                key={item.id}
                dayId={item.id}
                mealsData={item.meals}
                dayHeaderTitle={DayData[index]}
              />
            ))
          ) : (
            <NoDataHeader>Brak danych</NoDataHeader>
          )}
        </GridSlider>
      </Box>
    </ReusableViewWrapper>
  );
};

export default DietCreator;
