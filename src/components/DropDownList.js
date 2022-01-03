import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import {
  AbsoluteIconWrapper,
  Icon,
} from "../components/Reusable";

const StyledDropDownList = styled.div`
  padding: 10px;
  width: calc(100% - 20px);
  border-bottom: 2px solid ${({ theme }) => theme.naturalFive};
`;

const VisableHeader = styled.div`
  position: relative;
`;

const DropDownList = ({
    children = "-",
    title = "No Title"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledDropDownList>
      <VisableHeader>
        {title}
        <AbsoluteIconWrapper right="10px">
          <Icon onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={`chevron-${isOpen ? "up" : "down"}`} />
          </Icon>
        </AbsoluteIconWrapper>
      </VisableHeader>
      {isOpen && children}
    </StyledDropDownList>
  );
};

export default DropDownList;

