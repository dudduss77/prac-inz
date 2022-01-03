import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import { changeModalState, setModalData } from "../../../features/AppSlice";
import { getMeasurements } from "../../../firebase/dataFirebase";
import LoaderFullPage from "./../../../components/LoaderFullPage";
import { Box, Spacer, Icon } from "../../../components/Reusable";
import CircleMenu, { CircleMenuPosition } from "../../../components/CircleMenu";
import { useParams } from "react-router-dom";
import { getDateddmmyyy } from "../../../helpers";

const ContentWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const ContentValue = styled.h4`
  font-weight: 400;
`;

const MenuWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
`;

const MeasurementRaport = () => {

  const dispatch = useDispatch();
  // const { userId } = useSelector(({ user }) => user);
  const [measurement, setMeasurment] = useState(null);
  const { id } = useParams();
  const [indx, setIndx] = useState(0);

  const fetchMeasurment = async () => {
    const res = await getMeasurements(id);
    setMeasurment(res?.length != 0 ? res: undefined);
  };

  useEffect(fetchMeasurment, []);

  return (
    <Box width="50%" isOverflow>
      <BoxHeader>
        Raport pomiarów {measurement && getDateddmmyyy(new Date(measurement[indx].data.time.seconds*1000))}
        <Spacer />
        <MenuWrapper>
          {
            measurement && (
              <CircleMenu>
                {measurement.map((item, i) => <CircleMenuPosition key={i} onClick={() => setIndx(i)} >{getDateddmmyyy(new Date(item.data.time.seconds*1000))}</CircleMenuPosition>)}
              </CircleMenu>              
            )
          }

        </MenuWrapper>
      </BoxHeader>

      {measurement === null ? (
        <LoaderFullPage />
      ) : measurement === undefined ? (
        <Center>Brak pomiarów</Center>
      ) : (
        <ContentWrapper>
          <ContentValue>{`waga: ${measurement[indx].data.weight ?? "-"}kg`}</ContentValue>
          <ContentValue>{`Obwód klatki: ${
            measurement[indx].data.chest ?? "-"
          } cm`}</ContentValue>
          <ContentValue>{`Obwód bioder: ${
            measurement[indx].data.hips ?? "-"
          } cm`}</ContentValue>
          <ContentValue>{`Obwód talii: ${
            measurement[indx].data.waist ?? "-"
          } cm`}</ContentValue>
          <ContentValue>{`Obwód uda: ${
            measurement[indx].data.thigh ?? "-"
          } cm`}</ContentValue>
          <ContentValue>{`Obwód ramienia: ${
            measurement[indx].data.arm ?? "-"
          } cm`}</ContentValue>
          <ContentValue>{`Obwód bicepsa: ${
            measurement[indx].data.biceps ?? "-"
          } cm`}</ContentValue>
        </ContentWrapper>
      )}
    </Box>
  );
};

export default MeasurementRaport;
