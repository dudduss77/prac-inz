import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useImageUpload from '../../../../hooks/useImageUpload';
import { ReactComponent  as FileUploadSVG } from './../../../../assets/upload.svg';
import { ReactComponent  as CloseSVG } from './../../../../assets/close.svg';
import { updateImg } from '../../../../features/QuestionaireSlice';

const StyledSVG = styled.svg.attrs({ 
    width: '100px',
    height: '100px',
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



const FileUpload = ({
    indx = null,
    isDisabled = false
}) => {
	const dispatch = useDispatch();
    const initialState = useSelector((state) => state?.questionaire.questionList[indx]?.img);
    const uploadRefDrag = useRef();
    const uploadRefClick = useRef();
    const uploadRefs = () => isDisabled ? ["", ""] : [uploadRefClick, uploadRefDrag]
    const [ imageData, deleteImage ] = useImageUpload(...uploadRefs(), initialState);

    useEffect(() => {
        dispatch(updateImg({ 
            id: indx,
            img: imageData,
        }))
    }, [imageData])

    return (
        <StyledContainer ref={uploadRefDrag}>
            <StyledSVG as={FileUploadSVG}  ref={uploadRefClick} />
            {imageData.map((item, i) => (
                <UploadedImgContainer id={i} key={i} >
                    <UploadedImg src={item} />
                    <StyledClose as={CloseSVG} onClick={() => deleteImage(i)} />
                </UploadedImgContainer>
            ))}
        </StyledContainer>
    )
}

export default FileUpload
