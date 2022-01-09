import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getTrainingReports } from "../../../firebase/dataFirebase";
import LoaderFullPage from "./../../../components/LoaderFullPage";
import { getDateddmmyyy } from "../../../helpers";
import DropDownList from "../../../components/DropDownList";
import { Column, Row } from "../../../components/Reusable";


const Center = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
`;


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

const StyledHeader = styled.h4`
  color: ${({ customColor }) => customColor};
  margin: ${({ customMargin }) => customMargin};
`;

const StyledMessage = styled.div`
  width: calc(100% - 20px);
  height: auto;
background: ${({ theme }) => theme.naturalFour};
  border-radius: 10px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
`;

const TrainingRaport = ({ protegeId }) => {

  const { userId } = useSelector(({ user }) => user);
  const [reports, setReports] = useState(null);

  const fetchReports = async () => {
    const res = await getTrainingReports(protegeId ?? userId);
    setReports(res.length <1 ? undefined : res);
  };

  useEffect(fetchReports, [])

  return reports === null?
   <LoaderFullPage /> 
    : 
    reports === undefined ? 
   <Center>Brak raportów treningowych</Center>
    :
    reports.map(({data}, i) => (
    <DropDownList title={"Raport z dnia " + getDateddmmyyy(new Date(data.time.seconds*1000))} >
        
        
        
        <Column isGap isPadding>
          <Row isGap>
            <StyledHeader>Realizacja treningu:</StyledHeader>
            <StyledHeader
              customColor={colorMap.find(
                (item) => item.name === data.doneStatus
              )}
            >
              {statusMap.find(({name}) => name === data.doneStatus).status}
            </StyledHeader>
          </Row>
          <StyledMessage>{data.name}</StyledMessage>
        </Column>


    </DropDownList>
  ));
};

export default TrainingRaport;
