import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ReactComponent  as ArrowSVG } from './../assets/arrow.svg';

const SelectContainer = styled.div`
  min-width: ${({ width }) => width};
  height: ${({customHeight}) => customHeight ? customHeight : '42px'};
  background-color: white;
  color: ${({theme}) => theme.CharacterPrimary};
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.25);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  &:focus-within {
    border-left: 2px solid #0000FF;
    border-right: 2px solid #0000FF;
    border-top: 2px solid #0000FF;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
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
  overflow-y: auto;
  display: ${({isVisible}) => isVisible ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  background-color: white;

  border-left: 2px solid #0000FF;
  border-right: 2px solid #0000FF;
  border-bottom: 2px solid #0000FF;
  border-radius: 4px;
  z-index: 20;

  &::-webkit-scrollbar {
    display: none;
  }
`;


const StyledListItem = styled.div`
  width: calc(100% - 20px);
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
  customHeight,
  onChange = (val) => {},
  initialValue = "",
  width = "250px",
  isFiltered = false,
  isTypingEnable = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState(initialValue)

  const handleToggleMenu = () => setIsVisible(prev => !prev);

  const handleItemClick = ({ target }) => {
    setInputValue(target.textContent);
  }

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue])

    return (
        <SelectContainer 
          onBlur={() => setTimeout(handleToggleMenu, 70)}
          customHeight={customHeight}
          width={width}
        >
          <StyledSVG as={ArrowSVG} />
          <StyledInput 
            onFocus={handleToggleMenu} 
            type="text" 
            placeholder={placeholder}
            value={inputValue}
            onChange={({target}) => isTypingEnable ? setInputValue(target.value) : "" }
          />
          <StyledList isVisible={isVisible }>
            {
            data.map((item, key) => (!isFiltered || (new RegExp(inputValue, "i")).test(item)) ? <StyledListItem onClick={handleItemClick} key={key}>{item}</StyledListItem> : "")
            
            }
          </StyledList>
        </SelectContainer>
    )
}

export default Select
