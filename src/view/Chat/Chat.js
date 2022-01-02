import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import BoxHeader from "../../components/Box/components/BoxHeader";
import { Box, Column, Icon, Row } from "../../components/Reusable";
import { selectUserId } from "../../features/UserSlice";
import {
  getMessageObject,
  getProtegeName,
} from "../../firebase/dataFirebase";
import ChatToolbar from "./components/ChatToolbar";
import MessagesWrapper from "./components/MessagesWrapper";
import UserInfo from "./components/UserInfo";

const Chat = ({ isProtege }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [protegeData, setProtegeData] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getMessageObject(id);
      const protege = await getProtegeName(data.protegeId);
      setProtegeData({ protegeName: protege, id: data.protegeId });
    })();
  }, []);
  return (
    <Box maxHeight="100%" height="100%" isOverflow>
      <BoxHeader>
        <Icon>
          <FontAwesomeIcon onClick={() => navigate(-1)} icon="chevron-left" />
        </Icon>
        {isProtege
          ? "Czat z trenerem"
          : `Czat z użytkownikiem ${protegeData.protegeName}`}
      </BoxHeader>
      <Row flexValue="1">
        {!isProtege && <UserInfo data={protegeData} />}
        <Column flexValue="1" isGap>
          <MessagesWrapper messageId={id} />
          <ChatToolbar isProtege={isProtege} protegeId={protegeData.id} messageId={id} />
        </Column>
      </Row>
    </Box>
  );
};

export default Chat;
