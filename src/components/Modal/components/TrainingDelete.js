import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { changeModalState, selectModalData } from "../../../features/AppSlice";
import { selectUserId } from "../../../features/UserSlice";
import { deleteDocFun } from "../../../firebase/dataFirebase";
import { Button, Row } from "../../Reusable";
import { ModalHeader } from "./ModalReusable";

const RedButton = styled(Button)`
  background: ${({ theme }) => theme.DustRedSeven};
`;

const TrainingDelete = () => {
  const navigate = useNavigate();
  const modalDispatch = useDispatch();
  const modalData = useSelector(selectModalData);
  const userId = useSelector(selectUserId);

  const deleteTraining = () => {
    const { userId:configUserId, docId, subCollection } = modalData.config
    deleteDocFun(
      configUserId ?? userId,
      docId,
      subCollection
    );
    modalDispatch(changeModalState());
    navigate("/trainer/training");
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
