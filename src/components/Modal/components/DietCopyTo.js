import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeModalState, selectModalData } from "../../../features/AppSlice";
import {
  addDietItems,
  passProductToMeal,
  selectAllProductInMeal,
  selectCurrentDayCount,
  selectLastDayId,
  selectMealsCount,
  updateMealsCount,
} from "../../../features/DietCreatorSlice";
import { Button } from "../../Reusable";
import Select from "../../Select";
import { ModalHeader } from "./ModalReusable";

const mealsData = [
  "Posiłek 1",
  "Posiłek 2",
  "Posiłek 3",
  "Posiłek 4",
  "Posiłek 5",
];

const DietCopyTo = () => {
  const [selectDayData, setSelectDayData] = useState([]);
  const [selectMealsData, setSelectMealsData] = useState(mealsData);

  const [selectedDay, setSelectedDay] = useState();
  const [selectedMeal, setSelectedMeal] = useState();

  const creatorDietDispatch = useDispatch();
  const modalDispatch = useDispatch();

  const modalConfig = useSelector(selectModalData);
  const dayCount = useSelector(selectCurrentDayCount);
  const dayLastId = useSelector(selectLastDayId);
  const mealCount = useSelector(selectMealsCount);
  const selectProducts = useSelector((state) =>
    selectAllProductInMeal(
      state,
      modalConfig.config.dayId,
      modalConfig.config.mealId
    )
  );

  useEffect(() => {
    let dayTemp = [];
    for (let i = 0; i < dayCount; i++) dayTemp.push(`Dzień ${i + 1}`);
    dayTemp.push("Nowy dzień");
    setSelectDayData(dayTemp);
  }, []);

  useEffect(() => {
    if (
      selectedDay !== "new" &&
      parseInt(selectedDay) === modalConfig.config.dayId
    ) {
      setSelectMealsData(
        mealsData.filter(
          (item, index) => index + 1 !== modalConfig.config.mealId
        )
      );
    } else setSelectMealsData(mealsData);
  }, [selectedDay]);

  const modValueFromSelect = (val, setter) => {
    if (val === "Nowy dzień") {
      setter("new");
    } else {
      let dayNum = val.match(/(\d+)/g);
      if (dayNum) setter(dayNum[0]);
    }
  };

  const copyTo = () => {
    if (selectedDay === "new") {
      let mealsValue = parseInt(selectedMeal);
      creatorDietDispatch(addDietItems());
      if (mealsValue > mealCount)
        creatorDietDispatch(updateMealsCount(mealsValue));
      creatorDietDispatch(
        passProductToMeal({
          dayId: dayLastId + 1,
          mealId: mealsValue,
          products: selectProducts,
        })
      );
    } else {
      let dayValue = parseInt(selectedDay);
      let mealsValue = parseInt(selectedMeal);
      if (mealsValue > mealCount)
        creatorDietDispatch(updateMealsCount(mealsValue));
      creatorDietDispatch(
        passProductToMeal({
          dayId: dayValue,
          mealId: mealsValue,
          products: selectProducts,
        })
      );
    }
    modalDispatch(changeModalState());
  };

  return (
    <>
      <ModalHeader>Skopiuj do</ModalHeader>
      <Select
        onChange={(val) => modValueFromSelect(val, setSelectedDay)}
        data={selectDayData}
        placeholder="Dzień"
      />
      <Select
        onChange={(val) => modValueFromSelect(val, setSelectedMeal)}
        data={selectMealsData}
        placeholder="Posiłek"
      />
      <Button onClick={copyTo}>Skopiuj</Button>
    </>
  );
};

export default DietCopyTo;
