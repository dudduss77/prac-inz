import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux";
import { addQuestion, copyQuestion, swapQuestion } from "../../../features/QuestionaireSlice";

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
    toolBarPosition = {}
}) => {

    const dispatch = useDispatch();
    const questionList = useSelector((state) => state.questionaire)
    
    const handlerOnPlusClick = () => {
        dispatch(addQuestion());
    }
      
    const handlerOnCopyClick = () => {
        console.log('kopiuje')
        dispatch(copyQuestion({ id: toolBarPosition.key}));
        // setQuestionList(prev => [...prev, prev[toolBarPosition.key]])
    }
  
    const handlerMoveUp = e => {
        dispatch(swapQuestion([toolBarPosition.key, toolBarPosition.key === 0 ? 0 : toolBarPosition.key-1]));
    }
  
      const handlerMoveDown = () => {
        dispatch(swapQuestion([toolBarPosition.key, questionList.length-1 === toolBarPosition.key ? questionList.length-1 : toolBarPosition.key+1]));
      }

    return (
        <StyledColumn top={top} left={left}>
            <StyledSVG as={ArrowSVG} onClick={handlerMoveUp}/>
            <StyledSVG as={FileSVG} onClick={handlerOnCopyClick} />
            <StyledSVG as={PlusSVG} onClick={handlerOnPlusClick} />
            <StyledArrowDown as={ArrowSVG} onClick={handlerMoveDown}/>
        </StyledColumn>
    )
}

export default QuestionToolBar
