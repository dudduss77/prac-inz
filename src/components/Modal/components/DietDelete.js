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

const DietDelete = () => {
  const modalDispatch = useDispatch();
  const navigate = useNavigate();

  const deleteDiet = () => {
    modalDispatch(changeModalState())
    navigate('/diet')
  }

  return (
    <>
      <ModalHeader>Czy na pewno chcesz usunąć?</ModalHeader>
      <Row isGap>
        <RedButton onClick={() => deleteDiet()}>Tak</RedButton>
        <Button onClick={() => modalDispatch(changeModalState())}>Nie</Button>
      </Row>
    </>
  );
};

export default DietDelete;
