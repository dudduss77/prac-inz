import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Checkbox from '../../../../components/Checkbox'
import { ClickedInput } from '../../../../components/Reusable'
import { addCheckBox, checkRadio, toggleChecked, updateCheckboxName } from '../../../../features/QuestionaireSlice';
import { useInput } from '../../../../hooks/useInput'
import { ReactComponent  as PlusSVG } from './../../../../assets/plusBold.svg';

const StyledSVG = styled.svg.attrs({ 
    width: '15px',
    height: '15px',
  })`
  cursor: pointer;
  transition: all 0.4s ease;
  padding-right: 10px;

  &:hover {
      transform: scale(1.1);
  }
`;

const StyledCheckBoxContainer = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;

`;

const StyledLabel = styled.div`
    padding-left: 0.5rem;

`;

const CheckBoxAnswer = ({
    isDisabled=false,
    indx = null,
    isRadio = false
}) => {
    const checkbox = useSelector((state) => state?.questionaire.questionList[indx]?.checkbox ?? []);
	const dispatch = useDispatch();

    const handleOnPlusClick = () => {
        dispatch(addCheckBox({ id: indx }))
    }

    const handleOnChange = (e, i) => {
        dispatch(updateCheckboxName({ 
            id: indx,
            checkboxId: i,
            name: e.target.value
        }))
    }
    const handleToggle = (e, i) => {
        if(!isRadio)
            dispatch(toggleChecked({ 
                id: indx,
                checkboxId: i
            }))
        else 
            dispatch(checkRadio({ 
                id: indx,
                checkboxId: i
            }))       
    }
    return (
        <>
            {checkbox.map(({name, checked}, i) => (
                <StyledCheckBoxContainer >
                    <Checkbox disabled={isDisabled} checked={checked} onChange={e => handleToggle(e, i)} />
                    {
                        isDisabled ? 
                        <ClickedInput value={name} key={i} onChange={e => handleOnChange(e, i)} primaryColor/> 
                        : 
                        (<StyledLabel>{name}</StyledLabel>)
                    }
                    
                </StyledCheckBoxContainer>
            ))}
            {
                isDisabled && 
                (
                <StyledCheckBoxContainer onClick={handleOnPlusClick}>
                    <StyledSVG as={PlusSVG}  /> Dodaj nową pozycje                
                </StyledCheckBoxContainer>
                )
            }
        </>
    )
}

export default CheckBoxAnswer
