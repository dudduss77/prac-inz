import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeModalState } from "../../../features/AppSlice";
import { sendMeasurement } from "../../../firebase/dataFirebase";
import { useInput } from "../../../hooks/useInput";
import { useNotification } from "../../../hooks/useNotification";
import Input from "../../Input";
import { Button } from "../../Reusable";
import { ModalHeader } from "./ModalReusable";

const AddMeasurment = () => {
  const weight = useInput("", "weight");
  const chest = useInput("", "chest");
  const hips = useInput("", "hips");
  const waist = useInput("", "waist");
  const thigh = useInput("", "thigh");
  const arm = useInput("", "arm");
  const biceps = useInput("", "biceps");

  const notification = useNotification();
  const { userId } = useSelector(({user}) => user);
  const dispatch = useDispatch();

  const handleClick = async () => {
    const payload = {
      weight: parseFloat(weight.value),
      chest: parseFloat(chest.value),
      hips: parseFloat(hips.value),
      waist: parseFloat(waist.value),
      thigh: parseFloat(thigh.value),
      arm: parseFloat(arm.value),
    }

    const res = await sendMeasurement(userId, payload);
    console.log(res);
    dispatch(changeModalState());
    notification.show("Dodano nowy pomiar")

    // await getMeasurements(userId);
  }
  return (
    <>
      <ModalHeader>Dodaj stan pomiarów</ModalHeader>
      <Input useInput={weight} placeholder="Waga [kg]" type="number" />
      <Input useInput={chest} placeholder="Obwód klatki [cm]" type="number" />
      <Input useInput={hips} placeholder="Obwód bioder [cm]" type="number" />
      <Input useInput={waist} placeholder="Obwód talii [cm]" type="number" />
      <Input useInput={thigh} placeholder="Obwód uda [cm]" type="number" />
      <Input useInput={arm} placeholder="Obwód ramienia [cm]" type="number" />
      <Input useInput={biceps} placeholder="Obwód bicepsa [cm]" type="number" />
      <Button onClick={handleClick} >Dodaj</Button>
    </>
  );
};

export default AddMeasurment;
