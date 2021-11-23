import React, { useState } from "react";
import styled from "styled-components";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import { Box, NoDataHeader } from "../../../components/Reusable";
import { MealsData } from "../../../data/DietCreator";
import CreatorMeal from "../../DietCreator/components/CreatorMeal";

const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

const CurrentDiet = () => {
  const [currentDay, setCurrentDay] = useState([
    // {
    //   id: 1,
    //   products: [
    //     {
    //       id: 1,
    //       name: "Bułka",
    //       weight: 100,
    //       proteinOnHundredGrams: 10,
    //       carbohydratesOnHundredGrams: 2,
    //       fatOnHundredGrams: 1,
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   products: [
    //     {
    //       id: 1,
    //       name: "Bułka",
    //       weight: 100,
    //       proteinOnHundredGrams: 10,
    //       carbohydratesOnHundredGrams: 2,
    //       fatOnHundredGrams: 1,
    //     },
    //   ],
    // },
  ]);

  const dietEnd = () => {
    alert("Dzień wykonany");
  };

  return (
    <Box width="50%" minHeight="600px">
      <BoxHeader
        headerTitle="Dieta na dziś"
        headerButtonTitle="Dieta wykonana"
        headerOnClick={() => dietEnd()}
      />
      <Wrapper>
        {currentDay > 0 ? (
          currentDay.map((item, index, arr) => (
            <CreatorMeal
              key={item.id}
              mealId={item.id}
              isMinHeight={arr.length > 2}
              mealsHeaderTitle={MealsData[index]}
              productsData={item.products}
            />
          ))
        ) : (
          <NoDataHeader>Brak diety na dziś</NoDataHeader>
        )}
      </Wrapper>
    </Box>
  );
};

export default CurrentDiet;
