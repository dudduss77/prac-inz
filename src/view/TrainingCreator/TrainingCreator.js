import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import BoxHeader from "../../components/Box/components/BoxHeader";
import GridSlider from "../../components/GridSlider/GridSlider";
import {
  Box,
  ClickedInput,
  Icon,
  ReusableViewWrapper,
  Spacer,
} from "../../components/Reusable";
import { selectTrainingDays } from "../../features/TrainingCreatorSlice";
import { useGridSlider } from "../../hooks/useGridSlider";
import { useInput } from "../../hooks/useInput";
import TrainingDay from "./components/TrainingDay";
import TrainingToolbar from "./components/TrainingToolbar";

const TrainingCreator = () => {
  const trainingDayData = useSelector(selectTrainingDays);
  const { ...trainingNameInput } = useInput("Brak");
  const grid = useGridSlider({
    data: trainingDayData,
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
      <Box width="100%" minHeight="100%" maxHeight="100%">
        <BoxHeader>
          <Icon>
            <FontAwesomeIcon icon="chevron-left" />
          </Icon>
          <ClickedInput {...trainingNameInput} />
          <Spacer />
          <Icon fontSize="1.3em">
            <FontAwesomeIcon icon="save" />
          </Icon>
          <Icon fontSize="1.3em">
            <FontAwesomeIcon icon="trash-alt" />
          </Icon>
        </BoxHeader>
        <TrainingToolbar sliderArrowConfig={grid} />
        <GridSlider minHeight="0" gridConfig={grid}>
          {trainingDayData.map((day) => (
            <TrainingDay
              key={day.id}
              dayId={day.id}
              trainingTypesData={day.types}
            />
          ))}
        </GridSlider>
      </Box>
    </ReusableViewWrapper>
  );
};

export default TrainingCreator;
