import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import styled from "styled-components";
import { StyledTextarea } from "../../../components/Reusable";
import { selectUserId } from "../../../features/UserSlice";
import {
  getProtegeTrainerId,
  pushNewMessage,
} from "../../../firebase/dataFirebase";

const StyledChatToolbar = styled.div`
  padding: 0 10px 10px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ChatToolbarIcon = styled.div`
  font-size: 1.5em;
  cursor: pointer;
  input {
    width: 20px;
    height: 30px;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;

const ChatToolbar = ({ protegeId, messageId, isProtege }) => {
  const userId = useSelector(selectUserId);
  const [textareaValue, setTextareaValue] = useState();
  const [toTrainerId, setTrainerId] = useState(null);

  useEffect(() => {
    (async () => {
      if (isProtege) {
        const trainerId = await getProtegeTrainerId(userId);
        setTrainerId(trainerId);
      }
    })();
  }, []);

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const sendMessage = async () => {
    let message = {
      from: userId,
      to: isProtege ? toTrainerId : protegeId,
      isImage: false,
      content: textareaValue,
      date: Date.now(),
    };
    await pushNewMessage(messageId, message);
    setTextareaValue("");
  };

  const sendImage = (event) => {
    let file = event.target.files[0];
    if (file) {
      const render = new FileReader();

      render.onload = async (evt) => {
        let message = {
          from: userId,
          to: isProtege ? toTrainerId : protegeId,
          isImage: true,
          content: window.btoa(evt.target.result),
          date: Date.now(),
        };
        await pushNewMessage(messageId, message);
      };
      render.readAsBinaryString(file);
    }
  };

  return (
    <StyledChatToolbar>
      <ChatToolbarIcon>
        <input type="file" onChange={sendImage} />
        <FontAwesomeIcon icon="file-image" />
      </ChatToolbarIcon>
      <StyledTextarea
        value={textareaValue}
        onChange={handleChange}
        placeholder="Napisz..."
      ></StyledTextarea>
      <ChatToolbarIcon onClick={sendMessage}>
        <FontAwesomeIcon icon="paper-plane" />
      </ChatToolbarIcon>
    </StyledChatToolbar>
  );
};

export default ChatToolbar;
