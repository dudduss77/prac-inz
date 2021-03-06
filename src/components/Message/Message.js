import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import avatar from "../../assets/user.png";
import UserLink from "../UserLink";

const StyledMessage = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.naturalSeven};
  cursor: pointer;
`;
const MessagePreview = styled.div`
  width: 100px;
  flex: 1;
  color: ${({ isReaded, theme }) =>
    isReaded ? theme.CharacterSecoundary : theme.CharacterPrimary};
  font-weight: ${({ isReaded }) => (isReaded ? "400" : "700")};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const DateStyle = styled.div`
  text-align: right;
`;

const Message = ({
  isReaded,
  messageId,
  messageUserAvatar,
  messageUserName,
  messageContent,
  messageDate,
}) => {
  const navigate = useNavigate();
  const MessageClick = () => {
    navigate(`/trainer/message/${messageId}`);
  };

  const DateFormat = () => {
    var date = new Date(messageDate);
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return (
      day + "." + month + "." + date.getFullYear() + " " + hour + ":" + minutes
    );
  };
  return (
    <StyledMessage onClick={MessageClick}>
      <UserLink
        customColor
        haveMinWidth
        imgSrc={messageUserAvatar ? messageUserAvatar : avatar}
        userName={messageUserName}
      />
      <MessagePreview isReaded={isReaded}>{messageContent}</MessagePreview>
      <DateStyle>{DateFormat()}</DateStyle>
    </StyledMessage>
  );
};

export default Message;
