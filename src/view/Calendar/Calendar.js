import React from 'react'

import { Box, ReusableViewWrapper, Row } from "../../components/Reusable";
import BoxHeader from "../../components/Box/components/BoxHeader";
import WeekChanger from './components/WeekChanger';
import CalendarTable from './components/CalendarTable';
import PlusButton from '../../components/PlusButton';

const Calendar = () => {
    return (
        <ReusableViewWrapper isColumnLayout={true}>
          <Box width="100%" isGap>

            <BoxHeader headerTitle="Kalendarz" />

            <Row justifyContent="space-between"  mediaQueryPoint="620px" isPadding isGap justifyContent="center">
                <WeekChanger />

            </Row>

            <Row isPadding isOverflow>
                <CalendarTable />
            </Row>

            <PlusButton />
          </Box>

      </ReusableViewWrapper>
    )
}

export default Calendar
