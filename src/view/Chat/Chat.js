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
    <Box height="100%">
      <BoxHeader>
        <Icon><FontAwesomeIcon onClick={() => navigate(-1)} icon="chevron-left" /></Icon>
        {isProtege ? "Czat z trenerem" : "Czat z użytkownikiem xyz"}
      </BoxHeader>
      <Row flexValue="1">
        {!isProtege && <UserInfo />}
        <Column flexValue="1">
          <MessagesWrapper />
          <ChatToolbar />
        </Column>
      </Row>
    </Box>
  );
};

export default Chat;
