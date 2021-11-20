import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import AddTile from "../components/AddTile";
import { GridLayout, ReusableViewWrapper } from "../components/Reusable";
import Tile from "../components/Tile";

const GridLayoutWithMedia = styled(GridLayout)`
@media screen and (max-width: 1400px) {
  grid-template-columns: repeat(3, 1fr);
}
@media screen and (max-width: 900px) {
  grid-template-columns: 1fr;
}
`;

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
