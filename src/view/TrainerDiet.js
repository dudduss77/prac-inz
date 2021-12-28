import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import AddTile from "../components/AddTile";
import { GridLayout } from "../components/Reusable";
import Tile from "../components/Tile";
import { selectUserId } from "../features/UserSlice";
import { getTrainerDiets } from "../firebase/dataFirebase";

const GridLayoutWithMedia = styled(GridLayout)`
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TrainerDiet = () => {
  const [dietsList, setDietList] = useState([]);
  const userId = useSelector(selectUserId);
  const navigate = useNavigate();
  useEffect(() => {
    if (userId) {
      getTrainerDiets(userId, setDietList);
    }
  }, [userId]);

  console.log(dietsList);
  return (
    <GridLayoutWithMedia isGap gridTemplateColumns="repeat(5, 1fr)">
      <AddTile addTileClick={() => navigate("/dietcreator")} />
      {dietsList.map((diet) => (
        <Tile
          tileHeader={diet.data.name}
          tileOpenClick={() => navigate(`/dietcreator/${diet.id}`)}
        />
      ))}
    </GridLayoutWithMedia>
  );
};

export default TrainerDiet;
