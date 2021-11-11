import React from "react";
import styled from "styled-components";
import { ReusableViewWrapper } from "../components/Reusable";

const TestDiv = styled.div`
  width: 250px;
  height: 250px;
  background: #333;
`;

const TrainerDashboard = () => {
  return (
    <ReusableViewWrapper isColumnLayout={true}>
      <TestDiv />
      <TestDiv />
      <TestDiv />
      <TestDiv />
    </ReusableViewWrapper>
  );
};

export default TrainerDashboard;
