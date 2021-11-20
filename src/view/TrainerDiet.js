import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import AddTile from "../components/AddTile";
import { GridLayout, ReusableViewWrapper } from "../components/Reusable";
import Tile from "../components/Tile";

const GridLayoutWithMedia = styled(GridLayout)``;

const TrainerDiet = () => {
  const navigate = useNavigate();
  return (
    <GridLayoutWithMedia isGap gridTemplateColumns="repeat(5, 1fr)">
      <AddTile addTileClick={() => navigate("/dietcreator")} />
      <Tile tileHeader="Dieta standard" />
    </GridLayoutWithMedia>
  );
};

export default TrainerDiet;
