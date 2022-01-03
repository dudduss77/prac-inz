import React from "react";
import { ReusableViewWrapper, Row } from "../../components/Reusable";
import CurrentDiet from "./components/CurrentDiet";
import CurrentImage from "./components/CurrentImage";
import CurrentMeasurment from "./components/CurrentMeasurment";
import CurrentTraining from "./components/CurrentTraining";

const ProtegeDashboard = () => {
  return (
    <ReusableViewWrapper isColumnLayout={true} flexValue="1">
      <Row isGap>
        <CurrentDiet />
        <CurrentTraining />
      </Row>
      <Row isGap>
        <CurrentImage />
        <CurrentMeasurment />
      </Row>
    </ReusableViewWrapper>
  );
};

export default ProtegeDashboard;
