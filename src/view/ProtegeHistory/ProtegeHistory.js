import React from "react";
import styled from "styled-components";
import BoxHeader from "../../components/Box/components/BoxHeader";
import { Box, ReusableViewWrapper, Row } from "../../components/Reusable";
import TrainingRaportItem from "../../components/TrainingRaportItem";
import ImageRaport from "./components/ImageRaport";
import MeasurmentRaport from "./components/MeasurmentRaport";
import TrainingRaport from "./components/TrainingRaport";

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
          <ImageRaport />
        </Box>
        <Box width="25%" minHeight="100%" isOverflow>
          <BoxHeader>Historia raportów treningowych</BoxHeader>
          <TrainingRaport />
        </Box>
      </Row>
    </ReusableViewWrapper>
  );
};

export default ProtegeHistory;
