import React from "react";
import styled from "styled-components";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import { ReusableViewWrapper } from "../components/Reusable";


import { ReactComponent as UserSVG } from './../assets/user.svg';
import { ReactComponent as passSVG } from './../assets/pass.svg';

const TestDiv = styled.div`
  width: 250px;
  height: 250px;
  background: #333;
`;

const TrainerDashboard = () => {
  return (
    <ReusableViewWrapper isColumnLayout={true}>
      <Input placeholder="inputs" icon={UserSVG} width="360px" />  
      <Input placeholder="inputs" icon={passSVG} />  
      <Input placeholder="inputs" />  
      {/* <Checkbox label="test" disabled/>
      <Checkbox label="test"/>
      <Checkbox label="Testowy z większym label"/>
      <TestDiv />
      <TestDiv />
      <TestDiv />
      <TestDiv /> */}
    </ReusableViewWrapper>
  );
};

export default TrainerDashboard;
