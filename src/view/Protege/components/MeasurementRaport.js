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
import MeasurementList from "../../../components/MeasurementList"

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
        <MeasurementList 
          data={measurement[indx].data} 
        />
      )}
    </Box>
  );
};

export default MeasurementRaport;
