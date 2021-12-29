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

const DietDelete = () => {
  const userId = useSelector(selectUserId)
  const modalData = useSelector(selectModalData)
  const modalDispatch = useDispatch();
  const navigate = useNavigate();
  const deleteDiet = () => {
    deleteDocFun(userId, modalData.config.docId, modalData.config.subCollection)
    modalDispatch(changeModalState())
    navigate('/trainer/diet')
  }

  return (
    <>
      <ModalHeader>Czy na pewno chcesz usunąć?</ModalHeader>
      <Row isGap noMedia>
        <RedButton onClick={() => deleteDiet()}>Tak</RedButton>
        <Button onClick={() => modalDispatch(changeModalState())}>Nie</Button>
      </Row>
    </>
  );
};

export default DietDelete;
