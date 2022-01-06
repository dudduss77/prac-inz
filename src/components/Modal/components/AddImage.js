import { useRef, useEffect } from 'react'
import styled from 'styled-components';
import useImageUpload from '../../../hooks/useImageUpload';
import { ReactComponent  as FileUploadSVG } from './../../../assets/upload.svg';
import { ReactComponent  as CloseSVG } from './../../../assets/close.svg';
import { Button } from "../../Reusable";
import { ModalHeader } from "./ModalReusable";
import { changeModalState } from "./../../../features/AppSlice"
import { useDispatch, useSelector } from 'react-redux';
import {useNotification} from './../../../hooks/useNotification'
import { sendBodyPhoto, sendImage } from '../../../firebase/dataFirebase';

const StyledSVG = styled.svg.attrs({ 
  width: '50px',
  height: '50px',
})`
cursor: pointer;
transition: all 0.4s ease;
padding-right: 1rem;

&:hover {
    transform: scale(1.1);
}
`;

const StyledContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  width: 100%;
  min-height: 150px;
  flex-wrap: wrap;
  row-gap: 1rem;

`;

const UploadedImgContainer = styled.div`
  position: relative;
`;

const UploadedImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
`;

const StyledClose = styled.svg.attrs({ 
  width: '15px',
  height: '15px',
})`
  position: absolute;
  right: 20px;
  top: 5px;
  cursor: pointer;
`;

const AddImage = () => {
  const uploadRefDrag = useRef();
  const uploadRefClick = useRef();
  const [ imageData, deleteImage ] = useImageUpload(uploadRefClick, uploadRefDrag, []);
  const dispatch = useDispatch();
  const userId = useSelector(({user}) => user.userId);
  const notification = useNotification();

  const handleOnClick = async () => {
    if(imageData.length!=0) {
      const img = [];
      await Promise.all(imageData.map(async imgData => {
        const { id } = await sendImage(userId, { imgData });
        img.push(id);
      }));

      const res = await sendBodyPhoto(userId, { img });
      notification.show("Dodano nowe zdjęcia")
    } else 
      notification.show("Dodaj najpierw jakieś zdjęcie");
    dispatch(changeModalState())
  }

  return (
    <>
      <ModalHeader>Dodaj stan sylwetki</ModalHeader>
      <StyledContainer ref={uploadRefDrag}>
            <StyledSVG as={FileUploadSVG}  ref={uploadRefClick} />
            {imageData.map((item, i) => (
                <UploadedImgContainer id={i} key={i} >
                    <UploadedImg src={item} />
                    <StyledClose as={CloseSVG} onClick={() => deleteImage(i)} />
                </UploadedImgContainer>
            ))}
        </StyledContainer>
      <Button onClick={handleOnClick}>Dodaj</Button>
    </>
  );
};

export default AddImage;
