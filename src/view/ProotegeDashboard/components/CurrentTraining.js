import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import { Box, NoDataHeader } from "../../../components/Reusable";
import { changeModalState, setModalData } from "../../../features/AppSlice";
import TrainingType from "../../TrainingCreator/components/TrainingType";

const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

const CurrentTraining = () => {
  const [currentTraining, setCurrentTraining] = useState([
    // {
    //   id: 1,
    //   name: "Rozgrzewka",
    //   exercises: [
    //     {
    //       id: 1,
    //       name: "wyciskanie",
    //       series: [
    //         {
    //           id: 1,
    //           weight: 1,
    //           repeat: 10,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   name: "Trening właściwy",
    //   exercises: [],
    // },
    // {
    //   id: 3,
    //   name: "Kardio",
    //   exercises: [],
    // },
    // {
    //   id: 4,
    //   name: "Rozciąganie",
    //   exercises: [],
    // },
  ]);
  const modalDispatch = useDispatch();

  const addTrainingRaport = () => {
    modalDispatch(changeModalState());
    modalDispatch(setModalData({ name: "addtrainingraport" }));
    //Wysłanie raportu treningowego wiąże się z zakończeniem tego treningu i pokazaniem następnego
  };
  return (
    <Box width="50%" minHeight="600px">
      <BoxHeader
        headerTitle="Trening do zrobienia"
        headerButtonTitle="Raport treningowy"
        headerOnClick={() => addTrainingRaport()}
      />
      <Wrapper>
        {currentTraining.length > 0 ? (
          currentTraining.map((type) => (
            <TrainingType
              key={type.name}
              typeId={type.id}
              trainingTypeName={type.name}
              trainingExercisesData={type.exercises}
            />
          ))
        ) : (
          <NoDataHeader>Brak treningu na dziś</NoDataHeader>
        )}
      </Wrapper>
    </Box>
  );
};

export default CurrentTraining;
