import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CalendarItem from '../../../components/CalendarItem';
import { ONE_DAY_MS } from '../../../constants';
import { getDayNameFromDate, getDateddmmyyy, getNextDay } from '../../../helpers';

const StyledContainer = styled.div`
    border-left: 1px solid #079AE5;
    border-bottom: 1px solid #079AE5;
    border-top: 1px solid #079AE5;
    width: 100%;
    min-height: 500px; 
    display: flex;
    border-right: none;
`;

const StyledColumn = styled.div`
    border-right: 1px solid #079AE5;
    width: 100%;
    min-height: 500px; 
`;

const StyledHeader = styled.div`
    border-bottom: 1px solid #079AE5;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CalendarTable = ({
  date = null
}) => {

  const [mappedDays, setMappedDays] = useState([])

    useEffect(() => {
      const { from, to } = date;
      if(!from || !to) return;
      console.log(date);
      console.log(getDayNameFromDate(from))
      console.log(getDayNameFromDate(to));

      const tab = [];
      let actualDate = from;
      while(actualDate.getTime() <= to.getTime()) {
        tab.push(
          <StyledColumn>
          <StyledHeader>
            <p>{getDayNameFromDate(actualDate)}</p>  
            <p>{getDateddmmyyy(actualDate)}</p>
          </StyledHeader>
          <CalendarItem
            time="10:00 - 11:00"
            description="Opis zadania aktualnego..."
            color="#C4C4C4"
          />
          <CalendarItem
            time="10:00 - 11:00"
            description="Opis zadania aktualnego..."
            color="#FF0000"
          />
          <CalendarItem
            time="10:00 - 11:00"
            description="Opis zadania aktualnego..."
          />
        </StyledColumn>
        )

        actualDate = getNextDay(actualDate)
      }
      setMappedDays(tab)
      console.log(tab)
    }, [date]);

    return (
        <StyledContainer>
          {mappedDays}
        </StyledContainer>
    )
}

export default CalendarTable
