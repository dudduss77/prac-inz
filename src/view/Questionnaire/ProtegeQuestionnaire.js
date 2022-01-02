import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import BoxHeader from "../../components/Box/components/BoxHeader";
import {
  Button,
  Column,
  Spacer,
} from "../../components/Reusable";
import { loadProtegQuestionaireFromDb } from "../../features/QuestionaireSlice";
import QuestionItem from "./components/QuestionItem";
import { completeProtegeQuestionaire } from './../../firebase/dataFirebase'
import { useNotification } from "../../hooks/useNotification";
import { completeQuestionaire } from "../../features/UserSlice";

const ProtegeQuestionnaire = () => {
    const navigate = useNavigate();
    const notification = useNotification();
    const dispatch = useDispatch();

    const { questionList, name} = useSelector(({questionaire}) => questionaire)
    const { userId, isQuestionaireComplete } = useSelector(({user}) => user);

    const handleOnSend = async () => {
      console.log({ questionList, name});
      const res = await completeProtegeQuestionaire(userId, { questionList, name} );
      console.log(res);
      notification.show('Ankieta została wysłana');
      dispatch(completeQuestionaire());
    }

    useEffect(() => {
      dispatch(loadProtegQuestionaireFromDb({ userId }));
    }, [])

    useEffect(() => {
      if(isQuestionaireComplete) {
        navigate(`/protege/`);
      }
    }, [isQuestionaireComplete])
    
    return (
        <Column justifyContent="center" width="100%" backgroundColor="#F0F2F5" >

          <BoxHeader>
              {name}
            <Spacer />
          </BoxHeader>

          <Column alignItems="center" width="100%" isOverflow>
            {questionList.map((item, key) =>  <QuestionItem key={key} indx={key} isProtege/>)}

            
          </Column>
          <Column alignItems="center" isPadding>
            <Button onClick={handleOnSend}>Wyślij</Button>            
          </Column>


        </Column>
    )
}

export default ProtegeQuestionnaire
