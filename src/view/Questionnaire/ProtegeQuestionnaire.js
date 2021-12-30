import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import BoxHeader from "../../components/Box/components/BoxHeader";
import {
  Button,
  Column,
  Icon,
  Spacer,
} from "../../components/Reusable";
import QuestionItem from "./components/QuestionItem";



const ProtegeQuestionnaire = () => {
    const navigate = useNavigate();

    const questionList = useSelector((state) => state.questionaire.questionList)
    
    return (
        <Column justifyContent="center" width="100%" backgroundColor="#F0F2F5" >

          <BoxHeader>
              Ankieta początkowa
            <Spacer />
          </BoxHeader>

          <Column alignItems="center" width="100%" isOverflow>
            {questionList.map((item, key) =>  <QuestionItem key={key} indx={key} isProtege/>)}

            
          </Column>
          <Column alignItems="center" isPadding>
            <Button>Wyślij</Button>            
          </Column>


        </Column>
    )
}

export default ProtegeQuestionnaire
