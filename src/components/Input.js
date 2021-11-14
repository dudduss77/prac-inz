import React from 'react'
import styled from "styled-components";

  const Container = styled.div`
    display: flex;
    width: ${({ width }) =>  width};
    height: ${({ height }) =>  height};
    background: ${({theme}) => theme.naturalOne};
    border: 1px solid ${({theme}) => theme.naturalFive};
    box-sizing: border-box;
    border-radius: 2px;

    &:focus-within {
      outline-offset: 0px;
      outline: 2px solid #0000FF;
    }
  `;

  const StyledInput = styled.input`
    height: 38px;
    width: 360px;
    border: none;
    padding: 0;
    padding-left: 10px;

    &:focus-visible {
      outline: none;  
      border: none;
    }
  `;

  const StyledSVG = styled.div`
    margin-left: 10px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `

const Input = ({ 
  icon,
  placeholder = "",
  width = '360px',
  height = "42px",
}) => {
  const Icon = icon;



  return (
    <Container>
      {icon && 
        <StyledSVG>
          <Icon/>
        </StyledSVG>
      }

      <StyledInput 
        placeholder={placeholder} 
        width={width}
        height={height}
      />
    </Container>
  )
}

export default Input
