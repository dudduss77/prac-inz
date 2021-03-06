import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getMeasurements } from "../../../firebase/dataFirebase";
import LoaderFullPage from "./../../../components/LoaderFullPage";
import { getDateddmmyyy } from "../../../helpers";
import MeasurementList from "../../../components/MeasurementList"
import DropDownList from "../../../components/DropDownList";

const MenuWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px
`;

const MeasurementRaport = () => {

  const dispatch = useDispatch();
  const { userId } = useSelector(({ user }) => user);
  const [measurement, setMeasurment] = useState(null);

  const fetchMeasurment = async () => {
    const res = await getMeasurements(userId);
    setMeasurment(res?.length != 0 ? res: undefined);
  };

  useEffect(fetchMeasurment, []);

  return measurement === null ?
   <LoaderFullPage /> 
    : 
   measurement === undefined ? 
   <Center>Brak pomiarów</Center>
    :
   measurement.map(({data}) => (
    <DropDownList title={"Raport z dnia " + getDateddmmyyy(new Date(data.time.seconds*1000))} >
      <MeasurementList 
        data={data} 
      />
    </DropDownList>
  ));
};

export default MeasurementRaport;
