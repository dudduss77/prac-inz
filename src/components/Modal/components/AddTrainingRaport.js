import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeModalState, selectModalData } from "../../../features/AppSlice";
import { sendTrainingReport } from "../../../firebase/dataFirebase";
import { useNotification } from "../../../hooks/useNotification";
import { Button, StyledTextarea } from "../../Reusable";
import Select from "../../Select";
import { ModalHeader } from "./ModalReusable";

const statusMap = [
  {
    name: "entire",
    status: "W całości",
  },
  {
    name: "partly",
    status: "Częściowo",
  },
  {
    name: "at-all",
    status: "Wcale",
  },
];

const AddTrainingRaport = () => {
  const [selectedDone, setSelectedDone] = useState();
  const refTextArea = useRef();
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);
  const { userId } = useSelector(({user}) => user);
  const notification = useNotification();

  const mapSelectValue = (value) => {
    let temp = statusMap.find((item) => item.status === value);
    setSelectedDone(temp.name);
  };

  const handleOnSaveClick = async () => {
    const { value } = refTextArea.current;
    if(selectedDone && value!="") {
      dispatch(changeModalState());
      modalData.config.onSave()
      notification.show("Trening został wykonany!")
      const res = await sendTrainingReport(userId, {
        name: value,
        doneStatus: selectedDone
      });
      console.log(res);
    }


  }

  return (
    <>
      <ModalHeader>Raport Treningowy</ModalHeader>
      <StyledTextarea
        width="90%"
        placeholder="Opisz swój trening"
        ref={refTextArea}
        
      ></StyledTextarea>
      <Select
        width="92%"
        data={statusMap.map((item) => item.status)}
        onChange={(val) => mapSelectValue(val)}
        placeholder="Wykonanie treningu"
      />
      <Button onClick={handleOnSaveClick}>Dodaj</Button>
    </>
  );
};

export default AddTrainingRaport;
