import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import styled from 'styled-components'
import { AbsoluteIconWrapper, GridLayout, Icon } from '../../../components/Reusable';
import placeholder from "../../../assets/raportPlaceHolder.jpg";

const StyleImageRaport = styled.div`
  padding: 10px;
  width: calc(100% - 20px);
  border-bottom: 2px solid ${({ theme }) => theme.naturalFive};
`;

const VisableHeader = styled.div`
  position: relative;
`;

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

const ImageRaport = ({raportTitle, imageData = []}) => {
  const [isOpen, setIsOpen] = useState(false)

  //Ładować dane z imageData
  return (
    <StyleImageRaport>
      <VisableHeader>
        {raportTitle}
        <AbsoluteIconWrapper right="10px">
          <Icon onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FontAwesomeIcon icon="chevron-up" />
            ) : (
              <FontAwesomeIcon icon="chevron-down" />
            )}
          </Icon>
        </AbsoluteIconWrapper>
      </VisableHeader>
      {isOpen && (
        <GridLayoutWithMedia isGap isPadding gridTemplateColumns="repeat(4, 1fr)">
          <RaportImage src={placeholder} />
          <RaportImage src={placeholder} />
          <RaportImage src={placeholder} />
          <RaportImage src={placeholder} />
          <RaportImage src={placeholder} />
        </GridLayoutWithMedia>
      )}
    </StyleImageRaport>
  )
}

export default ImageRaport
