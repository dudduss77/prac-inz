import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import AddTile from "../components/AddTile";
import { GridLayout } from "../components/Reusable";
import Tile from "../components/Tile";

const GridLayoutWithMedia = styled(GridLayout)`
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TrainerTraining = () => {
  const navigate = useNavigate()
  return (
    <GridLayoutWithMedia isGap gridTemplateColumns="repeat(5, 1fr)">
      <AddTile addTileClick={() => navigate("/trainingcreator")} />
      <Tile
        tileHeader="Trening standard"
        tileOpenClick={() => navigate("/trainingcreator/1")}
      />
    </GridLayoutWithMedia>
  );
};

export default TrainerTraining;
