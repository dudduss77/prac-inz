import React from 'react'

import { Box, ReusableViewWrapper, Row } from "../../components/Reusable";
import BoxHeader from "../../components/Box/components/BoxHeader";
import WeekChanger from './components/WeekChanger';


const Calendar = () => {
    return (
        <ReusableViewWrapper isColumnLayout={true}>
          <Box width="100%" isGap>

            <BoxHeader headerTitle="Kalendarz" />

            <Row justifyContent="space-between"  mediaQueryPoint="620px" isPadding isGap>
                <WeekChanger />

            </Row>

            <Row isPadding isOverflow>
                tabelka
            </Row>
          </Box>

      </ReusableViewWrapper>
    )
}

export default Calendar
