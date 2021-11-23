import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DayData } from "../../../data/DietCreator";
import {
  changeModalState,
  changeNotificationStateShow,
  selectModalData,
} from "../../../features/AppSlice";
import { Button, StyledTextarea } from "../../Reusable";
import { ModalHeader } from "./ModalReusable";

const SendNote = () => {
  const [header, setHeader] = useState("");
  const modalData = useSelector(selectModalData);
  const modalDispatch = useDispatch();
  const notificationDispatch = useDispatch();

  useEffect(() => {
    if (modalData.config.type === "diet")
      setHeader(DayData[modalData.config.dayId - 1]);
    else
      setHeader(`Trening ${String.fromCharCode(64 + modalData.config.dayId)}`);
  }, [modalData]);

  const send = () => {
    modalDispatch(changeModalState());
    notificationDispatch(changeNotificationStateShow("Wysłano"));
    if (modalData.config.type === "diet") alert("Wyśli do diety");
    else alert("Wyśli do treningu");
  };
  return (
    <>
      <ModalHeader>Zgłoś uwagę do {header}</ModalHeader>
      <StyledTextarea
        width="90%"
        placeholder="Opisz swoją uwagę"
      ></StyledTextarea>
      <Button onClick={send}>Wyślij</Button>
    </>
  );
};

export default SendNote;
