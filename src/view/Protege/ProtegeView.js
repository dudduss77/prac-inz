import React from "react";
import { ReusableViewWrapper, Row } from "../../components/Reusable";
import Diet from "./components/Diet";
import ImageRaport from "./components/ImageRaport";
import MeasurementRaport from "./components/MeasurementRaport";
import Questionnaire from "./components/Questionnaire";
import SimpleInfo from "./components/SimpleInfo";
import Training from "./components/Training";
import TrainingRaport from "./components/TrainingRaport";

const ProtegeView = () => {
  return (
    <ReusableViewWrapper isColumnLayout={true}>
      <Row isGap>
        <SimpleInfo />
        <ImageRaport />
      </Row>
      <Row isGap>
        <Questionnaire />
        <MeasurementRaport />
      </Row>
      <Row isGap>
        <Diet />
        <Training />
      </Row>
      <Row isGap>
        <TrainingRaport />
      </Row>
    </ReusableViewWrapper>
  );
};

export default ProtegeView;
