import React from 'react'
import styled from 'styled-components';

const CalendarItemStyled = styled.div`
    background-color: ${({ color }) => color};
    border-radius: 8px;
    margin: 10px;   
    padding: 10px;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover { 
        transform: scale(1.2);
        z-index:9999999999
    }
    
`;

const CalendarItem = ({time, description, color = '#00FF00'}) => {
    return (
        <CalendarItemStyled color={color}>
            <div>{ time }</div>
            <div>{ description }</div>
            
        </CalendarItemStyled>
    )
}

export default CalendarItem
