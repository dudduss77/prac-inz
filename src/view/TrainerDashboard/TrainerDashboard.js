import React from "react";
import { ReusableViewWrapper, Row } from "../../components/Reusable";
import Calendar from "./components/Calendar";
import LastMessages from "./components/LastMessages";
import NewProtege from "./components/NewProtege";

const TrainerDashboard = () => {
  return (
    <ReusableViewWrapper isColumnLayout={true}>
      <Row isGap isOverflow>
        <Calendar />
        <LastMessages />
      </Row>
      <Row>
        <NewProtege />
      </Row>
    </ReusableViewWrapper>
  );
};

export default TrainerDashboard;
