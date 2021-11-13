import React from 'react'
import styled from 'styled-components';

const Table = ({ 
  data  = [
    ['nagłówke1', 'nagłówek2', 'nagłówek3', 'nagłówek4'],
    ['content1', 'content2', 'content3', 'content4'],
    ['content1', 'content2', 'content3', 'content4'],
    ['content1', 'content2', 'content3', 'content4'],
    ['content1', 'content2', 'content3', 'content4'],
  ]
}) => {

  const StyledTable = styled.div`
    width: 100%;
  `;

  const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.neutralOne};
    height: 56px;
    width: 100%;
    line-height: 56px;
  `;

  const StyledRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
  `;

  const StyledCell = styled.div`
  
  `;
  return (
    <StyledTable>
      <StyledRow>
        <StyledHeader>wadwd</StyledHeader>     
        <StyledHeader>wadwd</StyledHeader>     
        <StyledHeader>wadwd</StyledHeader>     
        <StyledHeader>wadwd</StyledHeader>     
      </StyledRow>

      <StyledRow>
        <StyledCell>wadwd</StyledCell>     
        <StyledCell>wadwd</StyledCell>     
        <StyledCell>wadwd</StyledCell>     
        <StyledCell>wadwd</StyledCell>     
      </StyledRow>

    </StyledTable>
  )
}

export default Table

