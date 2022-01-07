import React from 'react';
import styled from 'styled-components';
import LoaderFullPage from './LoaderFullPage';

const RaportImage = styled.img`
    width: 10rem;
    border-radius: 8px;
    margin: 10px;
`;

const ImagesList = ({
    data = null
}) => {
    return data==null ? <LoaderFullPage /> : (
        <div>
            {data.map(({data}) => <RaportImage src={data.imgData} />)}
        </div>
    )
}

export default ImagesList
