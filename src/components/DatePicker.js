import React from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
    display: flex;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    height: 42px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    box-sizing: border-box;
    border-radius: 2px;
    overflow: hidden;

    &:focus-within {
    outline-offset: 0px;
    outline: 2px solid #0000ff;
    }
`;

const DatePicker = ({
    width = "360px",
    height = "42px",
}) => {
    return (
        <StyledInput 
            type="date" 
            id="start" 
            name="trip-start"
            width={width}
            height={height}
        />
    )
}

export default DatePicker
