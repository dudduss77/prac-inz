import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Spacer, Icon, GridLayout } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import Tile from "../../../components/Tile";
import AddTile from "../../../components/AddTile";
import styled from "styled-components";
import { setModalData, changeModalState } from "../../../features/AppSlice";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../../firebase/dataFirebase";
import { putActualProtege } from "../../../features/protegeViewSlice";
import { useNavigate } from "react-router";

const GridLayoutWithMedia = styled(GridLayout)`
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Diet = () => {
  const dispatch = useDispatch();
  const { id, diets } = useSelector(({actualProtege}) => actualProtege);
  const navigate = useNavigate();

  useEffect(async () => {
    const diets = await getDiets(id);
    dispatch(putActualProtege({ diets }))
  }, [id])

  const handleClick = () => {
    dispatch(changeModalState());
    dispatch(setModalData({ 
      name: "addDietForProtege",
      id
    }));
  }

  const handleOnClickDiet = (idDiet) => {
    navigate(`/trainer/dietcreator/${idDiet}/${id}`)
  }
  return diets == undefined ? "Ładowanie" : (
    <Box width="50%">
      <BoxHeader>Dieta</BoxHeader>
      <GridLayoutWithMedia isGap isPadding gridTemplateColumns="repeat(3, 1fr)">
        <AddTile addTileClick={handleClick} />
        {diets.map(({ id, data }) => <Tile tileOpenClick={() => handleOnClickDiet(id)} id={id} tileHeader={data.name} tileSmallHeader={data.kcalValue} />)}
      </GridLayoutWithMedia>
    </Box>
  );
};

export default Diet;
