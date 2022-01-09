import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DayData } from "../../../data/DietCreator";
import {
  changeModalState,
  changeNotificationStateShow,
  selectModalData,
} from "../../../features/AppSlice";
import { getMessageId, pushNewMessage } from "../../../firebase/dataFirebase";
import { Button, StyledTextarea } from "../../Reusable";
import { ModalHeader } from "./ModalReusable";

const SendNote = () => {
  const [header, setHeader] = useState("");
  const modalData = useSelector(selectModalData);
  const modalDispatch = useDispatch();
  const notificationDispatch = useDispatch();
  const { userId } = useSelector(({user}) => user);
  const refText = useRef(); 

  useEffect(() => {
    if (modalData.config.type === "diet")
      setHeader(DayData[modalData.config.dayId - 1]);
    else
      setHeader(`Trening ${String.fromCharCode(64 + modalData.config.dayId)}`);
  }, [modalData]);

  const send = async () => {

    let message = {
      from: userId,
      isImage: false,
      content: refText.current.value,
      date: Date.now(),
    };
    const messageId = await getMessageId(userId);
    await pushNewMessage(messageId, message);

    modalDispatch(changeModalState());
    notificationDispatch(changeNotificationStateShow("Wysłano"));
  };
  return (
    <>
      <ModalHeader>Zgłoś uwagę do {header}</ModalHeader>
      <StyledTextarea
        width="90%"
        placeholder="Opisz swoją uwagę"
        value={modalData.config.text}
        ref={refText}
      ></StyledTextarea>
      <Button onClick={send}>Wyślij</Button>
    </>
  );
};

export default SendNote;
