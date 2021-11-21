import React from 'react'
import styled from 'styled-components'

import { ReactComponent  as PlusSvg } from './../assets/plus.svg';

const StyledContainer = styled.div`
border-radius: 50px;
background-color: #18A0FB;
width: 50px;
height: 50px;
border: 1px solid #ffffff;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
cursor: pointer;
position: absolute;
right: 50px;
bottom: 50px;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.5s ease;

&:hover {
  transform: scale(1.2)
}

`;


const StyledSVG = styled.svg.attrs({ 
  width: '30px',
  height: '30px',
})`
  transform: rotate(90deg);
`;

const PlusButton = ({
  onClick = () => {}
}) => {
    return (
        <StyledContainer onClick={onClick}>
            <StyledSVG as={PlusSvg}/>
        </StyledContainer>
    )
}

export default PlusButton
