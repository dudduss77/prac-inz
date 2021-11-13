import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ReactComponent  as ArrowSVG } from './../assets/arrow.svg';

const SelectContainer = styled.div`
  width: 250px;
  min-height: 42px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.25);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:focus-within {
      outline-offset: 0px;
      outline: 2px solid #0000FF;
  }

`;


const StyledSVG = styled.svg.attrs({ 
  width: '15px',
  height: '10px',
})`
  position: absolute;
  right: 10px;
  top: 16px;
`;

const StyledInput = styled.input`
  height: calc(42px - 2px);
  width: calc(100% - 35px);
  border: none;
  border-radius: 4px;

  &:focus-visible {
      outline: none;  
      border: none;
  }

  `;

const StyledList = styled.div`
  max-height: 150px;
  width: 100%;
  overflow: scroll;
  display: ${({isVisible}) => isVisible ? 'block' : 'none'};
`;


const StyledList__item = styled.div`
  width: 100%;
  height: 42px;
  padding-left: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #F0F0F0;  

  }
`;

const Select = ({
  data = [], 
  placeholder = "Select",
  onChange = (val) => {},

}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("")

  const handleToggleMenu = () => setIsVisible(prev => !prev);

  const handleItemClick = ({ target }) => {
    setInputValue(target.textContent);
  }

  useEffect(() => {
    onChange(inputValue)
  }, [inputValue])

    return (
        <SelectContainer 
          onBlur={() => setTimeout(handleToggleMenu, 70)}
        >
          <StyledSVG as={ArrowSVG} />
          <StyledInput 
            onFocus={handleToggleMenu} 
            type="text" 
            placeholder={placeholder}
            value={inputValue}
            onChange={({target}) => setInputValue(target.value) }
          />

          <StyledList isVisible={isVisible}>
            {
            // let regex  = new RegExp(inputValue, "i");
            data.map(item => (new RegExp(inputValue, "i")).test(item) ? <StyledList__item onClick={handleItemClick}> {item}</StyledList__item> : "")
            }
          </StyledList>
        </SelectContainer>
    )
}

export default Select
