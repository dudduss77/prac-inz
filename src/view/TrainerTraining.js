import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import AddTile from "../components/AddTile";
import { GridLayout } from "../components/Reusable";
import Tile from "../components/Tile";
import { resetTrainingState } from "../features/TrainingCreatorSlice";
import { selectUserId } from "../features/UserSlice";
import { getTrainerTrainings } from "../firebase/dataFirebase";

const GridLayoutWithMedia = styled(GridLayout)`
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TrainerTraining = () => {
  const [trainingDiet, setTrainingDiet] = useState([]);
  const userId = useSelector(selectUserId);
  const navigate = useNavigate();
  const trainingCreatorDispatch = useDispatch()

  useEffect(() => {
    trainingCreatorDispatch(resetTrainingState())
  }, [])

  useEffect(() => {
    if (userId) {
      getTrainerTrainings(userId, setTrainingDiet);
    }
  }, [userId]);

  return (
    <GridLayoutWithMedia isGap gridTemplateColumns="repeat(5, 1fr)">
      <AddTile addTileClick={() => navigate("/trainer/trainingcreator")} />
      {trainingDiet.map((trainig) => (
        <Tile
          key={trainig.id}
          tileHeader={trainig.data.name}
          tileOpenClick={() => navigate(`/trainer/trainingcreator/${trainig.id}`)}
        />
      ))}
    </GridLayoutWithMedia>
  );
};

export default TrainerTraining;
