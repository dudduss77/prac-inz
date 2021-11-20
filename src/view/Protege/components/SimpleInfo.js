import React from "react";
import { BoldText, Box, Row } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import styled from "styled-components";
import avatar from "../../../assets/user.png";

const Avatar = styled.img`
  width: 100px;
  align-self: center;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SimpleInfo = () => {
  return (
    <Box width="50%">
      <BoxHeader headerTitle="Informacje podstawowe" />
      <Row isPadding isGap>
        <Avatar src={avatar} />
        <Content>
          <h4>
            <BoldText>Imię i Nazwisko: </BoldText>Jan Kowalski
          </h4>
          <h4>
            <BoldText>Adres email: </BoldText>jankowalski@gmail.com
          </h4>
          <h4>
            <BoldText>Ostatnio online: </BoldText>15.11.2021
          </h4>
          <h4>
            <BoldText>Prowadzony od: </BoldText>01.10.2021
          </h4>
          <h4>
            <BoldText>Urodzony: </BoldText>01.10.2014
          </h4>
          <h4>
            <BoldText>Wzrost: </BoldText>187 cm
          </h4>
        </Content>
      </Row>
    </Box>
  );
};

export default SimpleInfo;
