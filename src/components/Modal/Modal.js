import React, { forwardRef, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeModalState, selectModalData } from "../../features/AppSlice";
import useOutsideClick from "../../hooks/useOutsideClick";
import NewCalendar from "./components/NewCalendar";
import DietAddMeal from "./components/DietAddMeal";
import DietCopyTo from "./components/DietCopyTo";
import DietDelete from "./components/DietDelete";
import NewProtege from "./components/NewProtege";
import TrainingAddExercise from "./components/TrainingAddExercise";
import TrainingEditExercise from "./components/TrainingEditExercise";
import TrainingCopyTo from "./components/TrainingCopyTo";
import TrainingDelete from "./components/TrainingDelete";
import SendNote from "./components/SendNote";
import AddMeasurment from "./components/AddMeasurment";
import AddImage from "./components/AddImage";
import AddTrainingRaport from "./components/AddTrainingRaport";
import AddDietForProtege from "./components/AddDietForProtege";

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 3;
  background: ${({ theme }) => theme.backgroundColorThree + "66"};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  backdrop-filter: blur(
    2px
  ); //To nie działa na firefox napewno działa na chrome
`;
///https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4 % przeźroczystości
const StyledModal = styled.div`
  position: absolute;
  width: max-content;
  min-width: 500px;
  max-width: 500px;
  padding: 10px;
  max-height: 70%;
  background: ${({ theme }) => theme.backgroundColorThree + "bf"};
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  align-items: center;
  margin-top: 100px;
  z-index: 3;
  left: 50%;
  transform: translate(-50%);

  @media screen and (max-width: 900px) {
    min-width: 90%;
    width: 90%;
  }
`;

const retModalData = (selectedData) => {
  switch (selectedData.name) {
    case "newprotege":
      return <NewProtege />;
    case "newCalendar":
      return <NewCalendar />;
    case "dietdelete":
      return <DietDelete />;
    case "dietaddmeal":
      return <DietAddMeal />;
    case "dietcopyto":
      return <DietCopyTo />;
    case "trainingaddexercise":
      return <TrainingAddExercise />;
    case "trainingeditexercise":
      return <TrainingEditExercise />;
    case "trainingcopyto":
      return <TrainingCopyTo />;
    case "trainingdelete":
      return <TrainingDelete />;
    case "sendnote":
      return <SendNote />;
    case "addmeasurment":
      return <AddMeasurment />;
    case "addimage":
      return <AddImage />;
    case "addtrainingraport":
      return <AddTrainingRaport />;
    case "addDietForProtege":
      return <AddDietForProtege id={selectedData.id} />;
    default:
      return;
  }
};

const Modal = () => {
  const modalDispatch = useDispatch();
  const selectedData = useSelector(selectModalData);

  return (
    <>
      <StyledBackground
        onClick={() => modalDispatch(changeModalState())}
      ></StyledBackground>
      <StyledModal>{retModalData(selectedData)}</StyledModal>
    </>
  );
};

export default Modal;
