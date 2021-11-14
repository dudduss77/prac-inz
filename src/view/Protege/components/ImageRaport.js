import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Icon, Spacer } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import styled from "styled-components";
import placeholder from "../../../assets/raportPlaceHolder.jpg";

const ImageWrapper = styled.div`
  padding: 10px;
  height: calc(100% - 20px);
  max-width: min-content;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow-x: auto;
`;

const RaportImage = styled.img`
  width: 200px;
`;

const ImageRaport = () => {
  return (
    <Box width="60%">
      <BoxHeader>
        Raport zdjęć na dzień 11.12.2021
        <Spacer />
        <Icon>
          <FontAwesomeIcon icon="ellipsis-h" />
        </Icon>
      </BoxHeader>
      <ImageWrapper>
        <RaportImage src={placeholder} />
        <RaportImage src={placeholder} />
        <RaportImage src={placeholder} />
        <RaportImage src={placeholder} />
        <RaportImage src={placeholder} />
        <RaportImage src={placeholder} />
      </ImageWrapper>
    </Box>
  );
};

export default ImageRaport;
