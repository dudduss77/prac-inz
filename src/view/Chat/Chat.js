import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router";
import BoxHeader from "../../components/Box/components/BoxHeader";
import { Box, Column, Icon, Row } from "../../components/Reusable";
import ChatToolbar from "./components/ChatToolbar";
import MessagesWrapper from "./components/MessagesWrapper";
import UserInfo from "./components/UserInfo";

const Chat = ({ isProtege }) => {
  const navigate = useNavigate();
  return (
    <Box maxHeight="100%" height="100%" isOverflow>
      <BoxHeader>
        <Icon><FontAwesomeIcon onClick={() => navigate(-1)} icon="chevron-left" /></Icon>
        {isProtege ? "Czat z trenerem" : "Czat z użytkownikiem Jan Kowalski"}
      </BoxHeader>
      <Row flexValue="1">
        {!isProtege && <UserInfo />}
        <Column flexValue="1" isGap>
          <MessagesWrapper />
          <ChatToolbar />
        </Column>
      </Row>
    </Box>
  );
};

export default Chat;
