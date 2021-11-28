import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Spacer, Icon, GridLayout } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import Tile from "../../../components/Tile";
import AddTile from "../../../components/AddTile";
import styled from "styled-components";

const GridLayoutWithMedia = styled(GridLayout)`
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Diet = () => {
  return (
    <Box width="50%">
      <BoxHeader>Dieta</BoxHeader>
      <GridLayoutWithMedia isGap isPadding gridTemplateColumns="repeat(3, 1fr)">
        <AddTile />
        <Tile tileHeader="Dieta standard" />
        <Tile tileHeader="Dieta standard" tileSmallHeader="2000kcal" />
        <Tile tileHeader="Dieta sportowa" tileSmallHeader="3000kcal" />
      </GridLayoutWithMedia>
    </Box>
  );
};

export default Diet;
