import React from "react";
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
  const modalData = useSelector(selectModalData);
  const modalDispatch = useDispatch();
  const notificationDispatch = useDispatch();

  const send = () => {
    modalDispatch(changeModalState());
    notificationDispatch(changeNotificationStateShow("Wysłano"));
  };
  return (
    <>
      <ModalHeader>
        Zgłoś uwagę do {DayData[modalData.config.dayId - 1]}
      </ModalHeader>
      <StyledTextarea
        width="90%"
        placeholder="Opisz swoją uwagę"
      ></StyledTextarea>
      <Button onClick={send}>Wyślij</Button>
    </>
  );
};

export default SendNote;
