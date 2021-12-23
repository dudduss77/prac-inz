import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useUpload from './useUpload';
import { ReactComponent  as FileUploadSVG } from './../../../../assets/upload.svg';

const StyledSVG = styled.svg.attrs({ 
    width: '50px',
    height: '50px',
  })`
  cursor: pointer;
  transition: all 0.4s ease;
  padding-right: 10px;

  &:hover {
      transform: scale(1.1);
  }
`;

const StyledContainer = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;

`;

const FileUpload = ({
    indx = null,
}) => {
    const checkbox = useSelector((state) => state.questionaire[indx].checkbox ?? []);
	const dispatch = useDispatch();

    const uploadRefDrag = useRef();
    const uploadRefClick = useRef();
    const [ imageData ] = useUpload(uploadRefClick, uploadRefDrag);
    // useEffect(() => {
    //     console.log(uploadRefDrag.current)
    // }, [])

    return (
        <StyledContainer ref={uploadRefDrag}>
            <StyledSVG as={FileUploadSVG}  ref={uploadRefClick} />
        </StyledContainer>
    )
}

export default FileUpload
