import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BoxHeader from "../components/Box/components/BoxHeader";
import GridSlider from "../components/GridSlider/GridSlider";
import GridSliderArrow from "../components/GridSlider/GridSliderArrow";
import LoaderFullPage from "../components/LoaderFullPage";
import {
  Box,
  NoDataHeader,
  ReusableViewWrapper,
  Spacer,
} from "../components/Reusable";
import { DayData } from "../data/DietCreator";
import { getLastDiet } from "../firebase/dataFirebase";
import { useGridSlider } from "../hooks/useGridSlider";
import CreatorDay from "./DietCreator/components/CreatorDay";

const ProtegeDiet = () => {
  const [dietData, setDietData] = useState({
    items: [],
    name: null,
  });
  const { userId } = useSelector(({ user }) => user);

  const grid = useGridSlider({
    data: dietData.items,
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

  useEffect(async () => {
    const res = await getLastDiet(userId);
    if(res) setDietData(res.data);
    else setDietData({items: [], name: undefined});
  }, [])
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
          {dietData.name=== null ? <LoaderFullPage /> : 
          dietData.name==undefined ? 
          <NoDataHeader>Nie masz jeszcze diety</NoDataHeader> : (
            dietData.items.map((item, index) => (
              <CreatorDay
                key={item.id}
                dayId={item.id}
                mealsData={item.meals}
                dayHeaderTitle={DayData[index]}
              />
            ))
          )}
        </GridSlider>
      </Box>
    </ReusableViewWrapper>
  );
};

export default ProtegeDiet;
