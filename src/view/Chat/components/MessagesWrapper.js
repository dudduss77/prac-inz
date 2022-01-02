import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { selectMessages } from "../../../features/ChatSlice";
import { selectUserId } from "../../../features/UserSlice";
import { getRealTimeMessages } from "../../../firebase/dataFirebase";

const StyledMessagesWrapper = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  overflow: auto;
  /* justify-content: flex-end; */
`;

const ChatBubble = styled.div`
  min-width: 150px;
  max-width: 500px;
  height: auto;
  background: ${({ isMy, theme }) =>
    isMy ? theme.PrimaryTwo : theme.naturalFour};
  align-self: ${({ isMy }) => (isMy ? "flex-end" : "flex-start")};
  border-radius: 10px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-top: auto;
  }
`;

const ChatBubbleDate = styled.h6`
  color: ${({ theme }) => theme.CharacterSecoundary};
  align-self: flex-end;
`;

const ChatImage = styled.img`
  min-width: 150px;
  max-width: 500px;
`;

const retDate = (timestamp) => {
  let date = new Date(parseInt(timestamp));
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  }`;
};

const MessagesWrapper = ({messageId}) => {
  const ref = useRef();
  const userId = useSelector(selectUserId);
  const [messageArray, setMessageArray] = useState([])

  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [messageArray]);

  useEffect(() => {
    const unsub = getRealTimeMessages(messageId, setMessageArray)
    return () =>  unsub()
  }, [])

  return (
    <StyledMessagesWrapper ref={ref}>
      {messageArray.map((message) => (
        <>
          <ChatBubble
            isMy={message.from === userId ? true : false}
            key={message.date}
          >
            {message.isImage ? (
              <ChatImage src={`data:image/png;base64, ${message.content}`} />
            ) : (
              message.content
            )}
            <ChatBubbleDate>{retDate(message.date)}</ChatBubbleDate>
          </ChatBubble>
        </>
      ))}
    </StyledMessagesWrapper>
  );
};

export default MessagesWrapper;
