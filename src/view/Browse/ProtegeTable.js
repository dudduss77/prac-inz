import React from 'react'
import styled from 'styled-components';
import Checkbox from '../../components/Checkbox';

import { ReactComponent  as SortSVG } from './../../assets/sort.svg';
import { ReactComponent  as CircleMenuSVG } from './../../assets/circleMenu.svg';

import { StyledTable, StyledRow, StyledHeader, StyledCell } from './../../components/Table'
import UserShortBox from '../../components/userShortBox';
const ProtegeTable = () => {
  return (
    <StyledTable>
    <StyledRow>
      <StyledHeader>
          <Checkbox />
      </StyledHeader>     
      <StyledHeader>Podopieczny</StyledHeader>     
      <StyledHeader>Opis</StyledHeader>     
      <StyledHeader isSorted onSort={() => console.log('sortowanie')}>Online</StyledHeader>     
      <StyledHeader>Współpraca od</StyledHeader>     
      <StyledHeader>Współpraca do</StyledHeader>     
      <StyledHeader>Akcja</StyledHeader>     
    </StyledRow>

    <StyledRow>
      <StyledCell>
          <Checkbox />
      </StyledCell>     
      <StyledCell>
        <UserShortBox
          email="Biniox2@gmail.com"
          name="Jarosław Bińczyk"
          img="/static/media/user.a6143582.png"
        />
      </StyledCell>     
      <StyledCell>Vel cras auctor at tortor imperdiet amet id sed Vel cras auctor at tortor imperdiet amet id sed swdw...</StyledCell>     
      <StyledCell>2021-02-05 08:28:36</StyledCell>     
      <StyledCell>2021-02-05 08:28:36</StyledCell>     
      <StyledCell>2021-02-05 08:28:36</StyledCell>     
      <StyledCell>
          <CircleMenuSVG/>
      </StyledCell>     
    </StyledRow>

    <StyledRow>
      <StyledCell>
          <Checkbox />
      </StyledCell>     
      <StyledCell>Jarson</StyledCell>     
      <StyledCell>Vel cras auctor at tortor imperdiet amet id sed Vel cras auctor at tortor imperdiet amet id sed swdw...</StyledCell>     
      <StyledCell>2021-02-05 08:28:36</StyledCell>     
      <StyledCell>2021-02-05 08:28:36</StyledCell>     
      <StyledCell>2021-02-05 08:28:36</StyledCell>     
      <StyledCell>
          <CircleMenuSVG/>
      </StyledCell>     
    </StyledRow>

    <StyledRow>
      <StyledCell>
          <Checkbox />
      </StyledCell>     
      <StyledCell>Jarson</StyledCell>     
      <StyledCell>Vel cras auctor at tortor imperdiet amet id sed Vel cras auctor at tortor imperdiet amet id sed swdw...</StyledCell>     
      <StyledCell>2021-02-05 08:28:36</StyledCell>     
      <StyledCell>2021-02-05 08:28:36</StyledCell>     
      <StyledCell>2021-02-05 08:28:36</StyledCell>     
      <StyledCell>
          <CircleMenuSVG/>
      </StyledCell>     
    </StyledRow>

    <StyledRow>
      <StyledCell>
          <Checkbox />
      </StyledCell>     
      <StyledCell>Jarson</StyledCell>     
      <StyledCell>Vel cras auctor at tortor imperdiet amet id sed Vel cras auctor at tortor imperdiet amet id sed swdw...</StyledCell>     
      <StyledCell>2021-02-05 08:28:36</StyledCell>     
      <StyledCell>2021-02-05 08:28:36</StyledCell>     
      <StyledCell>2021-02-05 08:28:36</StyledCell>     
      <StyledCell>
          <CircleMenuSVG/>
      </StyledCell>     
    </StyledRow>
  </StyledTable>
  )
}

export default ProtegeTable

