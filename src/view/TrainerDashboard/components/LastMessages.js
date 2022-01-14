import React, { useEffect, useState } from "react";
import { Box, NoDataHeader } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import Message from "../../../components/Message/Message";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectUserId } from "../../../features/UserSlice";
import {
  getMessagesArray,
  getProtegeName,
} from "../../../firebase/dataFirebase";
import LoaderFullPage from "../../../components/LoaderFullPage";
const LastMessages = () => {
  const userId = useSelector(selectUserId);
  const navigate = useNavigate();
  const [messagesData, setMessagesData] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessagesArray(userId, setMessagesData, true, 5);
  }, []);

  useEffect(() => {
    if (messagesData) {
      messagesData.forEach(async (message) => {
        const username = await getProtegeName(message.data.protegeId);
        let lastMessage =
          message.data.messages[message.data.messages.length - 1];

        const arr = {
          id: message.id,
          isRead: lastMessage.from === userId,
          username: username,
          content: lastMessage.content,
          messageDate: lastMessage.date,
        };
        setMessages((old) => (old ? [...old, arr] : [arr]));
      });
    }
  }, [messagesData]);

  return (
    <Box width="70%" height="290px">
      <BoxHeader
        headerTitle="Ostatnie wiadomości"
        headerButtonTitle="Wiadomości"
        headerOnClick={() => navigate("/trainer/messages")}
      />
      {messagesData === null ? (
        <LoaderFullPage />
      ) : messagesData.length > 0 ? (
        messages.map((message) => (
          <Message
            isReaded={message.isRead}
            messageId={message.id}
            messageUserName={message.username}
            messageContent={message.content}
            messageDate={message.messageDate}
          />
        ))
      ) : (
        <NoDataHeader>Brak wiadomości</NoDataHeader>
      )}
    </Box>
  );
};

export default LastMessages;
