import React from 'react'
import styled from 'styled-components'
import CalendarItem from '../../../components/CalendarItem';


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
    justify-content: center;
    align-items: center;
`;

const CalendarTable = () => {
    return (
        <StyledContainer>
          
          <StyledColumn>
            <StyledHeader>Poniedziałek</StyledHeader>
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
          
          <StyledColumn>
            <StyledHeader>Wtorek</StyledHeader>
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
          
          <StyledColumn>
            <StyledHeader>Środa</StyledHeader>
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
          
          <StyledColumn>
            <StyledHeader>Czwartek</StyledHeader>
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
          
          <StyledColumn>
            <StyledHeader>Piątek</StyledHeader>
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
          
          <StyledColumn>
            <StyledHeader>Sobota</StyledHeader>
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
          
          <StyledColumn>
            <StyledHeader>Niedziela</StyledHeader>
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

        </StyledContainer>
    )
}

export default CalendarTable
