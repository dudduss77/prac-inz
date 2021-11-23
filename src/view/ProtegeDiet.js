import React, { useState } from "react";
import styled from "styled-components";
import BoxHeader from "../components/Box/components/BoxHeader";
import GridSlider from "../components/GridSlider/GridSlider";
import GridSliderArrow from "../components/GridSlider/GridSliderArrow";
import {
  Box,
  NoDataHeader,
  ReusableViewWrapper,
  Spacer,
} from "../components/Reusable";
import { DayData } from "../data/DietCreator";
import { useGridSlider } from "../hooks/useGridSlider";
import CreatorDay from "./DietCreator/components/CreatorDay";

const ProtegeDiet = () => {
  const [dietData, setDietData] = useState([
    // {
    //   id: 1,
    //   meals: [
    //     {
    //       id: 1,
    //       products: [
    //         {
    //           id: 1,
    //           name: "Bułka",
    //           weight: 100,
    //           proteinOnHundredGrams: 10,
    //           carbohydratesOnHundredGrams: 2,
    //           fatOnHundredGrams: 1,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ]);
  const grid = useGridSlider({
    data: dietData,
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
  return (
    <ReusableViewWrapper flexValue="1" minHeight="0">
      <Box width="100%" minHeight="100%">
        <BoxHeader>
          <GridSliderArrow direction="left" arrowConfig={grid} />
          Aktualna dieta
          <Spacer />
          <GridSliderArrow direction="right" arrowConfig={grid} />
        </BoxHeader>
        <GridSlider minHeight="0" gridConfig={grid}>
          {dietData.length > 0 ? (
            dietData.map((item, index) => (
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

export default ProtegeDiet;
