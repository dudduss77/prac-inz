import React from "react";
import styled from "styled-components";
import BoxHeader from "../../components/Box/components/BoxHeader";
import { Box, ReusableViewWrapper, Row } from "../../components/Reusable";
import TrainingRaportItem from "../../components/TrainingRaportItem";
import ImageRaport from "./components/ImageRaport";
import MeasurmentRaport from "./components/MeasurmentRaport";

const ProtegeHistory = () => {
  return (
    <ReusableViewWrapper flexValue="1" minHeight="0">
      <Row isGap flexValue="1" isOverflow>
        <Box width="25%" minHeight="100%" isOverflow>
          <BoxHeader>Historia pomiarów</BoxHeader>
          <MeasurmentRaport/>
        </Box>
        <Box width="50%" minHeight="100%" isOverflow>
          <BoxHeader>Historia stanów sylwetki</BoxHeader>
          <ImageRaport raportTitle="Raport z dnia 05.11.2021" />
        </Box>
        <Box width="25%" minHeight="100%" isOverflow>
          <BoxHeader>Historia raportów treningowych</BoxHeader>
          <TrainingRaportItem
            raportTitle="Raport z dnia 05.11.2021"
            realizedStatus="entire"
            messages="No nie udało się ale może kiedyś się uda"
          />
        </Box>
      </Row>
    </ReusableViewWrapper>
  );
};

export default ProtegeHistory;
