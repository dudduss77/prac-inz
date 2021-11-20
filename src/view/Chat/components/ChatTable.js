import React from 'react'



import { StyledTable, StyledRow, StyledHeader, StyledCell } from './../../../components/Table'
import UserShortBox from '../../../components/userShortBox';



const ProtegeTable = () => {

  return (
    <StyledTable>
    <StyledRow> 
      <StyledHeader>Podopieczny</StyledHeader>     
      <StyledHeader >Wiadomość</StyledHeader>       
      <StyledHeader isSorted onSort={() => console.log('sortowanie')}>Data</StyledHeader>       
    </StyledRow>

    <StyledRow>  
      <StyledCell>
        <UserShortBox
          email="Biniox2@gmail.com"
          name="Jarosław Bińczyk"
          img="/static/media/user.a6143582.png"
        />
      </StyledCell>     
      <StyledCell isBold>Vel cras auctor at tortor imperdiet amet id sed Vel cras auctor at tortor imperdiet amet id sed swdw...</StyledCell>     
      <StyledCell >2021-02-05 08:28:36</StyledCell>        
    </StyledRow>

    <StyledRow>  
      <StyledCell>
        <UserShortBox
          email="Biniox2@gmail.com"
          name="Jarosław Bińczyk"
          img="/static/media/user.a6143582.png"
        />
      </StyledCell>     
      <StyledCell >Vel cras auctor at tortor imperdiet amet id sed Vel cras auctor at tortor imperdiet amet id sed swdw...</StyledCell>     
      <StyledCell >2021-02-05 08:28:36</StyledCell>        
    </StyledRow>

    <StyledRow>  
      <StyledCell>
        <UserShortBox
          email="Biniox2@gmail.com"
          name="Jarosław Bińczyk"
          img="/static/media/user.a6143582.png"
        />
      </StyledCell>     
      <StyledCell >Vel cras auctor at tortor imperdiet amet id sed Vel cras auctor at tortor imperdiet amet id sed swdw...</StyledCell>     
      <StyledCell >2021-02-05 08:28:36</StyledCell>        
    </StyledRow>

    <StyledRow>  
      <StyledCell>
        <UserShortBox
          email="Biniox2@gmail.com"
          name="Jarosław Bińczyk"
          img="/static/media/user.a6143582.png"
        />
      </StyledCell>     
      <StyledCell >Vel cras auctor at tortor imperdiet amet id sed Vel cras auctor at tortor imperdiet amet id sed swdw...</StyledCell>     
      <StyledCell >2021-02-05 08:28:36</StyledCell>        
    </StyledRow>

    <StyledRow>  
      <StyledCell>
        <UserShortBox
          email="Biniox2@gmail.com"
          name="Jarosław Bińczyk"
          img="/static/media/user.a6143582.png"
        />
      </StyledCell>     
      <StyledCell >Vel cras auctor at tortor imperdiet amet id sed Vel cras auctor at tortor imperdiet amet id sed swdw...</StyledCell>     
      <StyledCell >2021-02-05 08:28:36</StyledCell>        
    </StyledRow>

 
  </StyledTable>
  )
}

export default ProtegeTable

