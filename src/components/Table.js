import React from 'react'
import styled from 'styled-components';

import { ReactComponent  as SortSVG } from './../assets/sort.svg';

const StyledTable = styled.table`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.neutralOne};
`;

const StyledRow = styled.tr`
`;

const StyledCell = styled.td`
  background-color: ${({ theme }) => theme.naturalOne};
  height: 56px;
  position: relative;
  text-align: center;
  padding: 10px;


  &::after {
    content: '';
    display: block;
    border-right: 1px solid ${({ theme }) => theme.naturalFive};
    height: 40%;
    width: 20px;
    position: absolute;
    top: 30%;
    right: 0px;
  }
  


  @media screen and (max-width: ${({ showMinWidth }) => showMinWidth} ) {
    display: ${({ showMinWidth }) => showMinWidth ? 'none' : 'table-cell'};
  }

`;


const HeaderStyle = styled(StyledCell)`
  background-color: ${({ theme }) => theme.neutralOne};
  font-weight: bold;

`;


const StyledHeader = ({ 
  onSort = () => {},
  isSorted = false,
  children, 
  showMinWidth
}) => {


  return (
  <HeaderStyle as="th" showMinWidth={showMinWidth ?? false}>
    {children}
    {isSorted && <SortSVG onClick={onSort}/>}  
  </HeaderStyle>  
  )
}

export { StyledTable, StyledRow, StyledHeader, StyledCell }

