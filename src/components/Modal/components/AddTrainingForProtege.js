import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeModalState } from "../../../features/AppSlice";
import { pushDiet, pushTraining } from "../../../features/protegeViewSlice";
import { getTrainings, setProtegeDocInCollection } from "../../../firebase/dataFirebase";
import { Button, StyledTextarea } from "../../Reusable";
import Select from "../../Select";
import { ModalHeader } from "./ModalReusable";
import {useNotification} from './../../../hooks/useNotification'

const StyledwhiteFont = styled.div`
    color: white;
`;

const AddTrainingForProtege = ({
    id = null,
}) => {
  const dispatch = useDispatch();
  const notification = useNotification();
  const { userId } = useSelector(({user}) => user);

  const [trainings, setTrainings] = useState(null);
  const [trainingIndex, setTrainingIndex] = useState(0);

  useEffect(async () => {
    const trainings = await getTrainings(userId);
    setTrainings(trainings.map(item => item.data))
  }, [])

  const handleOnChange = ({i}) => {
    setTrainingIndex(i);
  };

  const handleOnClick = async () => { 
      const res = await setProtegeDocInCollection(id, trainings[trainingIndex], "trainings"); 
      dispatch(pushTraining(res));
      dispatch(changeModalState());
      notification.show("Trening został przypisany")

  }

  return trainings === null ? 'Ładowanie' : (
    <>
      <ModalHeader>Przypisz Zestaw treningowy</ModalHeader>
      <StyledwhiteFont>
        Wybierz zestaw treningowy który chcesz przypisać podopiecznemu 
      </StyledwhiteFont>
      <Select
        width="92%"
        data={trainings.map(item => item.name)}
        initialValue={trainings[0].name}
        onChangeWithIndex={handleOnChange}
      />
      <Button onClick={handleOnClick}>Dodaj</Button>
    </>
  );
};

export default AddTrainingForProtege;
