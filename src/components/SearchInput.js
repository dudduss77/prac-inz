import React from 'react'
import styled from 'styled-components';
import Input from './Input'
import { Button } from './Reusable';

import { ReactComponent as SearchSVG } from './../assets/search.svg'

const StyledSearchContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: ${({ mediaQueryPoint }) => mediaQueryPoint ?? '900px'}) {
      width: 100%
    }

`;

const SearchInput = ({
    mediaQueryPoint
}) => {
    return (
        <StyledSearchContainer mediaQueryPoint={mediaQueryPoint}>
            <Input
                placeholder="Szukaj..."
                mediaQueryPoint={mediaQueryPoint}
            />
            <Button isSquare>
                <SearchSVG/>
            </Button>
        </StyledSearchContainer>
    )
}

export default SearchInput
