import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Checkbox from '../../components/Checkbox';

import { ReactComponent  as SortSVG } from './../../assets/sort.svg';
import { ReactComponent  as CircleMenuSVG } from './../../assets/circleMenu.svg';

import { StyledTable, StyledRow, StyledHeader, StyledCell } from './../../components/Table'
import UserShortBox from '../../components/userShortBox';
import CircleMenu, { CircleMenuPosition, StyledContainer, StyledPosition } from '../../components/CircleMenu';
import { useSelector } from 'react-redux';
import {getAllProteges} from './../../firebase/dataFirebase'
import { getDateddmmyyy } from './../../helpers'
const StyledCircleMenuSVG = styled(CircleMenuSVG)`
  cursor: pointer;
`;

const ProtegeTable = ({
  filterValue = ""
}) => {

  const [circleMenuVisible, setCircleMenuVisible] = useState(false)

  const handleCircleMenuToggle = () => setCircleMenuVisible(prev => !prev);

  const handlerEdit = (e) => console.log('handlerEdit');
  const handlerDiet = (e) => console.log('handlerDiet');
  const handlerMessage = (e) => console.log('handlerMessage');
  const handlerTrain = (e) => console.log('handlerTrain');

  const user = useSelector(({user}) => user);

  const [proteges, setProteges] = useState([]);

  useEffect(async () => {
    // console.log('pobieram dane z firebase');
    // console.log('userId', user.userId);
    const proteges = await getAllProteges(user.userId);
    console.log(proteges)
    setProteges(proteges);
  }, [])
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

    {
      proteges.filter(item => 
        (new RegExp(filterValue, "i")).test(item.name) || 
        (new RegExp(filterValue, "i")).test(item.email))
        .map(({ id, email, name, payedFrom, onlineTime, payedTo, description }) => (    
      <StyledRow>
        <StyledCell>
            <Checkbox />
        </StyledCell>     
        <StyledCell>
          <UserShortBox
            email={email}
            name={name}
            id={id}
            img="/static/media/user.a6143582.png"
          />
        </StyledCell>     
        <StyledCell showMinWidth="620px" >{description}</StyledCell>     
        <StyledCell showMinWidth="900px">{getDateddmmyyy(new Date(onlineTime.seconds*1000))}</StyledCell>      
        <StyledCell showMinWidth="900px">{payedFrom ? getDateddmmyyy(new Date(payedFrom.seconds*1000)) : "-"}</StyledCell>     
        <StyledCell showMinWidth="900px">{payedTo ? getDateddmmyyy(new Date(payedTo.seconds*1000)) : "-"}</StyledCell>     
        <StyledCell>
            <CircleMenu >
              <CircleMenuPosition onClick={handlerEdit}>Edytuj</CircleMenuPosition>
              <CircleMenuPosition onClick={handlerDiet}>Dieta</CircleMenuPosition>
              <CircleMenuPosition onClick={handlerTrain}>Trening</CircleMenuPosition>
              <CircleMenuPosition onClick={handlerMessage}>Wiadomość</CircleMenuPosition>
          </CircleMenu>
        </StyledCell>     
      </StyledRow>
      
      ))
    }
  
  </StyledTable>
  )
}

export default ProtegeTable

