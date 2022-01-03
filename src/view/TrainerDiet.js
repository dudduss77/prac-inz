import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import AddTile from "../components/AddTile";
import LoaderFullPage from "../components/LoaderFullPage";
import { GridLayout } from "../components/Reusable";
import Tile from "../components/Tile";
import { resetDietState } from "../features/DietCreatorSlice";
import { selectUserId } from "../features/UserSlice";
import { getDiets } from "../firebase/dataFirebase";

const GridLayoutWithMedia = styled(GridLayout)`
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TrainerDiet = () => {
  const [dietsList, setDietList] = useState(null);
  const userId = useSelector(selectUserId);
  const navigate = useNavigate();
  const dietCreatorDispatch = useDispatch()

  useEffect(() => {
    dietCreatorDispatch(resetDietState())
  }, [])

  useEffect(() => {
    if (userId) {
      getDiets(userId, setDietList);
    }
  }, [userId]);

  return dietsList == null ? <LoaderFullPage /> : (
    <GridLayoutWithMedia isGap gridTemplateColumns="repeat(5, 1fr)">
      <AddTile addTileClick={() => navigate("/trainer/dietcreator")} />
      {dietsList.map((diet) => (
        <Tile
          key={diet.id}
          tileHeader={diet.data.name}
          tileOpenClick={() => navigate(`/trainer/dietcreator/${diet.id}`)}
        />
      ))}
    </GridLayoutWithMedia>
  );
};

export default TrainerDiet;
