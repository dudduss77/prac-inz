import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../../../components/Input'
import { updateAnswer } from '../../../../features/QuestionaireSlice';

const LongAnswer = ({
    isDisabled=false,
    indx = null,
}) => {
    const answer = useSelector((state) => state?.questionaire[indx]?.answer ?? "");
    const [state, setstate] = useState("initialState");
    const dispatch = useDispatch();
    return (
        <>
            <Input value={answer} onValueChange={(answer) => dispatch(updateAnswer({ id: indx, answer}))} as="textarea" placeholder="Odpowiedź" width="100%" height="100px" isDisabled={isDisabled} isPadding/>
        </>
    )
}

export default LongAnswer
