import React from "react";
import { BoldText, Box, Icon, Row, Spacer } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import styled from "styled-components";
import avatar from "../../../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { getDateddmmyyy } from './../../../helpers'

const Avatar = styled.img`
  width: 100px;
  align-self: center;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SimpleInfo = ({
  data = null
}) => {
  const navigate = useNavigate();
  return data == null ? "Ładowanie" : (
    <Box width="50%">
      <BoxHeader>
        Informacje podstawowe
        <Spacer />
        <Icon onClick={() => navigate("/trainer/message/" + data.id)}>
          <FontAwesomeIcon icon="comment" />
        </Icon>
      </BoxHeader>
      <Row isPadding isGap>
        <Avatar src={avatar} />
        <Content>
          <h4>
            <BoldText>Imię i Nazwisko: </BoldText>{data.name}
          </h4>
          <h4>
            <BoldText>Adres email: </BoldText> {data.email}
          </h4>
          <h4>
            <BoldText>Ostatnio online: </BoldText> {data.onlineTime ? getDateddmmyyy(new Date(data.onlineTime.seconds*1000)) : "-"}
          </h4>
          <h4>
            <BoldText>Prowadzony od: </BoldText>{data.payedFrom ? getDateddmmyyy(new Date(data.payedFrom.seconds*1000)) : "-"}
          </h4>
          <h4>
            <BoldText>Prowadzony do: </BoldText>{data.payedTo ? getDateddmmyyy(new Date(data.payedTo.seconds*1000)) : "-"}
          </h4>
          <h4>
            <BoldText>Urodzony: </BoldText> - 
          </h4>
          <h4>
            <BoldText>Wzrost: </BoldText> -
          </h4>
        </Content>
      </Row>
    </Box>
  );
};

export default SimpleInfo;
