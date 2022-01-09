import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  changeModalState,
  selectModalData,
  setModalData,
} from "../../../features/AppSlice";
import { Button, Row } from "../../Reusable";
import { ModalHeader } from "./ModalReusable";
import Select from "./../../../components/Select";
import Input from "../../Input";
import DatePicker from "../../DatePicker";
import { useInput } from "../../../hooks/useInput";
import {
  createNewDoc,
  deleteCalendarDay,
  getCaledarDayById,
  updateCalendarDay,
} from "../../../firebase/dataFirebase";
import { selectUserId } from "../../../features/UserSlice";
import { date } from "yup";

const RedButton = styled(Button)`
  background: ${({ theme }) => theme.DustRedSeven};
`;

const ErrorMessage = styled.h4`
  color: #ff0000;
`;

const SelectMap = [
  {
    name: "Zwykły Wpis",
    type: "ordinary",
  },
  {
    name: "Widoczne dla podopiecznych jako do rezerwacji",
    type: "open-to-reservation",
  },
  {
    name: "Trening lub spotkanie z podopiecznym",
    type: "training-or-meet",
  },
];

const NewCalendar = () => {
  const userId = useSelector(selectUserId);
  const modalData = useSelector(selectModalData);
  const modalDispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  const inputDate = useInput("");
  const from = useInput("");
  const to = useInput("");
  const [selectValue, setSelectValue] = useState("");
  const name = useInput("");
  const desc = useInput("");

  useEffect(() => {
    (async () => {
      if (modalData.config.data && modalData.config.data.id) {
        const data = await getCaledarDayById(userId, modalData.config.data.id);
        name.setterInputValue(data.name);
        desc.setterInputValue(data.desc);
        from.setterInputValue(data.from);
        to.setterInputValue(data.to);
        const day = data.day < 10 ? `0${data.day}` : data.day;
        const month = data.month < 10 ? `0${data.month}` : data.month;
        inputDate.setterInputValue(`${data.year}-${month}-${day}`);
        setSelectValue(data.type);
      }
    })();
  }, []);

  const submitNewCalendar = async () => {
    if (
      parseInt(to.value.replace(":", "")) <
      parseInt(from.value.replace(":", ""))
    )
      setErrorMsg("Zła godzina zakończenia");
    else {
      setErrorMsg("");
      const date = new Date(inputDate.value);
      const item = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        from: from.value,
        to: to.value,
        type: selectValue,
        name: name.value,
        desc: desc.value,
      };
      if (modalData.config.data && modalData.config.data.id)
        await updateCalendarDay(userId, modalData.config.data.id, item);
      else await createNewDoc(userId, "calendar", item);
    }
  };

  const handleDelete = async () => {
    await deleteCalendarDay(userId, modalData.config.data.id);
    modalDispatch(changeModalState());
    modalDispatch(setModalData({ name: "", config: { isSave: true } }));
  };

  const today = new Date();
  let year = today.getFullYear();
  let month =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;
  let day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  return (
    <>
      <ModalHeader>Nowy wpis w kalendarzu</ModalHeader>
      <ErrorMessage>{errorMsg}</ErrorMessage>
      <DatePicker useInput={inputDate} dateMin={`${year}-${month}-${day}`} />
      <Row isGap>
        <Input
          useInput={from}
          placeholder="10:00"
          width="70px"
          paddingLeft="5px"
          type="time"
        />
        <Input
          useInput={to}
          placeholder="10:00"
          width="70px"
          paddingLeft="5px"
          type="time"
        />
      </Row>
      <Select
        data={SelectMap.map((item) => item.name)}
        width="360px"
        placeholder="Zwykły wpis"
        initialValue={
          selectValue.length > 0
            ? SelectMap.find((item) => item.type === selectValue).name
            : ""
        }
        onChange={(val) => {
          let temp = SelectMap.find((item) => item.name === val).type;
          setSelectValue(temp);
        }}
      />
      <Input useInput={name} placeholder="Nazwa" />
      <Input
        useInput={desc}
        as="textarea"
        placeholder="Opis..."
        height="100px"
      />
      <Row isGap noMedia>
        {/* <RedButton onClick={() => modalDispatch(changeModalState())}>Zapisz</RedButton> */}
        <RedButton
          onClick={() => {
            submitNewCalendar();
            modalDispatch(changeModalState());
            modalDispatch(setModalData({ name: "", config: { isSave: true } }));
          }}
        >
          Zapisz
        </RedButton>
        {modalData.config.data && modalData.config.data.id && (
          <Button onClick={() => handleDelete()}>Usuń</Button>
        )}
      </Row>
    </>
  );
};

export default NewCalendar;
