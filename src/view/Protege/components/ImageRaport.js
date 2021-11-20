import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, GridLayout, Icon, Spacer } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import styled from "styled-components";
import placeholder from "../../../assets/raportPlaceHolder.jpg";

const RaportImage = styled.img`
  width: 100%;
`;

const GridLayoutWithMedia = styled(GridLayout)`
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ImageRaport = () => {
  return (
    <Box width="50%">
      <BoxHeader>
        Raport zdjęć na dzień 11.12.2021
        <Spacer />
        <Icon>
          <FontAwesomeIcon icon="ellipsis-h" />
        </Icon>
      </BoxHeader>
      <GridLayoutWithMedia isGap isPadding gridTemplateColumns="repeat(3, 1fr)">
        <RaportImage src={placeholder} />
        <RaportImage src={placeholder} />
        <RaportImage src={placeholder} />
        <RaportImage src={placeholder} />
        <RaportImage src={placeholder} />
        <RaportImage src={placeholder} />
      </GridLayoutWithMedia>
    </Box>
  );
};

export default ImageRaport;
