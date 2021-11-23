import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import { Box } from "../../../components/Reusable";
import { changeModalState, setModalData } from "../../../features/AppSlice";

const ContentWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const ContentValue = styled.h4`
  font-weight: 400;
`;

const CurrentMeasurment = ({measurmentData = []}) => {
  const modalDispatch = useDispatch();

  const addMeasurment = () => {
    // console.log('test')
    modalDispatch(changeModalState())
    modalDispatch(setModalData({name: 'addmeasurment'}))
  }
  return (
    <Box width="40%" minHeight="300px">
      <BoxHeader
        headerTitle="Aktualny stan pomiarów"
        headerButtonTitle="Dodaj nowy stan"
        headerOnClick={() => addMeasurment()}
      />
      <ContentWrapper>
        {measurmentData.map((item) => (
          <ContentValue
            key={item.name}
          >{`${item.name}: ${item.value}${item.unit}`}</ContentValue>
        ))}
      </ContentWrapper>
    </Box>
  );
};

export default CurrentMeasurment;
