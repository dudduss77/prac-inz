import React from "react";

import {
  StyledTable,
  StyledRow,
  StyledHeader,
  StyledCell,
} from "./../../../components/Table";
import UserShortBox from "../../../components/userShortBox";
import { useNavigate } from "react-router-dom";

const ProtegeTable = ({ data = [] }) => {
  const navigate = useNavigate();
  const DateFormat = (value) => {
    var date = new Date(value);
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return (
      date.getDate() +
      "." +
      (date.getMonth() + 1) +
      "." +
      date.getFullYear() +
      " " +
      hour +
      ":" +
      minutes
    );
  };
  return (
    <StyledTable>
      <StyledRow>
        <StyledHeader>Podopieczny</StyledHeader>
        <StyledHeader>Wiadomość</StyledHeader>
        <StyledHeader isSorted onSort={() => console.log("sortowanie")}>
          Data
        </StyledHeader>
      </StyledRow>
      {data.map((message) => (
        <StyledRow
          onClick={(evt) => navigate(`/trainer/message/${message.id}`)}
        >
          <StyledCell>
            <UserShortBox
              id={message.protegeId}
              email={message.email}
              name={message.username}
              img="/static/media/user.a6143582.png"
            />
          </StyledCell>
          <StyledCell isBold={!message.isRead}>{message.content}</StyledCell>
          <StyledCell>{DateFormat(message.messageDate)}</StyledCell>
        </StyledRow>
      ))}

      {/* <StyledRow>  
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
    </StyledRow> */}
    </StyledTable>
  );
};

export default ProtegeTable;
