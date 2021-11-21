import React from 'react'
import { Box, Column } from '../../../components/Reusable'
import BoxHeader from '../../../components/Box/components/BoxHeader'
import TrainingRaportItem from '../../../components/TrainingRaportItem'
const TrainingRaport = () => {
  return (
    <Box width="100%" minHeight="300px">
      <BoxHeader headerTitle="Raport Treningowy"/>
      <Column>
        <TrainingRaportItem raportTitle="Raport z dnia 05.11.2021" realizedStatus="entire"/>
        <TrainingRaportItem raportTitle="Raport z dnia 03.11.2021" realizedStatus="at-all"/>
        <TrainingRaportItem raportTitle="Raport z dnia 03.11.2021" realizedStatus="at-all"/>
        <TrainingRaportItem raportTitle="Raport z dnia 03.11.2021" realizedStatus="at-all"/>
        <TrainingRaportItem raportTitle="Raport z dnia 03.11.2021" realizedStatus="partly"/>
      </Column>
    </Box>
  )
}

export default TrainingRaport
