import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import {
  AbsoluteIconWrapper,
  Column,
  Icon,
  Row,
} from "../../../components/Reusable";

const StyledMeasurmentRaport = styled.div`
  padding: 10px;
  width: calc(100% - 20px);
  border-bottom: 2px solid ${({ theme }) => theme.naturalFive};
`;

const VisableHeader = styled.div`
  position: relative;
`;

const ContentWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`;

const ContentValue = styled.h4`
  font-weight: 400;
`;

const MeasurmentRaport = ({ raportTitle, measurmentData = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledMeasurmentRaport>
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
        <ContentWrapper>
          {measurmentData.map((item) => (
            <ContentValue
              key={item.name}
            >{`${item.name}: ${item.value}${item.unit}`}</ContentValue>
          ))}
        </ContentWrapper>
      )}
    </StyledMeasurmentRaport>
  );
};

export default MeasurmentRaport;
