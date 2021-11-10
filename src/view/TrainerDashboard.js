import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const StyledTrainerDashboard = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.pageBackground};
`

const TrainerDashboard = () => {
  return (
    <StyledTrainerDashboard>
      TrainerDashboard
      <Button>Test</Button>
    </StyledTrainerDashboard>
  )
}

export default TrainerDashboard