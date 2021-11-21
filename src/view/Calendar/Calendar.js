import React, { useState } from 'react'

import { Box, ReusableViewWrapper, Row } from "../../components/Reusable";
import BoxHeader from "../../components/Box/components/BoxHeader";
import WeekChanger from './components/WeekChanger';
import CalendarTable from './components/CalendarTable';
import PlusButton from '../../components/PlusButton';
import {
  changeModalState,
  setModalData,
} from "./../../features/AppSlice";


import { useDispatch } from "react-redux";

const Calendar = () => {

  const [date, setDate] = useState({ from: null, to: null});
  const [numberOfDays, setNumberOfDays] = useState(7);

  const modalDispatch = useDispatch();

  const handlerOnChangeDate = item => {
    setDate(item)
  }

  
  const handlerClickNewCalendarItem = () => {
    modalDispatch(changeModalState());
    modalDispatch(setModalData("newCalendar"));
  }

    return (
        <ReusableViewWrapper isColumnLayout={true}>
          <Box width="100%" isGap>

            <BoxHeader headerTitle="Kalendarz" />

            <Row  mediaQueryPoint="620px" isPadding isGap justifyContent="center">
                <WeekChanger numberOfDays={numberOfDays} onChange={handlerOnChangeDate}/>

            </Row>

            <Row isPadding isOverflow>
                <CalendarTable date={date} />
            </Row>

            <PlusButton onClick={handlerClickNewCalendarItem}/>
          </Box>

      </ReusableViewWrapper>
    )
}

export default Calendar
