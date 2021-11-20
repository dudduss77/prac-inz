import React from 'react'

import { Box, Button, ReusableViewWrapper, Row } from "../../components/Reusable";
import BoxHeader from "../../components/Box/components/BoxHeader";
import Pagination from '../../components/Pagination';
import SearchInput from '../../components/SearchInput';

import { useDispatch } from "react-redux";

import {
  changeModalState,
  setModalData,
} from "./../../features/AppSlice";


import { ReactComponent  as PlusSVG } from './../../assets/plus.svg';
import styled from 'styled-components';
import ProtegeTable from './ProtegeTable';

const StyledPlusSVG = styled.svg.attrs({ 
  width: '11px',
  height: '11px',
})`
  margin-right: 10px;
`;

const Browse = () => {
  const modalDispatch = useDispatch();
  
  const handleClickNewProtege = () => {
    modalDispatch(changeModalState());
    modalDispatch(setModalData("newprotege"));
  }
    return (
        <ReusableViewWrapper isColumnLayout={true}>
          <Box width="100%" isGap>

            <BoxHeader headerTitle="Przegląd Podopiecznych" />

            <Row justifyContent="space-between"  mediaQueryPoint="620px" isPadding isGap>
              <SearchInput
                placeholder="Szukaj..."
                mediaQueryPoint="620px"
              />

              <Button
                onClick={handleClickNewProtege}
              >
                <StyledPlusSVG as={PlusSVG}/>
                Dodaj nowego
              </Button>

            </Row>

            <Row isPadding isOverflow>
                <ProtegeTable></ProtegeTable>
            </Row>

            <Row justifyContent="flex-end" isPadding>
              <Pagination
                count={10}
                _active={4}
              />
            </Row>

          </Box>

      </ReusableViewWrapper>
    )
}

export default Browse
