import React from 'react'
import styled from 'styled-components';

import { ReactComponent  as ArrowSVG } from './../assets/arrow.svg';

const Pagination = ({
    active = 1,
    count = 10,
    onChange = (val) => {}
}) => {

    const StyledContainer = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: row;
    `;

    const StyledPagination__item = styled.div`
      width: 30px;
      height: 30px;
      border-radius: 2px;
      border: 1px solid ${({ theme, active }) => active ? theme.PrimarySix : theme.naturalFive};
      text-align: center;
      line-height: 30px;
      cursor: pointer;
      background-color: ${({ theme }) => theme.naturalOne};
      margin: 5px;
      color: ${({ theme, active }) => active ? theme.PrimarySix : theme.black};

      &:hover {
        background-color: ${({ theme }) => theme.naturalFour};
      }
    `;

    const StyledArrowLeftSVG = styled.svg.attrs({ 
      width: '15px',
      height: '10px',
    })`
      transform: rotate(90deg);
    `;

    const StyledArrowRightSVG = styled.svg.attrs({ 
      width: '15px',
      height: '10px',
    })`
      transform: rotate(-90deg);
    `;

    const itemTemplate = (item, active) => (
      <StyledPagination__item 
        active={active} 
        onClick={({target}) => onChange(target.textContent)}
      >
        {item}
      </StyledPagination__item>
    )
    const mappItems = () => {
      const tab = [];
      
      for(let i = (active-3<=1) ? 1 : (active-2); i <= ((active+3)>=count) ? count : (active+2); i++) {
        console.log(i);
        debugger
      }
        // tab.push(itemTemplate(i, active == i));
      return tab;
    }

    return (
        <StyledContainer>
          <StyledPagination__item onClick={() => onChange(active-1)}>
            <StyledArrowLeftSVG as={ArrowSVG} />
          </StyledPagination__item>
            {mappItems()}
          <StyledPagination__item onClick={() => onChange(active+1)}>
            <StyledArrowRightSVG as={ArrowSVG} />
          </StyledPagination__item>
        </StyledContainer>
    )
}
export default Pagination

