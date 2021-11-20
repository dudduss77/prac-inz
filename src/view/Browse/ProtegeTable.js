import React, { useState } from 'react'
import styled from 'styled-components';
import Checkbox from '../../components/Checkbox';

import { ReactComponent  as SortSVG } from './../../assets/sort.svg';
import { ReactComponent  as CircleMenuSVG } from './../../assets/circleMenu.svg';

import { StyledTable, StyledRow, StyledHeader, StyledCell } from './../../components/Table'
import UserShortBox from '../../components/userShortBox';
import CircleMenu, { CircleMenuPosition, StyledContainer, StyledPosition } from '../../components/CircleMenu';

const StyledCircleMenuSVG = styled(CircleMenuSVG)`
  cursor: pointer;
`;

const ProtegeTable = () => {

  const [circleMenuVisible, setCircleMenuVisible] = useState(false)

  const handleCircleMenuToggle = () => setCircleMenuVisible(prev => !prev);

  const handlerEdit = (e) => console.log('handlerEdit');
  const handlerDiet = (e) => console.log('handlerDiet');
  const handlerMessage = (e) => console.log('handlerMessage');
  const handlerTrain = (e) => console.log('handlerTrain');
  return (
    <StyledTable>
    <StyledRow>
      <StyledHeader>
          <Checkbox />
      </StyledHeader>     
      <StyledHeader>Podopieczny</StyledHeader>     
      <StyledHeader showMinWidth="620px">Opis</StyledHeader>     
      <StyledHeader showMinWidth="900px" isSorted onSort={() => console.log('sortowanie')}>Online</StyledHeader>     
      <StyledHeader showMinWidth="900px">Współpraca od</StyledHeader>     
      <StyledHeader showMinWidth="900px">Współpraca do</StyledHeader>     
      <StyledHeader >Akcja</StyledHeader>     
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
      <StyledCell showMinWidth="620px" >Vel cras auctor at tortor imperdiet amet id sed Vel cras auctor at tortor imperdiet amet id sed swdw...</StyledCell>     
      <StyledCell showMinWidth="900px">2021-02-05 08:28:36</StyledCell>     
      <StyledCell showMinWidth="900px">2021-02-05 08:28:36</StyledCell>     
      <StyledCell showMinWidth="900px">2021-02-05 08:28:36</StyledCell>     
      <StyledCell>
          <CircleMenu >
            <CircleMenuPosition onClick={handlerEdit}>Edytuj</CircleMenuPosition>
            <CircleMenuPosition onClick={handlerDiet}>Dieta</CircleMenuPosition>
            <CircleMenuPosition onClick={handlerTrain}>Trening</CircleMenuPosition>
            <CircleMenuPosition onClick={handlerMessage}>Wiadomość</CircleMenuPosition>
        </CircleMenu>
      </StyledCell>     
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
      <StyledCell showMinWidth="620px" >Vel cras auctor at tortor imperdiet amet id sed Vel cras auctor at tortor imperdiet amet id sed swdw...</StyledCell>     
      <StyledCell showMinWidth="900px">2021-02-05 08:28:36</StyledCell>     
      <StyledCell showMinWidth="900px">2021-02-05 08:28:36</StyledCell>     
      <StyledCell showMinWidth="900px">2021-02-05 08:28:36</StyledCell>     
      <StyledCell>
          <CircleMenu >
            <CircleMenuPosition onClick={handlerEdit}>Edytuj</CircleMenuPosition>
            <CircleMenuPosition onClick={handlerDiet}>Dieta</CircleMenuPosition>
            <CircleMenuPosition onClick={handlerTrain}>Trening</CircleMenuPosition>
            <CircleMenuPosition onClick={handlerMessage}>Wiadomość</CircleMenuPosition>
        </CircleMenu>
      </StyledCell>     
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
      <StyledCell showMinWidth="620px" >Vel cras auctor at tortor imperdiet amet id sed Vel cras auctor at tortor imperdiet amet id sed swdw...</StyledCell>     
      <StyledCell showMinWidth="900px">2021-02-05 08:28:36</StyledCell>     
      <StyledCell showMinWidth="900px">2021-02-05 08:28:36</StyledCell>     
      <StyledCell showMinWidth="900px">2021-02-05 08:28:36</StyledCell>     
      <StyledCell>
          <CircleMenu >
            <CircleMenuPosition onClick={handlerEdit}>Edytuj</CircleMenuPosition>
            <CircleMenuPosition onClick={handlerDiet}>Dieta</CircleMenuPosition>
            <CircleMenuPosition onClick={handlerTrain}>Trening</CircleMenuPosition>
            <CircleMenuPosition onClick={handlerMessage}>Wiadomość</CircleMenuPosition>
        </CircleMenu>
      </StyledCell>     
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
      <StyledCell showMinWidth="620px" >Vel cras auctor at tortor imperdiet amet id sed Vel cras auctor at tortor imperdiet amet id sed swdw...</StyledCell>     
      <StyledCell showMinWidth="900px">2021-02-05 08:28:36</StyledCell>     
      <StyledCell showMinWidth="900px">2021-02-05 08:28:36</StyledCell>     
      <StyledCell showMinWidth="900px">2021-02-05 08:28:36</StyledCell>     
      <StyledCell>
          <CircleMenu >
            <CircleMenuPosition onClick={handlerEdit}>Edytuj</CircleMenuPosition>
            <CircleMenuPosition onClick={handlerDiet}>Dieta</CircleMenuPosition>
            <CircleMenuPosition onClick={handlerTrain}>Trening</CircleMenuPosition>
            <CircleMenuPosition onClick={handlerMessage}>Wiadomość</CircleMenuPosition>
        </CircleMenu>
      </StyledCell>     
    </StyledRow>
  
  </StyledTable>
  )
}

export default ProtegeTable

