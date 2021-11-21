import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  AbsoluteIconWrapper,
  GridLayout,
  Icon,
} from "../../../components/Reusable";
import {
  deleteDietItems,
  selectCurrentDayCount,
  updateMealsCount,
} from "../../../features/DietCreatorSlice";
import CreatorMeal from "./CreatorMeal";
import { MealsData } from "../../../data/DietCreator";
import { retNutritionalTwo } from "../../../functions/NutritionalCalc";

const StyledCreatorDay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-right: 2px solid ${({ theme }) => theme.naturalFive};
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

const CreatorDay = ({
  dayId,
  dayHeaderTitle,
  mealsData = [{}, {}, {}, {}],
}) => {
  const creatorDietDispatch = useDispatch();
  const dayCount = useSelector(selectCurrentDayCount);
  const [nutritional, setNutritional] = useState("0kcal 0B 0T 0F");

  const deleteDay = () => {
    creatorDietDispatch(deleteDietItems(dayId));
  };

  useEffect(() => {
    let tempKcal = 0;
    let tempP = 0;
    let tempC = 0;
    let tempF = 0;

    mealsData.forEach((meal) => {
      meal.products.forEach((product) => {
        const { kcalValue, pValue, cValue, fValue } = retNutritionalTwo(
          product.weight,
          product.proteinOnHundredGrams,
          product.carbohydratesOnHundredGrams,
          product.fatOnHundredGrams
        );
        tempKcal += kcalValue;
        tempP += pValue;
        tempC += cValue;
        tempF += fValue;
      });
    });
    setNutritional(`${tempKcal}kcal ${tempP}B ${tempC}W ${tempF}T`);
  }, [mealsData]);

  return (
    <StyledCreatorDay>
      <Header>
        {dayCount > 1 && (
          <AbsoluteIconWrapper left="10px">
            <Icon onClick={() => deleteDay()}>
              <FontAwesomeIcon icon="times" />
            </Icon>
          </AbsoluteIconWrapper>
        )}

        <h4>{dayHeaderTitle}</h4>
        <h5>{nutritional}</h5>
      </Header>
      <GridLayout
        flexValue="1"
        gridTemplateRows={`repeat(${mealsData.length}, 1fr)`}
      >
        {mealsData.map((item, index) => (
          <CreatorMeal
            key={item.id}
            dayId={dayId}
            mealId={item.id}
            mealsHeaderTitle={MealsData[index]}
            productsData={item.products}
          />
        ))}
      </GridLayout>
    </StyledCreatorDay>
  );
};

export default CreatorDay;
