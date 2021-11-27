import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { changeModalState } from "../../../features/AppSlice";
import { Button, Row } from "../../Reusable";
import { ModalHeader } from "./ModalReusable";

const RedButton = styled(Button)`
  background: ${({ theme }) => theme.DustRedSeven};
`;

const TrainingDelete = () => {
  const navigate = useNavigate();
  const modalDispatch = useDispatch();

  const deleteTraining = () => {
    modalDispatch(changeModalState());
    navigate("/training");
  };

  return (
    <>
      <ModalHeader>Czy napewno chcesz usunąć?</ModalHeader>
      <Row isGap noMedia>
        <RedButton onClick={deleteTraining}>Tak</RedButton>
        <Button onClick={() => modalDispatch(changeModalState())}>Nie</Button>
      </Row>
    </>
  );
};

export default TrainingDelete;
