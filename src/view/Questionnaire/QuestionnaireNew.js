import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import BoxHeader from "../../components/Box/components/BoxHeader";
import {
  Box,
  ClickedInput,
  Column,
  Icon,
  Row,
  Spacer,
} from "../../components/Reusable";
import { useInput } from "../../hooks/useInput";
import QuestionItem from "./components/QuestionItem";
import QuestionToolBar from "./components/QuestionToolBar";

const swapArrayElements = (arr, indexA, indexB) => {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};


const QuestionnaireNew = () => {

    const navigate = useNavigate()
    const nameInput = useInput("Nowa Ankieta");
    const [toolBarPosition, setToolBarPosition] = useState({ top: "-100", right: "-100", key: 0})

    const [questionList, setQuestionList] = useState([
      {
        type: 0,
        question: "Przykładowe pytanie",
      },
      {
        type: 1,
        question: "Przykładowe pytanie",
      },
      {
        type: 0,
        question: "Przykładowe pytanie",
      }
    ])

    const handleOnQuestionDelete = (index) => {
      console.log(questionList)
      let tem = questionList.filter((item, i) => { 
        console.log(i)
        console.log(toolBarPosition.key)
        console.log(i !== toolBarPosition.key)

        return i != index})
      console.log(tem)
      setQuestionList(tem)
      // setQuestionList(prev => {
      //   console.log(prev)

      //   const toReturn = prev.map((item, i) => {
      //     debugger
      //     if(i ===toolBarPosition.key) return;
      //     else return item;
      //     // return i !==toolBarPosition.key
      //   });

      //   console.log(toReturn);

      //   return toReturn
      // })
    }

    const handlerOnValueChange = (val, i) => {
      if(i != undefined) 
        setQuestionList(prev => {
          prev[i] = val;
          return prev;
        });
    }

    const handlerOnPlusClick = () => {
      setQuestionList(prev => [...prev,       {
        type: 0,
        question: "Przykładowe pytanie",
      }])
    }

    const handlerOnCopyClick = () => {
      setQuestionList(prev => [...prev, prev[toolBarPosition.key]])
    }

    const handlerMoveUp = e => {
      e.stopPropagation();
      if(toolBarPosition.key == 0) return
      setQuestionList(prev => {
        swapArrayElements(prev, toolBarPosition.key, toolBarPosition.key-1)
        debugger
        return prev;
      })
    }

    const handlerMoveDown = () => {

    }
    
    return (
        <>

          <BoxHeader>
            <Icon onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon="chevron-left" />
            </Icon>
            <ClickedInput {...nameInput} />
            <Spacer />
            <Icon onClick={() => {}} fontSize="1.3em">
              <FontAwesomeIcon icon="save" />
            </Icon>
            <Icon onClick={() => {}} fontSize="1.3em">
              <FontAwesomeIcon icon="trash-alt" />
            </Icon>
          </BoxHeader>

          <Column onScroll={() => setToolBarPosition({ top: -100, left: -100, key: 0 })} alignItems="center" width="100%" isOverflow>
            {questionList.map((item, key) =>  <QuestionItem initValue={item} onClose={handleOnQuestionDelete} onMouseMove={setToolBarPosition} key={key} index={key} value={item} onValueChange={handlerOnValueChange} />)}
          </Column>

          <QuestionToolBar 
            top={toolBarPosition.top} 
            left={toolBarPosition.right + 10} 
            onPlusClick={handlerOnPlusClick}
            onCopyClick={handlerOnCopyClick}
            onArrowDownClick={handlerMoveDown}
            onArrowUpClick={handlerMoveUp}
          />

        </>
    )
}

export default QuestionnaireNew
