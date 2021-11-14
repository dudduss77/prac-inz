import React from 'react'

import { Box, Button, Column, ReusableViewWrapper, Row } from "../../components/Reusable";
import BoxHeader from "../../components/Box/components/BoxHeader";
import Pagination from '../../components/Pagination';
import SearchInput from '../../components/SearchInput';

import { useDispatch, useSelector } from "react-redux";

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
  /* padding: 10px; */
  margin-right: 10px;
  /* transform: rotate(-90deg); */
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

            <Row justifyContent="space-between"  isPadding>
              <SearchInput
                placeholder="Szukaj..."
              />

              <Button
                onClick={handleClickNewProtege}
              >
                <StyledPlusSVG as={PlusSVG}/>
                Dodaj nowego
              </Button>

            </Row>

            <Row isPadding>
                <ProtegeTable></ProtegeTable>
            </Row>

            <Row justifyContent="flex-end" isPadding>
              <Pagination
                count={10}
                active={1}
              />
            </Row>

          </Box>

      </ReusableViewWrapper>
    )
}

export default Browse
