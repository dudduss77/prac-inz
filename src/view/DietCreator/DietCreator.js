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
  selectDietName,
  selectKcalValue,
  updateDietKcalValue,
  updateDietName,
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
import { useParams } from "react-router";

const DietCreator = ({ isEdit = false }) => {
  const { id } = useParams();
  const [mealValue, setMealValue] = useState(1);
  const dietName = useSelector(selectDietName);
  const dietKcalValue = useSelector(selectKcalValue);
  const { ...dietNameInput } = useInput(dietName); //Jeśli edycja to zmienić na ładowanie danych z bazy
  const { ...kcalValueInput } = useInput(dietKcalValue); //Jeśli edycja to zmienić na ładowanie danych z bazy
  const items = useSelector(selectDietCreatorItems);
  const modalDispatch = useDispatch();
  const notificationDispatch = useDispatch();
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

  // Do uzupełnenia gdy bedą dane
  useEffect(() => {
    if (isEdit) {
      alert("Uzupełni jak baza będzie");
      console.log(id);
    }
  }, [isEdit]);

  useEffect(() => {
    creatorDietDispatch(updateDietName(dietNameInput.value));
  }, [dietNameInput.value]);

  useEffect(() => {
    creatorDietDispatch(updateDietKcalValue(kcalValueInput.value));
  }, [kcalValueInput.value]);

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

  const handleSelect = (val) => {
    if (val) setMealValue(parseInt(val));
  };

  return (
    <ReusableViewWrapper flexValue="1" minHeight="0">
      <Box width="100%" maxHeight="100%" minHeight="100%">
        <BoxHeader>
          <Icon>
            <FontAwesomeIcon icon="chevron-left" />
          </Icon>
          <ClickedInput {...dietNameInput} title="Zmień nazwę diety" />
          <ClickedInput {...kcalValueInput} title="Nadaj kaloryczność diety" />
          <Select
            initialValue={mealValue}
            customHeight="30px"
            onChange={handleSelect}
            data={["1", "2", "3", "4", "5"]}
          />
          <Spacer />
          <Icon onClick={() => saveDiet()} fontSize="1.3em">
            <FontAwesomeIcon icon="save" />
          </Icon>
          <Icon onClick={() => deleteDiet()} fontSize="1.2em">
            <FontAwesomeIcon icon="trash-alt" />
          </Icon>
        </BoxHeader>
        <DietToolbar sliderArrowConfig={grid} />
        <GridSlider minHeight="0" gridConfig={grid}>
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
