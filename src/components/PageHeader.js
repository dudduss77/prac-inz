import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import TrainerPageHeaderData from "../data/TrainerPageHeaderData.json";
import ProtegePageHeaderData from "../data/ProtegePageHeaderData.json";

const StyledPageHeader = styled.div`
  background: ${({ theme }) => theme.naturalOne};
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledPath = styled.h5`
  color: ${({ theme }) => theme.CharacterSecoundary};
`;

const StyledHeader = styled.h3`
  font-weight: 700;
`;
const PageHeader = ({ isProtege }) => {
  const { pathname } = useLocation();
  const [headerData, setHeaderData] = useState({});

  useEffect(() => {
    let currentData;
    if (isProtege) {
      [currentData] = ProtegePageHeaderData.filter(
        (item) => item.pageHeaderPath === pathname.replace(/[0-9]/g, "")
      );
    } else {
      [currentData] = TrainerPageHeaderData.filter(
        (item) => item.pageHeaderPath === pathname.replace(/[0-9]/g, "")
      );
    }

    setHeaderData(currentData);
  }, [pathname, isProtege]);
  return (
    <StyledPageHeader>
      {headerData && (
        <>
          <StyledPath>{headerData.pageHeaderPathName}</StyledPath>
          <StyledHeader>{headerData.pageHeaderTitle}</StyledHeader>
          <h5>{headerData.pageHeaderDescription}</h5>
        </>
      )}
    </StyledPageHeader>
  );
};

export default PageHeader;
