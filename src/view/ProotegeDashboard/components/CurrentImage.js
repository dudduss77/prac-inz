import React from "react";
import styled from "styled-components";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import { Box, GridLayout } from "../../../components/Reusable";
import placeholder from "../../../assets/raportPlaceHolder.jpg";
import { useDispatch } from "react-redux";
import { changeModalState, setModalData } from "../../../features/AppSlice";

const GridLayoutWithMedia = styled(GridLayout)`
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const RaportImage = styled.img`
  width: 100%;
`;

const CurrentImage = () => {
  const modalDispatch = useDispatch();

  const addImage = () => {
    modalDispatch(changeModalState());
    modalDispatch(setModalData({ name: "addimage" }));
  };
  return (
    <Box width="40%">
      <BoxHeader
        headerTitle="Aktualny stan sylwetki"
        headerButtonTitle="Dodaj nowy stan"
        headerOnClick={() => addImage()}
      />
      <GridLayoutWithMedia isGap isPadding gridTemplateColumns="repeat(3, 1fr)">
        <RaportImage src={placeholder} />
        <RaportImage src={placeholder} />
        <RaportImage src={placeholder} />
        <RaportImage src={placeholder} />
      </GridLayoutWithMedia>
    </Box>
  );
};

export default CurrentImage;
