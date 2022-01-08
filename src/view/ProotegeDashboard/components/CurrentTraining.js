import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import LoaderFullPage from "../../../components/LoaderFullPage";
import { Box, NoDataHeader } from "../../../components/Reusable";
import {
  changeModalState,
  changeNotificationStateShow,
  setModalData,
} from "../../../features/AppSlice";
import { getLastTraining, updateTrainings } from "../../../firebase/dataFirebase";
import TrainingType from "../../TrainingCreator/components/TrainingType";

const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

const CurrentTraining = () => {
  const [currentTraining, setCurrentTraining] = useState(null);
  const dispatch = useDispatch();
  const notificationDispatch = useDispatch();
  const userId = useSelector(({user}) => user.userId)

  const handleChange = async () => {
    const actualDay = (currentTraining.actualDay == undefined ? 1 : currentTraining.actualDay+ 1) % currentTraining.data.trainingDays.length;
    setCurrentTraining(prev => ({
      ...prev,
      actualDay
    }));
    const res = await updateTrainings(userId, currentTraining.id, {actualDay});
    console.log(res);
  }

  const addTrainingRaport = () => {
    if (currentTraining) {
      dispatch(changeModalState());
      dispatch(setModalData({ name: "addtrainingraport", config: { onSave: handleChange} }));
      //Wysłanie raportu treningowego wiąże się z zakończeniem tego treningu i pokazaniem następnego
    } else notificationDispatch(changeNotificationStateShow("Brak treningu"));
  };

  useEffect(async item => {
    const res = await getLastTraining(userId)
    setCurrentTraining(res);
  }, [])
  return (
    <Box width="50%" minHeight="600px">
      <BoxHeader
        headerTitle="Trening do zrobienia"
        headerButtonTitle="Raport treningowy"
        headerOnClick={() => addTrainingRaport()}
      />
      <Wrapper>
        { currentTraining == null ? <LoaderFullPage /> :
        currentTraining == false ? <NoDataHeader>Brak treningu na dziś</NoDataHeader> : (
          currentTraining.data.trainingDays[currentTraining.actualDay ?? 0].types.map((type) => (
            <TrainingType
              key={type.name}
              typeId={type.id}
              trainingTypeName={type.name}
              trainingExercisesData={type.exercises}
            /> 
          ))
        )}
      </Wrapper>
    </Box>
  );
};

export default CurrentTraining;
