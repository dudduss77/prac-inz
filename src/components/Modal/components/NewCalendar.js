import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { changeModalState } from "../../../features/AppSlice";
import { Button, Row } from "../../Reusable";
import { ModalHeader } from "./ModalReusable";
import Select from './../../../components/Select'
import Input from "../../Input";

const RedButton = styled(Button)`
  background: ${({ theme }) => theme.DustRedSeven};
`;

const NewCalendar = () => {
  const modalDispatch = useDispatch();
  const navigate = useNavigate();

  const deleteDiet = () => {
    modalDispatch(changeModalState())
  }

  return (
    <>
      <ModalHeader>Nowy wpis w kalendarzu</ModalHeader>

        <Select 
            data={["Poniedziałek 16.01.21", "Poniedziałek 16.01.21", "Poniedziałek 16.01.21"]} 
            width="360px"
            placeholder="Data"
        />
        <Row isGap >
            <Input placeholder="10:00" width="50px" paddingLeft="5px" />
            <Input placeholder="10:00" width="50px" paddingLeft="5px" />
        </Row>
        <Select 
            data={[
                "Zwykły wpis", 
                "Widoczne dla podopiecznych jako do rezerwacji", 
                "Trening lub spotkanie z podopiecznym"
            ]} 
            width="360px"
            placeholder="Zwykły wpis"
        />
        <Input placeholder="Nazwa" />
        <Input as="textarea" placeholder="Opis..." height="100px" />
      <Row isGap noMedia>
        <RedButton onClick={() => deleteDiet()}>Zapisz</RedButton>
        <Button onClick={() => {}}>Usuń</Button>
      </Row>
    </>
  );
};

export default NewCalendar;
