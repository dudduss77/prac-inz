import React, { useState } from "react";
import { useGridSlider } from "../hooks/useGridSlider";
import BoxHeader from "../components/Box/components/BoxHeader";
import GridSlider from "../components/GridSlider/GridSlider";
import GridSliderArrow from "../components/GridSlider/GridSliderArrow";
import {
  Box,
  NoDataHeader,
  ReusableViewWrapper,
  Spacer,
} from "../components/Reusable";
import TrainingDay from "./TrainingCreator/components/TrainingDay";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getLastTraining } from "../firebase/dataFirebase";
import LoaderFullPage from "../components/LoaderFullPage";

const ProtegeTraining = () => {
  const [trainingData, setTrainingData] = useState({
    trainingDays: [],
    name: null,
  });
  const { userId } = useSelector(({ user }) => user);

  const grid = useGridSlider({
    data: trainingData.trainingDays,
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
    const res = await getLastTraining(userId);
    console.log(res);
    if(res) setTrainingData(res.data);
    else setTrainingData({trainingDays: [], name: undefined});
  }, []);
  
  return (
    <ReusableViewWrapper flexValue="1" minHeight="0">
      <Box width="100%" minHeight="100%">
        <BoxHeader>
          <GridSliderArrow direction="left" arrowConfig={grid} />
          Aktualna trening
          <Spacer />
          <GridSliderArrow direction="right" arrowConfig={grid} />
        </BoxHeader>
        <GridSlider minHeight="0" gridConfig={grid}>
          {trainingData.name=== null ? <LoaderFullPage /> : 
          trainingData.name==undefined ? 
          <NoDataHeader>Nie masz jeszcze Treningu</NoDataHeader> : (
            trainingData.trainingDays.map((item, index) => (
              <TrainingDay
                key={item.id}
                dayId={item.id}
                dayIndex={index}
                trainingTypesData={item.types}
              />
            ))
          )}
        </GridSlider>
      </Box>
    </ReusableViewWrapper>
  );
};

export default ProtegeTraining;
