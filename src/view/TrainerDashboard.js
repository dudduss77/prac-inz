import React from "react";
import BoxHeader from "../components/Box/components/BoxHeader";
import Message from "../components/Message/Message";
import { Box, ReusableViewWrapper, Row } from "../components/Reusable";

const TrainerDashboard = () => {
  return (
    <ReusableViewWrapper isColumnLayout={true}>
      <Row>
        <Box width="30%">
          <BoxHeader headerTitle="Kalendarz" />
          dsda
        </Box>
        <Box width="70%" height="290px">
          <BoxHeader
            headerTitle="Ostatnie wiadomości"
            headerButtonTitle="Wiadomości"
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
