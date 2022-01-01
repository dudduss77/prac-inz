import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import BoxHeader from "../../components/Box/components/BoxHeader";
import GridSlider from "../../components/GridSlider/GridSlider";
import {
  Box,
  ClickedInput,
  Icon,
  ReusableViewWrapper,
  Spacer,
} from "../../components/Reusable";
import {
  changeModalState,
  changeNotificationStateShow,
  setModalData,
} from "../../features/AppSlice";
import {
  loadTrainingFromDatabase,
  selectName,
  selectTraining,
  selectTrainingDays,
  updateName,
} from "../../features/TrainingCreatorSlice";
import { selectUserId } from "../../features/UserSlice";
import { createNewDoc, updateDocFun } from "../../firebase/dataFirebase";
import { useGridSlider } from "../../hooks/useGridSlider";
import { useInput } from "../../hooks/useInput";
import TrainingDay from "./components/TrainingDay";
import TrainingToolbar from "./components/TrainingToolbar";

const TrainingCreator = ({ isEdit }) => {
  const { id, protegeId } = useParams();
  const userId = useSelector(selectUserId);
  const training = useSelector(selectTraining);
  const navigate = useNavigate();
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
    if (isEdit) {
      if (userId && id) {
        trainingCreatorDispatch(
          loadTrainingFromDatabase({ userId: protegeId != undefined ? protegeId : userId, trainingId: id })
        );
      }
    }
  }, [isEdit, id, userId]);

  useEffect(() => {
    trainingCreatorDispatch(updateName(trainingNameInput.value));
  }, [trainingNameInput.value]);

  const saveTraining = async () => {
    if (userId) {
      if (isEdit) {
        updateDocFun(protegeId != undefined ? protegeId : userId, "trainings", id, training);
      } else {
        const docId = await createNewDoc(userId, "trainings", training);
        navigate(`/trainer/trainingcreator/${docId}`);
      }
      notificationDispatch(changeNotificationStateShow("Zapisano"));
    } else
      notificationDispatch(changeNotificationStateShow("Spróbuj ponownie"));
  };

  const trainingDelete = () => {
    if (isEdit) {
      modalDispatch(changeModalState());
      modalDispatch(
        setModalData({
          name: "trainingdelete",
          config: {
            subCollection: "trainings",
            docId: id,
            userId: protegeId != undefined ? protegeId : userId
          },
        })
      );
    }
  };
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
