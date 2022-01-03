import React from 'react'
import styled from 'styled-components';


const ContentWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const ContentValue = styled.h4`
  font-weight: 400;
`;

const MeasurementList = ({ data }) => {
    return (
        <ContentWrapper>
          <ContentValue>{`waga: ${data.weight ?? "-"}kg`}</ContentValue>
          <ContentValue>{`Obwód klatki: ${
            data.chest ?? "-"
          } cm`}</ContentValue>
          <ContentValue>{`Obwód bioder: ${
            data.hips ?? "-"
          } cm`}</ContentValue>
          <ContentValue>{`Obwód talii: ${
            data.waist ?? "-"
          } cm`}</ContentValue>
          <ContentValue>{`Obwód uda: ${
            data.thigh ?? "-"
          } cm`}</ContentValue>
          <ContentValue>{`Obwód ramienia: ${
            data.arm ?? "-"
          } cm`}</ContentValue>
          <ContentValue>{`Obwód bicepsa: ${
            data.biceps ?? "-"
          } cm`}</ContentValue>
        </ContentWrapper>
    )
}

export default MeasurementList
