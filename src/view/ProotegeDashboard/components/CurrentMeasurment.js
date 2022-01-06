import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import { Box } from "../../../components/Reusable";
import { changeModalState, setModalData } from "../../../features/AppSlice";
import { getLastMeasurement } from "../../../firebase/dataFirebase";
import LoaderFullPage from "./../../../components/LoaderFullPage";
import MeasurementList from "../../../components/MeasurementList"

const Center = styled.div`
  width: 100%;
  text-align: center;
`;

const CurrentMeasurment = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector(({ user }) => user);
  const [measurement, setMeasurment] = useState(null);


  const fetchMeasurment = async () => {
    const res = await getLastMeasurement(userId);
    setMeasurment(res?.data);
  };
  const addMeasurment = () => {
    dispatch(changeModalState());
    dispatch(
      setModalData({
        name: "addmeasurment",
        config: { onSave: fetchMeasurment },
      })
    );
  };

  useEffect(fetchMeasurment, []);
  return (
    <Box width="40%" minHeight="300px">
      <BoxHeader
        headerTitle="Aktualny stan pomiarów"
        headerButtonTitle="Dodaj nowy stan"
        headerOnClick={() => addMeasurment()}
      />
      {measurement === null ? (
        <LoaderFullPage />
      ) : measurement === undefined ? (
        <Center>Brak pomiarów</Center>
      ) : (
        <MeasurementList 
          data={measurement} 
        />
      )}
    </Box>
  );
};

export default CurrentMeasurment;
