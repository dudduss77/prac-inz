import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Checkbox from '../../../../components/Checkbox'
import { ClickedInput } from '../../../../components/Reusable'
import { addCheckBox, updateCheckboxName } from '../../../../features/QuestionaireSlice';
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

const CheckBoxAnswer = ({ 
    indx = null,
}) => {
    const checkbox = useSelector((state) => state.questionaire[indx].checkbox ?? []);
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
    return (
        <>
            {checkbox.map((item, i) => (
                <StyledCheckBoxContainer>
                    <Checkbox disabled/>
                    <ClickedInput value={item} key={i} onChange={e => handleOnChange(e, i)} primaryColor/> 
                </StyledCheckBoxContainer>
            ))}
            <StyledCheckBoxContainer onClick={handleOnPlusClick}>
                <StyledSVG as={PlusSVG}  /> Dodaj nową pozycje                
            </StyledCheckBoxContainer>


        </>
    )
}

export default CheckBoxAnswer
