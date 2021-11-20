import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeModalState, selectModalData } from "../../../features/AppSlice";
import { addProductToMeal } from "../../../features/DietCreatorSlice";
import { retNutritionalTwo } from "../../../functions/NutritionalCalc";
import { useInput } from "../../../hooks/useInput";
import Input from "../../Input";
import { Button, Spacer } from "../../Reusable";

const StyledDietAddMealItem = styled.div`
  width: calc(100% - 20px);
  padding: 5px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.naturalSeven};
  display: flex;
  flex-direction: ${({ isOpen }) => (isOpen ? "column" : "row")};
  align-items: ${({ isOpen }) => (isOpen ? "flex-start" : "center")};
  gap: 5px;
  h5 {
    color: ${({ theme }) => theme.CharacterSecoundary};
  }
`;

const IsOpen = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const DietAddMealItem = ({
  itemName,
  proteinOnHundredGrams,
  carbohydratesOnHundredGrams,
  fatOnHundredGrams,
}) => {
  const modalData = useSelector(selectModalData);
  const dietCreatorDispatch = useDispatch();
  const modalDispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [nutritional, setNutritional] = useState("0kcal 0B 0T 0F");
  const { ...itemInput } = useInput("100g");

  const staticNutritional = retNutritionalTwo(
    100,
    proteinOnHundredGrams,
    carbohydratesOnHundredGrams,
    fatOnHundredGrams
  );

  useEffect(() => {
    const { kcalValue, pValue, cValue, fValue } = retNutritionalTwo(
      parseInt(itemInput.value.replace("g", "")),
      proteinOnHundredGrams,
      carbohydratesOnHundredGrams,
      fatOnHundredGrams
    );

    setNutritional(`${kcalValue}kcal ${pValue}B ${cValue}W ${fValue}T`);
  }, [itemInput.value]);

  const addProduct = () => {
    let product = {
      name: itemName,
      weight: parseInt(itemInput.value.replace("g", "")),
      proteinOnHundredGrams: proteinOnHundredGrams,
      carbohydratesOnHundredGrams: carbohydratesOnHundredGrams,
      fatOnHundredGrams: fatOnHundredGrams,
    };

    dietCreatorDispatch(
      addProductToMeal({
        dayId: modalData.config.dayId,
        mealId: modalData.config.mealId,
        product,
      })
    );
    modalDispatch(changeModalState());
  };

  return (
    <StyledDietAddMealItem onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      {itemName}
      {!isOpen && (
        <>
          <Spacer />
          <h5>{`${staticNutritional.kcalValue}kcal ${staticNutritional.pValue}B ${staticNutritional.cValue}W ${staticNutritional.fValue}T`}</h5>
          <Spacer />
          100g
        </>
      )}
      {isOpen && (
        <IsOpen onClick={(evt) => evt.stopPropagation()}>
          <Input useInput={itemInput} width="100px" placeholder="100g" />
          <Spacer />
          <h5>{nutritional}</h5>
          <Spacer />
          <Button onClick={() => addProduct()}>Dodaj</Button>
        </IsOpen>
      )}
    </StyledDietAddMealItem>
  );
};

export default DietAddMealItem;
