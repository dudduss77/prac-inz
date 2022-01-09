import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import { getImage, getLastBodyPhotos } from "../../../firebase/dataFirebase";
import LoaderFullPage from "./../../../components/LoaderFullPage";
import { Box, Spacer, Icon } from "../../../components/Reusable";
import CircleMenu, { CircleMenuPosition } from "../../../components/CircleMenu";
import { getDateddmmyyy } from "../../../helpers";
import MeasurementList from "../../../components/MeasurementList"
import DropDownList from "../../../components/DropDownList";
import ImagesList from "../../../components/ImagesList";

const MenuWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
`;

const ImageRaport = () => {

  const dispatch = useDispatch();
  const { userId } = useSelector(({ user }) => user);
  const [bodyPhoto, setBodyPhoto] = useState(null);
  const [gettedImg, setGettedImg] = useState(null);

  const fetchBodyPhoto = async () => {
    if(bodyPhoto != null) setGettedImg(null)
    if(gettedImg != null) setGettedImg(null);
    const res = await getLastBodyPhotos(userId);
    console.log(res)
    setBodyPhoto(res.length <1 ? undefined : res);
    setGettedImg(Array.from(Array(res.length), () => null));
  };

  const fetchImg = async (i) => {
    if(bodyPhoto[i] && gettedImg[i] == null) {
      const img = await Promise.all(bodyPhoto[i].data.img.map(async imageId => {
        const toReturn = await getImage(userId, imageId);
        return toReturn;
      }));
      setGettedImg(prev => prev.map((item, indx) => indx==i ? img : item));    
    }

  }

  useEffect(fetchBodyPhoto, [])

  return bodyPhoto === null ||  gettedImg == null?
   <LoaderFullPage /> 
    : 
    bodyPhoto == undefined ? 
   <Center>Brak raportów zdjęciowych</Center>
    :
    bodyPhoto.map(({data}, i) => (
    <DropDownList onClick={() => fetchImg(i)} title={"Raport z dnia " + getDateddmmyyy(new Date(data.time.seconds*1000))} >
      <ImagesList data={gettedImg[i]} />
    </DropDownList>
  ));
};

export default ImageRaport;
