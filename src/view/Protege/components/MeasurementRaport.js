import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Spacer, Icon } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import styled from "styled-components";
import CircleMenu, { CircleMenuPosition } from "../../../components/CircleMenu";

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

const MeasurementRaport = () => {
  return (
    <Box width="50%">
      <BoxHeader>
        Raport pomiarów 20.12.2021
        <Spacer />
        <MenuWrapper>
          <CircleMenu>
            <CircleMenuPosition>10.11.2021</CircleMenuPosition>
          </CircleMenu>
        </MenuWrapper>
      </BoxHeader>
      <ContentWrapper>
        <ContentValue>Masa ciała: 100kg</ContentValue>
        <ContentValue>Obwód klatki: 70cm</ContentValue>
        <ContentValue>Obwód bioder: 70cm</ContentValue>
        <ContentValue>Obwód talii: 70cm</ContentValue>
        <ContentValue>Obwód uda: 70cm</ContentValue>
        <ContentValue>Obwód ramienia: 70cm</ContentValue>
      </ContentWrapper>
    </Box>
  );
};

export default MeasurementRaport;
