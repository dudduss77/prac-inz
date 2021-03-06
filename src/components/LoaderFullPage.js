import React from 'react'
import styled from 'styled-components';

const StyledRingContainer = styled.div`
    display: inline-block;
    position: relative;
    background-color: ${({ backgroundColor }) => backgroundColor}; // #001628
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 84px;
`;

const StyledRingDiv = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #69C0FF;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #69C0FF transparent transparent transparent;

    &:nth-child(1) {
        animation-delay: -0.45s;
    }
    &:nth-child(2) {
        animation-delay: -0.3s;
    }
    &:nth-child(3) {
        animation-delay: -0.15s;
    }


    @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderFullPage = ({
    backgroundColor
}) => {
    return (
<StyledRingContainer backgroundColor={backgroundColor}>
    <StyledRingDiv></StyledRingDiv>
    <StyledRingDiv></StyledRingDiv>
    <StyledRingDiv></StyledRingDiv>
    <StyledRingDiv></StyledRingDiv>
</StyledRingContainer>
    )
}

export default LoaderFullPage
