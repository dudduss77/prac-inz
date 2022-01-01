import React, { useEffect } from "react";
import { Box, Spacer, Icon, GridLayout } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import AddTile from "../../../components/AddTile";
import Tile from "../../../components/Tile";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getTrainings } from "../../../firebase/dataFirebase";
import { putActualProtege } from "../../../features/protegeViewSlice";
import { changeModalState, setModalData } from "../../../features/AppSlice";

const GridLayoutWithMedia = styled(GridLayout)`
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Training = () => {
  const dispatch = useDispatch();
  const { id, trainings } = useSelector(({actualProtege}) => actualProtege);
  const navigate = useNavigate();

  useEffect(async () => {
    const trainings = await getTrainings(id);
    dispatch(putActualProtege({ trainings }))
  }, [id]);

  const handleOnClickTraining = (idTraining) => {
    navigate(`/trainer/trainingcreator/${idTraining}/${id}`)
  }

  const handleClickAdd = () => {
    dispatch(changeModalState());
    dispatch(setModalData({ 
      name: "addTrainingForProtege",
      id
    }));
  }
  return trainings == undefined ? "Ładowanie" : (
    <Box width="50%">
      <BoxHeader>Trening</BoxHeader>
      <GridLayoutWithMedia isGap isPadding gridTemplateColumns="repeat(3, 1fr)">
        <AddTile addTileClick={handleClickAdd} />
        {trainings.map(({ id, data }) => <Tile tileOpenClick={() => handleOnClickTraining(id)} id={id} tileHeader={data.name} />)}
      </GridLayoutWithMedia>
    </Box>
  );
};

export default Training;
