import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
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
import { selectUserType } from "../../../features/UserSlice";
import { changeModalState, setModalData } from "../../../features/AppSlice";

const StyledCreatorDay = styled.div`
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
  min-height: 100%;
`;

const CreatorDay = ({
  dayId,
  dayHeaderTitle,
  mealsData = [{}, {}, {}, {}],
}) => {
  const isProtege = useSelector(selectUserType);
  const modalDispatch = useDispatch();
  const dispatch = useDispatch();
  const dayCount = useSelector(selectCurrentDayCount);
  const [nutritional, setNutritional] = useState("0kcal 0B 0T 0F");

  const deleteDay = () => {
    dispatch(deleteDietItems(dayId));
  };

  const sendNote = () => {
    const text = `Cześć. Mam uwagę dotyczącą aktualnej diety do "${dayHeaderTitle}": `
    modalDispatch(changeModalState());
    modalDispatch(
      setModalData({ name: "sendnote", config: { text, type: "diet", dayId: dayId } })
    );
  };

  useEffect(() => {
    let tempKcal = 0;
    let tempP = 0;
    let tempC = 0;
    let tempF = 0;

    mealsData.forEach((meal) => {
      if (meal.products) {
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
      }
    });
    setNutritional(`${tempKcal}kcal ${tempP}B ${tempC}W ${tempF}T`);
  }, [mealsData]);

  return (
    <StyledCreatorDay>
      <Header>
        {isProtege ? (
          <AbsoluteIconWrapper left="10px">
            <Icon onClick={() => sendNote()}>
              <FontAwesomeIcon icon="exclamation" />
            </Icon>
          </AbsoluteIconWrapper>
        ) : (
          dayCount > 1 && (
            <AbsoluteIconWrapper left="10px">
              <Icon onClick={() => deleteDay()}>
                <FontAwesomeIcon icon="times" />
              </Icon>
            </AbsoluteIconWrapper>
          )
        )}

        <h4>{dayHeaderTitle}</h4>
        <h5>{nutritional}</h5>
      </Header>
      <Wrapper>
        {mealsData &&
          mealsData.map((item, index, arr) => (
            <CreatorMeal
              key={item.id}
              dayId={dayId}
              mealId={item.id}
              isMinHeight={arr.length > 2}
              mealsHeaderTitle={MealsData[index]}
              productsData={item.products}
            />
          ))}
      </Wrapper>
    </StyledCreatorDay>
  );
};

export default CreatorDay;
