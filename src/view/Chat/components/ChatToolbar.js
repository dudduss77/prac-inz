import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { StyledTextarea } from "../../../components/Reusable";
import { addNewMessage } from "../../../features/ChatSlice";
import { selectUserId } from "../../../features/UserSlice";

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

const ChatToolbar = () => {
  const userId = useSelector(selectUserId);
  const chatDispatch = useDispatch();
  const [textareaValue, setTextareaValue] = useState();

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const sendMessage = () => {
    let message = {
      from: userId,
      to: 1234,
      isImage: false,
      content: textareaValue,
      date: Date.now(),
    };
    chatDispatch(addNewMessage(message));
    setTextareaValue("");
  };

  const sendImage = (event) => {
    let file = event.target.files[0];
    if (file) {
      const render = new FileReader();

      render.onload = (evt) => {
        let message = {
          from: userId,
          to: 1234,
          isImage: true,
          content: window.btoa(evt.target.result),
          date: Date.now(),
        };
        chatDispatch(addNewMessage(message));
      };
      render.readAsBinaryString(file);
    }

    // let message = {
    //   from: userId,
    //   to: 1234,
    //   isImage: true,
    //   content: base64,
    //   date: Date.now(),
    // };
    // chatDispatch(addNewMessage(message));
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
