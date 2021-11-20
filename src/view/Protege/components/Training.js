import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Spacer, Icon, GridLayout } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import AddTile from "../../../components/AddTile";
import Tile from "../../../components/Tile";
import styled from "styled-components";

const GridLayoutWithMedia = styled(GridLayout)`
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Training = () => {
  return (
    <Box width="50%">
      <BoxHeader>
        Trening
        <Spacer />
        <Icon>
          <FontAwesomeIcon icon="ellipsis-h" />
        </Icon>
      </BoxHeader>
      <GridLayoutWithMedia isGap isPadding gridTemplateColumns="repeat(3, 1fr)">
        <AddTile />
        <Tile tileHeader="Trening A" />
        <Tile tileHeader="Trening B" />
        <Tile tileHeader="Trening sportowy" />
      </GridLayoutWithMedia>
    </Box>
  );
};

export default Training;
