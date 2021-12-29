import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import BoxHeader from "../../components/Box/components/BoxHeader";
import { ClickedInput, Column, Icon, Spacer } from "../../components/Reusable";
import { changeNotificationStateShow } from "../../features/AppSlice";
import {
  loadQuestionairesFromDb,
  updateName,
} from "../../features/QuestionaireSlice";
import { selectUserId } from "../../features/UserSlice";
import { db } from "../../firebase/configFirebase";
import { createNewDoc, updateDocFun } from "../../firebase/dataFirebase";
import { useInput } from "../../hooks/useInput";
import QuestionItem from "./components/QuestionItem";
import QuestionToolBar from "./components/QuestionToolBar";

const QuestionnaireNew = ({ isEdit = false }) => {
  const { id } = useParams();
  const userId = useSelector(selectUserId);
  const notificationDispatch = useDispatch();
  const questionaireDispatch = useDispatch();
  const navigate = useNavigate();
  const selectName = useSelector((state) => state.questionaire.name);
  const nameInput = useInput(selectName);
  const [toolBarPosition, setToolBarPosition] = useState({
    top: "-100",
    right: "-100",
    key: 0,
  });

  const questionList = useSelector((state) => state.questionaire.questionList);
  console.log("questlist", questionList)
  useEffect(() => {
    if (isEdit) {
      if (userId && id) {
        questionaireDispatch(loadQuestionairesFromDb({ userId, questId: id }));
      }
    }
  }, [isEdit, id, userId]);

  useEffect(() => {
    questionaireDispatch(updateName(nameInput.value));
  }, [nameInput.value]);

  const saveQuestionaire = async () => {
    const pushObject = {
      name: nameInput.value,
      questionList,
    };
    if (userId) {
      if (isEdit) {
        updateDocFun(userId, "questionaires", id, pushObject);
      } else {
        const docId = await createNewDoc(userId, "questionaires", pushObject);
        navigate(`/trainer/questionnaire/edit/${docId}`);
      }

      notificationDispatch(changeNotificationStateShow("Zapisano"));
    }
  };

  return (
    <>
      <BoxHeader>
        <Icon onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon="chevron-left" />
        </Icon>
        <ClickedInput {...nameInput} />
        <Spacer />
        <Icon
          onClick={() => {
            saveQuestionaire();
          }}
          fontSize="1.3em"
        >
          <FontAwesomeIcon icon="save" />
        </Icon>
        <Icon onClick={() => {}} fontSize="1.3em">
          <FontAwesomeIcon icon="trash-alt" />
        </Icon>
      </BoxHeader>

      <Column
        onScroll={() => setToolBarPosition({ top: -100, left: -100, key: 0 })}
        height="100%"
        alignItems="center"
        width="100%"
        isOverflow
      >
        {questionList.map((item, key) => (
          <QuestionItem onMouseMove={setToolBarPosition} key={key} indx={key} />
        ))}
      </Column>

      <QuestionToolBar
        top={toolBarPosition.top}
        left={toolBarPosition.right + 10}
        toolBarPosition={toolBarPosition}
      />
    </>
  );
};

export default QuestionnaireNew;
