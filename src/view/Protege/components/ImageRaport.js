import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, GridLayout, Icon, Spacer } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import styled from "styled-components";
import placeholder from "../../../assets/raportPlaceHolder.jpg";
import CircleMenu, { CircleMenuPosition } from "../../../components/CircleMenu";

import { getImage, getLastBodyPhotos } from "../../../firebase/dataFirebase";
import LoaderFullPage from "./../../../components/LoaderFullPage";
import { getDateddmmyyy } from "../../../helpers";
import ImagesList from "../../../components/ImagesList";
import { useParams } from "react-router-dom";

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
  // const { userId } = useSelector(({ user }) => user);
  const { id:protegeId } = useParams();
  const [bodyPhoto, setBodyPhoto] = useState(null);
  const [gettedImg, setGettedImg] = useState(null);
  const [imgIndex, setImgIndex] = useState(null);

  const fetchBodyPhoto = async () => {
    if(bodyPhoto != null) setGettedImg(null)
    if(gettedImg != null) setGettedImg(null);
    const res = await getLastBodyPhotos(protegeId);
    console.log(res)
    setBodyPhoto(res);
    setGettedImg(Array.from(Array(res.length), () => null));
  };

  const fetchImg = async (i) => {
    console.log("i", typeof i)
    console.log("american", bodyPhoto, gettedImg)
    console.log("i", typeof i)
    if(bodyPhoto[i] && gettedImg[i] == null) {
      const img = await Promise.all(bodyPhoto[i].data.img.map(async imageId => {
        const toReturn = await getImage(protegeId, imageId);
        return toReturn;
      }));
      setGettedImg(prev => prev.map((item, indx) => indx==i ? img : item));    
    }

  } 

  useEffect(fetchBodyPhoto, [])
  useEffect(() => {
    setImgIndex(0);
  }, [bodyPhoto])

  useEffect(() => {if( gettedImg != null && imgIndex != null && gettedImg[imgIndex] == null) fetchImg(imgIndex)}, [imgIndex, gettedImg])

  return  (
    <Box width="50%">
      <BoxHeader>
        Raport zdjęć na dzień { bodyPhoto != null && imgIndex != null && bodyPhoto[imgIndex] && getDateddmmyyy(new Date(bodyPhoto[imgIndex].data.time.seconds*1000))}
        <Spacer />
        <MenuWrapper>
          <CircleMenu>
            {bodyPhoto && bodyPhoto.map((item, i) => <CircleMenuPosition key={i} onClick={() => { setImgIndex(i) }} >{getDateddmmyyy(new Date(item.data.time.seconds*1000))}</CircleMenuPosition>)}
          </CircleMenu>
        </MenuWrapper>
      </BoxHeader>
        {
          bodyPhoto != null && bodyPhoto.length<1 ? 
          <Center>Brak raportów zdjęciowych</Center>
          :
          bodyPhoto == null ||  gettedImg == null || gettedImg[imgIndex] == null || imgIndex == null ?
          <LoaderFullPage /> 
           : <ImagesList data={gettedImg[imgIndex]} />
        }
      
    </Box>
  );
};

export default ImageRaport;
