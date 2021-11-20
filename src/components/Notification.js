import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  changeNotificationStateHidde,
  selectNotificationMessage,
  selectNotificationStatus,
} from "../features/AppSlice";

const StyleNotification = styled.div`
  position: absolute;
  padding: 10px;
  width: 200px;
  background: ${({ theme }) => theme.backgroundColorFour};
  border-radius: 8px;
  top: 75px;
  color: ${({ theme }) => theme.CharacterPrimaryInvers};
  transition: 1s;
  right: ${({ isShowed }) => (isShowed ? "20px" : "-220px")};
`;

const Notification = () => {
  const notificationState = useSelector(selectNotificationStatus);
  const notificationMessage = useSelector(selectNotificationMessage);
  const notificationDispatch = useDispatch();

  useEffect(() => {
    console.log(notificationState);
    if (notificationState) {
      setTimeout(() => {
        console.log("timeout");
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
