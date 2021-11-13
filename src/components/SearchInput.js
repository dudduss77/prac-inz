import React from 'react'
import styled from 'styled-components';
import Input from './Input'
import { Button } from './Reusable';

import { ReactComponent as SearchSVG } from './../assets/search.svg'

const StyledSearchContainer = styled.div`
    display: flex;
    flex-direction: row;

`;
const SearchInput = () => {
    return (
        <StyledSearchContainer>
            <Input
                placeholder="Szukaj..."
            />
            <Button isSquare>
                <SearchSVG/>
            </Button>
        </StyledSearchContainer>
    )
}

export default SearchInput
