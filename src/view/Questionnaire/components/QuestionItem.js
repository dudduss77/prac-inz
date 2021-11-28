import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import Input from '../../../components/Input';
import { Box, Row } from '../../../components/Reusable'
import Select from '../../../components/Select';
import { ReactComponent  as CloseSVG } from './../../../assets/close.svg';
import ShortAnswer from './types/ShortAnswer';

const StyledClose = styled.svg.attrs({ 
  width: '15px',
  height: '15px',
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
]

const QuestionItem = ({
	onMouseMove = () => {},
	onClose = () => {},
	index = null,
	value = {},
	onValueChange = () => {}
}) => {
	const [type, setType] = useState(null);
	const [answer, setAnswer] = useState("");
	const BoxRef = useRef();
	const handleOnSelectChange = val => {
		// debugger
		onValueChange({
			...value,
			type: questionTypes.indexOf(val)
		}, index)

	}

	const handleMouseMove = () => {
		const {right, top } = BoxRef.current.getBoundingClientRect();
		onMouseMove({right, top, key: index})

	}

	useEffect(() => {
		switch(value.type) {
			case 0:
				setAnswer(<ShortAnswer />)
			break;

			default:
				setAnswer("")
			break;
		
		}
	}, [value.type])

	const handlerOnQuestionChange = question => {
		// debugger
		onValueChange({
			...value,
			question
		}, index)
	}
    return (
        <Box onMouseMove={handleMouseMove} ref={BoxRef} width="60vw" marginTop="20px" isRelative isPadding isOverflow>
          <StyledClose as={CloseSVG} onClick={() => onClose(index)} />
					<Row isGap isOverflow>
						<Input placeholder="Pytanie" width="60%" value={value.question} onValueChange={handlerOnQuestionChange} />
						<Select placeholder="typ" width="30%" data={questionTypes} initialValue={questionTypes[value.type]} onChange={handleOnSelectChange}/>
					</Row>

					<StyledLine />
					<Row>
						{answer}
					</Row>
        </Box>
    )
}

export default QuestionItem
