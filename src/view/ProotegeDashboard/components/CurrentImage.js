import React, { useEffect } from "react";
import styled from "styled-components";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import { Box, GridLayout } from "../../../components/Reusable";
import placeholder from "../../../assets/raportPlaceHolder.jpg";
import { useDispatch } from "react-redux";
import { changeModalState, setModalData } from "../../../features/AppSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import LoaderFullPage from "../../../components/LoaderFullPage";
import { getImage, getLastBodyPhoto } from "../../../firebase/dataFirebase";

const GridLayoutWithMedia = styled(GridLayout)`
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const RaportImage = styled.img`
    width: 10rem;
    border-radius: 8px;
    margin: 10px;
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  margin: 10px;
`;

const CurrentImage = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector(({ user }) => user);
  const [bodyPhoto, setBodyPhoto] = useState(null);
  const [gettedImg, setGettedImg] = useState(null);

  const fetchBodyPhoto = async () => {
    const res = await getLastBodyPhoto(userId);
    console.log(res)
    setBodyPhoto(res?.data);
  };

  const fetchImg = async () => {
    if(bodyPhoto === undefined) setGettedImg(undefined);
    if(bodyPhoto) {
      const img = await Promise.all(bodyPhoto.img.map(async imageId => {
        const toReturn = await getImage(userId, imageId);
        return toReturn;
      }));
      setGettedImg(img);      
    }

  }

  useEffect(fetchBodyPhoto, [])
  useEffect(fetchImg, [bodyPhoto])

  const addImage = () => {
    dispatch(changeModalState());
    dispatch(setModalData({ 
      name: "addimage", 
      config: { onSave: fetchBodyPhoto },
   }));
  };
  return (
    <Box width="40%">
      <BoxHeader
        headerTitle="Aktualny stan sylwetki"
        headerButtonTitle="Dodaj nowy stan"
        headerOnClick={() => addImage()}
      />
      {gettedImg === null ? (
        <LoaderFullPage />
      ) : gettedImg === undefined ? (
        <Center>Brak Zdjęć</Center>
      ) : gettedImg.map(({data}) => <RaportImage src={data.imgData} />)}
    </Box>
  );
};

export default CurrentImage;
