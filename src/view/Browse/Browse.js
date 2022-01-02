import { useState } from 'react'

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
  const [filterSearch, setFilterSearch] = useState("");
  
  const handleClickNewProtege = () => {
    modalDispatch(changeModalState());
    modalDispatch(setModalData({ name: "newprotege"}));
  }

    return (
        <ReusableViewWrapper flexValue="1" isColumnLayout={true} >
          <Box height="100%" width="100%" isGap>

            <BoxHeader headerTitle="Przegląd Podopiecznych" />

            <Row justifyContent="space-between"  mediaQueryPoint="620px" isPadding isGap>
              <SearchInput
                placeholder="Szukaj..."
                mediaQueryPoint="620px"
                onSearch={setFilterSearch}

              />

              <Button
                onClick={handleClickNewProtege}
              >
                <StyledPlusSVG as={PlusSVG}/>
                Dodaj nowego
              </Button>

            </Row>

            <Row isPadding isOverflow>
                <ProtegeTable filterValue={filterSearch} ></ProtegeTable>
            </Row>

            <Row justifyContent="flex-end" isPadding>
              {/* <Pagination
                count={10}
                _active={4}
              /> */}
            </Row>

          </Box>

      </ReusableViewWrapper>
    )
}

export default Browse
