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

const ProtegeTraining = () => {
  const [trainingData, setTrainingData] = useState([
    // {
    //   id: 1,
    //   types: [
    //     {
    //       id: 1,
    //       name: "Rozgrzewka",
    //       exercises: [
    //         {
    //           id: 1,
    //           name: "wyciskanie",
    //           series: [
    //             {
    //               id: 1,
    //               weight: 1,
    //               repeat: 10,
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "Trening właściwy",
    //       exercises: [],
    //     },
    //     {
    //       id: 3,
    //       name: "Kardio",
    //       exercises: [],
    //     },
    //     {
    //       id: 4,
    //       name: "Rozciąganie",
    //       exercises: [],
    //     },
    //   ],
    // },
  ]);
  const grid = useGridSlider({
    data: trainingData,
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
          Aktualna trening
          <Spacer />
          <GridSliderArrow direction="right" arrowConfig={grid} />
        </BoxHeader>
        <GridSlider minHeight="0" gridConfig={grid}>
          {trainingData.length > 0 ? (
            trainingData.map((item, index) => (
              <TrainingDay
                key={item.id}
                dayId={item.id}
                dayIndex={index}
                trainingTypesData={item.types}
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

export default ProtegeTraining;
