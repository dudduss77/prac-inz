import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BoxHeader from "../../components/Box/components/BoxHeader";
import { Box, Column, Row } from "../../components/Reusable";
import ChatToolbar from "./components/ChatToolbar";
import MessagesWrapper from "./components/MessagesWrapper";
import UserInfo from "./components/UserInfo";

const Chat = ({ isProtege }) => {
  return (
    <Box height="100%">
      <BoxHeader>
        <FontAwesomeIcon icon="chevron-left" />
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
