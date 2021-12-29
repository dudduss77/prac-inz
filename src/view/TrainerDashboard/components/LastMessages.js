import React from "react";
import { Box } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import Message from "../../../components/Message/Message";
import { useNavigate } from "react-router";
const LastMessages = () => {
  const navigate = useNavigate();
  return (
    <Box width="70%" height="290px">
      <BoxHeader
        headerTitle="Ostatnie wiadomości"
        headerButtonTitle="Wiadomości"
        //placeHodler do zmiany tylko test
        headerOnClick={() => navigate("/trainer/messages")}
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
  );
};

export default LastMessages;
