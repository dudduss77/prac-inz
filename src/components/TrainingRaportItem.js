import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import { AbsoluteIconWrapper, Column, Icon, Row } from "./Reusable";

const colorMap = [
  {
    name: "entire",
    color: "#95DE64",
  },
  {
    name: "partly",
    color: "#FFC53D",
  },
  {
    name: "at-all",
    color: "#CF1322",
  },
];

const statusMap = [
  {
    name: "entire",
    status: "W całości",
  },
  {
    name: "partly",
    status: "Częściowo",
  },
  {
    name: "at-all",
    status: "Wcale",
  },
];

const StyledTrainingRaportItem = styled.div`
  padding: 10px;
  width: calc(100% - 20px);
  border-bottom: 2px solid ${({ theme }) => theme.naturalFive};
`;

const VisableHeader = styled.div`
  position: relative;
`;

const HideHeader = styled.h4`
  color: ${({ customColor }) => customColor};
  margin: ${({ customMargin }) => customMargin};
`;

const StatusMessage = styled.div`
  width: calc(100% - 20px);
  height: auto;
  background: ${({ theme }) => theme.naturalFour};
  border-radius: 10px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
`;

const TrainingRaportItem = ({ raportTitle, realizedStatus = "at-all" }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledTrainingRaportItem>
      <VisableHeader>
        {raportTitle}
        <AbsoluteIconWrapper right="10px">
          <Icon onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FontAwesomeIcon icon="chevron-up" />
            ) : (
              <FontAwesomeIcon icon="chevron-down" />
            )}
          </Icon>
        </AbsoluteIconWrapper>
      </VisableHeader>
      {isOpen && (
        <Column isGap isPadding>
          <Row isGap>
            <HideHeader>Realizacja treningu:</HideHeader>
            <HideHeader
              customColor={colorMap.find(
                (item) => item.name === realizedStatus
              )}
            >
              {statusMap.find((item) => item.name === realizedStatus).status}
            </HideHeader>
          </Row>
          <StatusMessage>No nie udało się</StatusMessage>
        </Column>
      )}
    </StyledTrainingRaportItem>
  );
};

export default TrainingRaportItem;
