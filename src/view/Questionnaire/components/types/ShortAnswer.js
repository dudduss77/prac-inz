import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../../../components/Input'
import { updateAnswer } from '../../../../features/QuestionaireSlice';

const ShortAnswer = ({
    isDisabled=false,
    indx = null,
}) => {
    const answer = useSelector((state) => state?.questionaire.questionList[indx]?.answer ?? "");
    const [state, setstate] = useState("initialState");
    const dispatch = useDispatch();
    return (
        <>
            <Input value={answer} onValueChange={(answer) => dispatch(updateAnswer({ id: indx, answer}))} placeholder="Odpowiedź" isDisabled={isDisabled} isPadding/>
        </>
    )
}

export default ShortAnswer
