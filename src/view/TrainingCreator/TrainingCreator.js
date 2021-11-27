import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import BoxHeader from "../../components/Box/components/BoxHeader";
import GridSlider from "../../components/GridSlider/GridSlider";
import {
  Box,
  ClickedInput,
  Icon,
  ReusableViewWrapper,
  Spacer,
} from "../../components/Reusable";
import { changeModalState, changeNotificationStateShow, setModalData } from "../../features/AppSlice";
import {
  selectName,
  selectTrainingDays,
  updateName,
} from "../../features/TrainingCreatorSlice";
import { useGridSlider } from "../../hooks/useGridSlider";
import { useInput } from "../../hooks/useInput";
import TrainingDay from "./components/TrainingDay";
import TrainingToolbar from "./components/TrainingToolbar";

const TrainingCreator = () => {
  const navigate = useNavigate()
  const trainingName = useSelector(selectName);
  const trainingDayData = useSelector(selectTrainingDays);
  const trainingCreatorDispatch = useDispatch();
  const notificationDispatch = useDispatch();
  const modalDispatch = useDispatch();

  const { ...trainingNameInput } = useInput(trainingName);
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

  useEffect(() => {
    trainingCreatorDispatch(updateName(trainingNameInput.value));
  }, [trainingNameInput.value]);

  const saveTraining = () => {
    notificationDispatch(changeNotificationStateShow("Zapisano"));
  };

  const trainingDelete = () => {
    modalDispatch(
      setModalData({
        name: "trainingdelete",
      })
    );
    modalDispatch(changeModalState());
  }
  return (
    <ReusableViewWrapper flexValue="1" minHeight="0">
      <Box width="100%" minHeight="100%" maxHeight="100%">
        <BoxHeader>
          <Icon onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon="chevron-left" />
          </Icon>
          <ClickedInput {...trainingNameInput} />
          <Spacer />
          <Icon onClick={saveTraining} fontSize="1.3em">
            <FontAwesomeIcon icon="save" />
          </Icon>
          <Icon onClick={trainingDelete} fontSize="1.3em">
            <FontAwesomeIcon icon="trash-alt" />
          </Icon>
        </BoxHeader>
        <TrainingToolbar sliderArrowConfig={grid} />
        <GridSlider minHeight="0" gridConfig={grid}>
          {trainingDayData.map((day, index) => (
            <TrainingDay
              key={day.id}
              dayId={day.id}
              dayIndex={index}
              trainingTypesData={day.types}
            />
          ))}
        </GridSlider>
      </Box>
    </ReusableViewWrapper>
  );
};

export default TrainingCreator;
