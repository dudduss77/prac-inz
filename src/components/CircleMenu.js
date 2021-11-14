import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
    position: absolute;
    width: 120px;
    height: auto;
    z-index: 999999999999999;
    right: 50%;
    top: 50%;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.backgroundColorOne};
    color: #aed8ff;
    padding: 20px 0px;

    display: ${({ isVisible }) => isVisible ? 'block' : 'none'};    
`;

const StyledPosition = styled.div`
    height: 36px;
    line-height: 36px;
    cursor: pointer;
    text-align: initial;
    padding-left: 20px;     

    &:hover {
        background-color: ${({ theme }) => theme.PrimarySix};
    }
`;

export { StyledContainer, StyledPosition }
