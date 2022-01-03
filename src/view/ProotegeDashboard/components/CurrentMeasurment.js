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

const ContentWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const ContentValue = styled.h4`
  font-weight: 400;
`;

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
  console.log(measurement);
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
        <ContentWrapper>
          <ContentValue>{`waga: ${measurement.weight ?? "-"}kg`}</ContentValue>
          <ContentValue>{`Obwód klatki: ${
            measurement.chest ?? "-"
          } cm`}</ContentValue>
          <ContentValue>{`Obwód bioder: ${
            measurement.hips ?? "-"
          } cm`}</ContentValue>
          <ContentValue>{`Obwód talii: ${
            measurement.waist ?? "-"
          } cm`}</ContentValue>
          <ContentValue>{`Obwód uda: ${
            measurement.thigh ?? "-"
          } cm`}</ContentValue>
          <ContentValue>{`Obwód ramienia: ${
            measurement.arm ?? "-"
          } cm`}</ContentValue>
          <ContentValue>{`Obwód bicepsa: ${
            measurement.biceps ?? "-"
          } cm`}</ContentValue>
        </ContentWrapper>
      )}
    </Box>
  );
};

export default CurrentMeasurment;
