import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeModalState } from "../../../features/AppSlice";
import { Button, Row } from "../../Reusable";
import { ModalHeader } from "./ModalReusable";
import Select from './../../../components/Select'
import Input from "../../Input";
import DatePicker from "../../DatePicker";
import { useInput } from "../../../hooks/useInput";
import { createNewDoc } from "../../../firebase/dataFirebase";
import { selectUserId } from "../../../features/UserSlice";

const RedButton = styled(Button)`
  background: ${({ theme }) => theme.DustRedSeven};
`;

const SelectMap = [
  {
    name: "Zwykły Wpis",
    type: 'ordinary'
  },
  {
    name: "Widoczne dla podopiecznych jako do rezerwacji",
    type: 'open-to-reservation'
  },
  {
    name: "Trening lub spotkanie z podopiecznym",
    type: 'training-or-meet'
  },
]

const NewCalendar = () => {
  const userId = useSelector(selectUserId)
  const modalDispatch = useDispatch();
  const inputDate = useInput("");
  const from = useInput("");
  const to = useInput("");
  const [selectValue, setSelectValue] = useState("")
  const name = useInput("");
  const desc = useInput("");

  // console.log("date", date)
  // console.log("from", from)
  // console.log("to",to)
  // console.log("select",selectValue)
  // console.log("name",name)
  // console.log("desc",desc)
  const submitNewCalendar = async () => {
    const date = new Date(inputDate.value)
    const item = {
      day: date.getDay(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      from: from.value,
      to: to.value,
      type: selectValue,
      name: name.value,
      desc: desc.value
    }
    console.log(item)
    await createNewDoc(userId, 'calendar', item)
  }
  return (
    <>
      <ModalHeader>Nowy wpis w kalendarzu</ModalHeader>
        <DatePicker useInput={inputDate}/>
        <Row isGap >
            <Input useInput={from} placeholder="10:00" width="70px" paddingLeft="5px" type="time"/>
            <Input useInput={to} placeholder="10:00" width="70px" paddingLeft="5px" type="time"/>
        </Row>
        <Select 
            data={SelectMap.map(item => item.name)} 
            width="360px"
            placeholder="Zwykły wpis"
            onChange={(val) => {
              let temp = SelectMap.find(item => item.name === val).type
              setSelectValue(temp)
            }}
        />
        <Input useInput={name} placeholder="Nazwa" />
        <Input useInput={desc} as="textarea" placeholder="Opis..." height="100px" />
      <Row isGap noMedia>
        {/* <RedButton onClick={() => modalDispatch(changeModalState())}>Zapisz</RedButton> */}
        <RedButton onClick={() => submitNewCalendar()}>Zapisz</RedButton>
        <Button onClick={() => modalDispatch(changeModalState())}>Usuń</Button>
      </Row>
    </>
  );
};

export default NewCalendar;
