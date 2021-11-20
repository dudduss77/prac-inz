import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Icon,
  AbsoluteIconWrapper,
  Column,
} from "../../../components/Reusable";
import ProductItem from "./ProductItem";
import { useDispatch } from "react-redux";
import { changeModalState, setModalData } from "../../../features/AppSlice";
import { retNutritionalTwo } from "../../../functions/NutritionalCalc";

const StyledCreatorMeal = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.naturalFour};
`;

const MealHeader = styled.div`
  background: ${({ theme }) => theme.naturalOne};
  text-align: center;
  position: relative;
  h5 {
    color: ${({ theme }) => theme.CharacterSecoundary};
  }
`;

const CreatorMeal = ({ dayId, mealId, mealsHeaderTitle, productsData }) => {
  const modalDispatch = useDispatch();
  const [nutritional, setNutritional] = useState("0kcal 0B 0T 0F");

  const addMeal = () => {
    modalDispatch(changeModalState());
    modalDispatch(setModalData("dietaddmeal"));
  };

  useEffect(() => {
    let tempKcal = 0;
    let tempP = 0;
    let tempC = 0;
    let tempF = 0;

    productsData.forEach((item) => {
      const { kcalValue, pValue, cValue, fValue } = retNutritionalTwo(
        item.weight,
        item.proteinOnHundredGrams,
        item.carbohydratesOnHundredGrams,
        item.fatOnHundredGrams
      );
      tempKcal += kcalValue;
      tempP += pValue;
      tempC += cValue;
      tempF += fValue;
    });

    setNutritional(`${tempKcal}kcal ${tempP}B ${tempC}W ${tempF}T`);
  }, [productsData]);
  return (
    <StyledCreatorMeal>
      <MealHeader>
        <h4>{mealsHeaderTitle}</h4>
        <h5>{nutritional}</h5>
        <AbsoluteIconWrapper right="10px">
          <Icon onClick={() => addMeal()}>
            <FontAwesomeIcon icon="plus" />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon="ellipsis-h" />
          </Icon>
        </AbsoluteIconWrapper>
      </MealHeader>
      <Column>
        {productsData.map((item) => (
          <ProductItem
            dayId={dayId}
            mealId={mealId}
            productId={item.id}
            productName={item.name}
            productWeight={item.weight}
            proteinOnHundred={item.proteinOnHundredGrams}
            carbohydratesOnHundred={item.carbohydratesOnHundredGrams}
            fatOnHundred={item.fatOnHundredGrams}
          />
        ))}
      </Column>
    </StyledCreatorMeal>
  );
};

export default CreatorMeal;
