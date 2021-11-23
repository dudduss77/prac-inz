import React from "react";
import Input from "../../Input";
import { Button } from "../../Reusable";
import { ModalHeader } from "./ModalReusable";

const AddMeasurment = () => {
  return (
    <>
      <ModalHeader>Dodaj stan pomiarów</ModalHeader>
      <Input placeholder="Waga" />
      <Input placeholder="Obwód klatki" />
      <Input placeholder="Obwód bioder" />
      <Input placeholder="Obwód talii" />
      <Input placeholder="Obwód uda" />
      <Input placeholder="Obwód ramienia" />
      <Button>Dodaj</Button>
    </>
  );
};

export default AddMeasurment;
