import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import BoxHeader from "../../components/Box/components/BoxHeader";
import {
  ClickedInput,
  Column,
  Icon,
  Spacer,
} from "../../components/Reusable";
import { useInput } from "../../hooks/useInput";
import QuestionItem from "./components/QuestionItem";
import QuestionToolBar from "./components/QuestionToolBar";



const QuestionnaireNew = () => {
    const navigate = useNavigate()
    const nameInput = useInput("Nowa Ankieta");
    const [toolBarPosition, setToolBarPosition] = useState({ top: "-100", right: "-100", key: 0})

    const questionList = useSelector((state) => state.questionaire)
    
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

          <Column onScroll={() => setToolBarPosition({ top: -100, left: -100, key: 0 })} height="100%" alignItems="center" width="100%" isOverflow>
            {questionList.map((item, key) =>  <QuestionItem onMouseMove={setToolBarPosition} key={key} indx={key}/>)}
          </Column>

          <QuestionToolBar 
            top={toolBarPosition.top} 
            left={toolBarPosition.right + 10} 
            toolBarPosition={toolBarPosition}
          />

        </>
    )
}

export default QuestionnaireNew
