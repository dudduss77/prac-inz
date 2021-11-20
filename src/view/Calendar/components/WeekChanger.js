import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { getDateddmmyyy, getLastMondayTime } from '../../../helpers';

import { ReactComponent  as ArrowSVG } from './../../../assets/arrow.svg';

const StyledContainer = styled.span`
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledArrowLeftSVG = styled.svg.attrs({ 
  width: '29px',
  height: '20px',
  })`
    transform: rotate(90deg);
    cursor: pointer;

    
    & * {
        fill-opacity: 1;
    }
  `;
  
  const StyledArrowRightSVG = styled.svg.attrs({ 
    width: '29px',
    height: '20px',
  })`
    transform: rotate(-90deg) scaleX(-1);
    cursor: pointer;

    & * {
        fill-opacity: 1;
    }
  `;

  const StyledContent = styled.div`
    font-weight: bold;
  `;

const ONE_DAY_MS = 86400000; //24*60*60*1000

const WeekChanger = ({
  numberOfDays = 1,
  onChange = (e) => console.log(e)
}) => {

  const [date, setDate] = useState({
    from: new Date(getLastMondayTime()),
    to: new Date((new Date(getLastMondayTime())).getTime() + (numberOfDays-1)*ONE_DAY_MS)
  });
  // const [dateTo, setDateTo] = useState(); 

  const handlerOnPlusClick = () => {
    setDate(({from, to}) => ({
      from: new Date(from.getTime() + numberOfDays*ONE_DAY_MS),
      to: new Date(to.getTime() + numberOfDays*ONE_DAY_MS)
    }));
  }

  const handlerOnMinusClick = () => {
    setDate(({from, to}) => ({
      from: new Date(from.getTime() - numberOfDays*ONE_DAY_MS),
      to: new Date(to.getTime() - numberOfDays*ONE_DAY_MS)
    }));
  }

  useEffect(() => {
    onChange(date);
  }, [date])
  
    return (
        <StyledContainer>
            <StyledArrowLeftSVG as={ArrowSVG} onClick={handlerOnMinusClick} />
            <StyledContent>
              {numberOfDays!==1 && (getDateddmmyyy(date.from) + " - ")} {getDateddmmyyy(date.to)}               
            </StyledContent>

            <StyledArrowRightSVG as={ArrowSVG} onClick={handlerOnPlusClick} />
        </StyledContainer>
    )
}

export default WeekChanger
