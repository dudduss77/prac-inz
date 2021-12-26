import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  changeNotificationStateHidde,
  changeNotificationStateShow,
  selectNotificationMessage,
  selectNotificationStatus,
} from "../features/AppSlice";

const StyleNotification = styled.div`
  position: fixed;
  padding: 10px;
  width: 200px;
  background: ${({ theme }) => theme.backgroundColorFour};
  border-radius: 8px;
  top: 75px;
  color: ${({ theme }) => theme.CharacterPrimaryInvers};
  transition: 1s;
  right: ${({ isShowed }) => (isShowed ? "20px" : "-220px")};
  /* display: ${({ isShowed }) => (isShowed ? "block" : "none")}; */
`;

const Notification = () => {
  const notificationState = useSelector(selectNotificationStatus);
  const notificationMessage = useSelector(selectNotificationMessage);
  const notificationDispatch = useDispatch();

  useEffect(() => {
    if (notificationState) {
      setTimeout(() => {
        notificationDispatch(changeNotificationStateHidde());
      }, 2000);
    }
  }, [notificationState]);

  return (
    <StyleNotification isShowed={notificationState}>
      {notificationMessage}
    </StyleNotification>
  );
};


export default Notification;
