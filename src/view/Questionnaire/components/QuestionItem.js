import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Input from "../../../components/Input";
import { Box, Row } from "../../../components/Reusable";
import Select from "../../../components/Select";
import {
  deleteQuestion,
  updateQuestion,
} from "../../../features/QuestionaireSlice";
import { ReactComponent as CloseSVG } from "./../../../assets/close.svg";
import CheckBoxAnswer from "./types/CheckBoxAnswer";
import LongAnswer from "./types/LongAnswer";
import ShortAnswer from "./types/ShortAnswer";
import FileUpload from "./types/FileUpload";

const CustomBox = styled(Box)`
  overflow: visible;
`;

const StyledClose = styled.svg.attrs({
  width: "15px",
  height: "15px",
})`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

const StyledLine = styled.div`
  border-bottom: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
`;

const questionTypes = [
  "Krótka odpowiedź",
  "Długa odpowiedź",
  "jednokrotny wybór",
  "Wielokrotny wybór",
  "Zdjęcia",
];

const QuestionItem = ({
  onMouseMove = () => {},
  isProtege = false,
  indx = null,
  data = {},
}) => {
  const initialState = useSelector(
    (state) => state.questionaire.questionList[indx] ?? null
  );
  const dispatch = useDispatch();

  const [type, setType] = useState(null);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    setType(initialState.type ?? null);
    setQuestion(initialState.question ?? "");
  }, [initialState]);

  const BoxRef = useRef();
  const handleOnSelectChange = (val) => {
    console.log("handleOnSelect", indx, val);
    dispatch(
      updateQuestion({
        id: indx,
        type: questionTypes.indexOf(val),
      })
    );
  };

  const handleMouseMove = () => {
    const { right, top } = BoxRef.current.getBoundingClientRect();
    onMouseMove({ right, top, key: indx });
  };

  useEffect(() => {
    switch (type) {
      case 0:
        setAnswer(<ShortAnswer indx={indx} isDisabled={!isProtege} />);
        break;
      case 1:
        setAnswer(<LongAnswer indx={indx} isDisabled={!isProtege} />);
        break;
      case 2:
        setAnswer(
          <CheckBoxAnswer indx={indx} isDisabled={!isProtege} isRadio />
        );
        break;
      case 3:
        setAnswer(<CheckBoxAnswer indx={indx} isDisabled={!isProtege} />);
        break;
      case 4:
        setAnswer(<FileUpload indx={indx} isDisabled={!isProtege} />);
        break;

      default:
        setAnswer("Nieprawidłowa kategoria");
        break;
    }
  }, [type]);

  const handlerOnQuestionChange = (question) => {
    dispatch(
      updateQuestion({
        id: indx,
        question: question,
      })
    );
  };

  const handleOnClose = () => {
    dispatch(
      deleteQuestion({
        id: indx,
      })
    );
  };
  return (
    <CustomBox
      onMouseMove={handleMouseMove}
      ref={BoxRef}
      width="60vw"
      marginTop="20px"
      isRelative
      isPadding
    >
      {!isProtege && <StyledClose as={CloseSVG} onClick={handleOnClose} />}
      <Row isGap isOverflow>
        {!isProtege ? (
          <>
            <Input
              placeholder="Pytanie"
              width="60%"
              value={question}
              onValueChange={handlerOnQuestionChange}
            />
            <Select
              placeholder="typ"
              width="30%"
              data={questionTypes}
              initialValue={questionTypes[type ?? 0]}
              onChange={handleOnSelectChange}
            />
          </>
        ) : (
          question
        )}
      </Row>

      <StyledLine />
      {answer}
    </CustomBox>
  );
};

export default QuestionItem;
