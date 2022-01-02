import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeModalState } from "../../../features/AppSlice";
import { pushDiet } from "../../../features/protegeViewSlice";
import { getDiets, setProtegeDocInCollection } from "../../../firebase/dataFirebase";
import { Button, StyledTextarea } from "../../Reusable";
import Select from "../../Select";
import { ModalHeader } from "./ModalReusable";
import {useNotification} from './../../../hooks/useNotification'

const StyledwhiteFont = styled.div`
    color: white;
`;

const AddDietForProtege = ({
    id = null,
}) => {
  const dispatch = useDispatch();
  const notification = useNotification();
  const { userId } = useSelector(({user}) => user);

  const [diets, setDiets] = useState(null);
  const [dietIndex, setDietIndex] = useState(0);

  useEffect(async () => {
    const diets = await getDiets(userId);
    setDiets(diets.map(item => item.data))
  }, [])

  const handleOnChange = ({i}) => {
    setDietIndex(i);
  };

  const handleOnClick = async () => { 
      const resDiet = await setProtegeDocInCollection(id, diets[dietIndex], "diets"); 
      dispatch(pushDiet(resDiet));
      dispatch(changeModalState());
      notification.show("Dieta została przypisana")

  }

  return diets === null ? 'Ładowanie' : (
    <>
      <ModalHeader>Przypisz dietę</ModalHeader>
      <StyledwhiteFont>
        Wybierz zestaw dietetyczny który chcesz przypisać podopiecznemu 
      </StyledwhiteFont>
      <Select
        width="92%"
        data={diets.map(item => item.name)}
        initialValue={diets[0].name}
        onChangeWithIndex={handleOnChange}
      />
      <Button onClick={handleOnClick}>Dodaj</Button>
    </>
  );
};

export default AddDietForProtege;
