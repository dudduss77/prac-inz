import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const StyledSettings = styled.div`
  width: 100%;
  height: auto;
  background: #818A9C;
`;

const SettingsHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const SettingsHeaderTitle = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const SettingsHeaderIcon = styled.div`
  width: 50px;
  height: 50px;
  background: #6D768A;
  font-size: 1.7em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SettingsContent = styled.div`
  padding: 10px;
`;

const Settings = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledSettings>
      <SettingsHeader>
        <SettingsHeaderTitle>{title}</SettingsHeaderTitle>
        <SettingsHeaderIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FontAwesomeIcon icon="chevron-up" />
          ) : (
            <FontAwesomeIcon icon="chevron-down" />
          )}
        </SettingsHeaderIcon>
      </SettingsHeader>
      {isOpen && <SettingsContent></SettingsContent>}
    </StyledSettings>
  );
};

export default Settings;
