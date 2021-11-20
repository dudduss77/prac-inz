import React, { forwardRef, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeModalState, selectModalData } from "../../features/AppSlice";
import DietAddMeal from "./components/DietAddMeal";
import DietDelete from "./components/DietDelete";
import NewProtege from "./components/NewProtege";

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
    case "dietdelete":
      return <DietDelete />;
    case "dietaddmeal":
      return <DietAddMeal/>;
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
