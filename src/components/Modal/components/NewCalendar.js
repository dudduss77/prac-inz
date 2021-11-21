import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { changeModalState } from "../../../features/AppSlice";
import { Button, Row } from "../../Reusable";
import { ModalHeader } from "./ModalReusable";
import Select from './../../../components/Select'

const RedButton = styled(Button)`
  background: ${({ theme }) => theme.DustRedSeven};
`;

const NewCalendar = () => {
  const modalDispatch = useDispatch();
  const navigate = useNavigate();

  const deleteDiet = () => {
    modalDispatch(changeModalState())
    navigate('/diet')
  }

  return (
    <>
      <ModalHeader>Nowy wpis w kalendarzu</ModalHeader>

      <Row>
          <Select data={["1"]} />
      </Row>
      <Row isGap noMedia>
        <RedButton onClick={() => deleteDiet()}>Zapisz</RedButton>
        <Button onClick={() => modalDispatch(changeModalState())}>Usuń</Button>
      </Row>
    </>
  );
};

export default NewCalendar;
