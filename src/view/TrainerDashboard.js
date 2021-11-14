import React from "react";
import { useDispatch } from "react-redux";
import BoxHeader from "../components/Box/components/BoxHeader";
import CalendarItem from "../components/CalendarItem";
import Message from "../components/Message/Message";
import { Box, ReusableViewWrapper, Row } from "../components/Reusable";
import { changeNotificationStateShow } from "../features/AppSlice";

const TrainerDashboard = () => {
  const notificationDispatch = useDispatch();
  return (
    <ReusableViewWrapper isColumnLayout={true}>
      <Row isGap>
        <Box width="30%">
          <BoxHeader headerTitle="Kalendarz" />
          <CalendarItem
            time="10:00 - 11:00"
            description="Opis zadania aktualnego..."
            color="#C4C4C4"
          />
          <CalendarItem
            time="10:00 - 11:00"
            description="Opis zadania aktualnego..."
            color="#FF0000"
          />
          <CalendarItem
            time="10:00 - 11:00"
            description="Opis zadania aktualnego..."
          />
        </Box>
        <Box width="70%" height="290px">
          <BoxHeader
            headerTitle="Ostatnie wiadomości"
            headerButtonTitle="Wiadomości"
            //placeHodler do zmiany tylko test
            headerOnClick={() =>
              notificationDispatch(
                changeNotificationStateShow("Wiadomości nie ma")
              )
            }
          />
          <Message
            messageId={1}
            messageUserName="Jan Testowy"
            messageContent="Test"
            messageDate="12.11.2021"
          />
          <Message
            isReaded={true}
            messageId={2}
            messageUserName="Karol Testowy"
            messageContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget imperdiet urna. Nunc libero erat, lobortis et dolor quis, hendrerit vestibulum purus."
            messageDate="11.11.2021"
          />
        </Box>
      </Row>
      <Row>
        <Box width="40%" height="400px">
          <BoxHeader
            headerTitle="Nowi podopieczni"
            headerButtonTitle="Wszyscy"
          />
        </Box>
      </Row>
    </ReusableViewWrapper>
  );
};

export default TrainerDashboard;
