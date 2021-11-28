import React from 'react'
import styled from 'styled-components'
import { Column } from '../../../components/Reusable'

import { ReactComponent  as ArrowSVG } from './../../../assets/arrowBold.svg';
import { ReactComponent  as FileSVG } from './../../../assets/file.svg';
import { ReactComponent  as PlusSVG } from './../../../assets/plusBold.svg';

const StyledColumn = styled(Column)`
    background-color: white;
    width: max-content;
    position: absolute;
    top: ${({ top }) => top + "px"};
    left: ${({ left }) => left + "px"};
    * {
        padding: 5px;
    }
`;

const StyledSVG = styled.svg.attrs({ 
    width: '15px',
    height: '15px',
  })`
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
      transform: scale(1.5);
  }
`;



const StyledArrowDown = styled(StyledSVG)`
    transform: rotate(180deg);
    &:hover {
      transform: rotate(180deg) scale(1.5);
  }
`;

  
const QuestionToolBar = ({
    top = "-100",
    left = "-100", 
    onPlusClick = () => {},
    onCopyClick = () => {},
    onArrowUpClick = () => {},
    onArrowDownClick = () => {},
}) => {
    return (
        <StyledColumn top={top} left={left}>
            <StyledSVG as={ArrowSVG} onClick={onArrowUpClick}/>
            <StyledSVG as={FileSVG} onClick={onCopyClick} />
            <StyledSVG as={PlusSVG} onClick={onPlusClick} />
            <StyledArrowDown as={ArrowSVG} onClick={onArrowDownClick}/>
        </StyledColumn>
    )
}

export default QuestionToolBar
