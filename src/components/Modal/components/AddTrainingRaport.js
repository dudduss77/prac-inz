import React, { useState } from "react";
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

  const mapSelectValue = (value) => {
    if (value) {
      let temp = statusMap.find((item) => item.status === value);
      setSelectedDone(temp.name);
    }
  };

  return (
    <>
      <ModalHeader>Raport Treningowy</ModalHeader>
      <StyledTextarea
        width="90%"
        placeholder="Opisz swój trening"
      ></StyledTextarea>
      <Select
        width="92%"
        data={statusMap.map((item) => item.status)}
        onChange={(val) => mapSelectValue(val)}
        placeholder="Wykonanie treningu"
      />
      <Button>Dodaj</Button>
    </>
  );
};

export default AddTrainingRaport;
