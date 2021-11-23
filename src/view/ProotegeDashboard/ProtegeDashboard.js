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
        <CurrentMeasurment
          measurmentData={[
            {
              name: "Masa ciała",
              value: 100,
              unit: "kg",
            },
            {
              name: "Obwód klatki",
              value: 100,
              unit: "cm",
            },
            {
              name: "Obwód bioder",
              value: 100,
              unit: "cm",
            },
            {
              name: "Obwód talii",
              value: 100,
              unit: "cm",
            },
            {
              name: "Obwód uda",
              value: 100,
              unit: "cm",
            },
            {
              name: "Obwód ramienia",
              value: 100,
              unit: "cm",
            },
          ]}
        />
      </Row>
    </ReusableViewWrapper>
  );
};

export default ProtegeDashboard;
