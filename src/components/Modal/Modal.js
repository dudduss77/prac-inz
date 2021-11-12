import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeModalState, selectModalData } from "../../features/AppSlice";
import useOutsideClick from "../../hooks/useOutsideClick";
import NewProtege from "./components/NewProtege";

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: ${({ theme }) => theme.backgroundColorThree + "66"};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  backdrop-filter: blur(2px); //To nie działa na firefox napewno działa na chrome
`;
///https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4 % przeźroczystości
const StyledModal = styled.div`
  width: max-content;
  max-width: 500px;
  padding: 10px;
  max-height: 50%;
  background: ${({ theme }) => theme.backgroundColorThree + "bf"};
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  align-items: center;
  margin-top: 200px;

  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

const retModalData = (selectedData) => {
  switch (selectedData) {
    case "newprotege":
      return <NewProtege />;
    default:
      return;
  }
};

const Modal = () => {
  const modalRef = useRef();
  const modalDispatch = useDispatch();
  const selectedData = useSelector(selectModalData);

  useOutsideClick(modalRef, () => {
    modalDispatch(changeModalState());
  });
  return (
    <StyledBackground>
      <StyledModal ref={modalRef}>{retModalData(selectedData)}</StyledModal>
    </StyledBackground>
  );
};

export default Modal;
