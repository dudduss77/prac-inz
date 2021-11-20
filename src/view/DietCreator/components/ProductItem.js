import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ClickedInput, Icon, Spacer } from "../../../components/Reusable";
import { useInput } from "../../../hooks/useInput";
import {
  retNutritional,
  retNutritionalTwo,
} from "../../../functions/NutritionalCalc";
import {
  deleteProductFromMeal,
  updateProductWeight,
} from "../../../features/DietCreatorSlice";
import { useDispatch } from "react-redux";

const StyledProductItem = styled.div`
  width: calc(100% - 20px);
  padding: 5px 10px;
  display: flex;
  gap: 10px;
  position: relative;

  ${Icon} {
    display: none;
  }

  &:hover ${Icon} {
    display: block;
  }

  &:nth-child(2n) {
    background: ${({ theme }) => theme.naturalFive};
  }
`;

const ProductNutritional = styled.h5`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.CharacterSecoundary};
`;

const ProductItem = ({
  dayId,
  mealId,
  productId,
  productName,
  productWeight = 100,
  proteinOnHundred,
  carbohydratesOnHundred,
  fatOnHundred,
}) => {
  const dietCreatorDispatch = useDispatch();
  const { ...inputMealWeight } = useInput(`${productWeight}g`);
  const [nutritionalValue, setNutritionalValue] = useState("");

  console.log(dayId, mealId, productId);

  useEffect(() => {
    const { kcalValue, pValue, cValue, fValue } = retNutritionalTwo(
      parseInt(inputMealWeight.value.replace("g", "")),
      proteinOnHundred,
      carbohydratesOnHundred,
      fatOnHundred
    );
    setNutritionalValue(`${kcalValue}kcal ${pValue}B ${cValue}W ${fValue}T`);
    dietCreatorDispatch(
      updateProductWeight({
        itemId: dayId,
        mealId: mealId,
        productId: productId,
        newWeight: parseInt(inputMealWeight.value.replace("g", "")),
      })
    );
  }, [inputMealWeight.value]);

  const deleteProduct = () => {
    dietCreatorDispatch(
      deleteProductFromMeal({
        dayId: dayId,
        mealId: mealId,
        productId: productId,
      })
    );
  };
  return (
    <StyledProductItem>
      {productName}
      <ProductNutritional>{nutritionalValue}</ProductNutritional>
      <Spacer />
      <ClickedInput primaryColor {...inputMealWeight} />
      <Icon onClick={() => deleteProduct()}>
        <FontAwesomeIcon icon="times" />
      </Icon>
    </StyledProductItem>
  );
};

export default ProductItem;
