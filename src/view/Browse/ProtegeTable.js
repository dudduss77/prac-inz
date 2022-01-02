import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Checkbox from "../../components/Checkbox";

import { ReactComponent as SortSVG } from "./../../assets/sort.svg";
import { ReactComponent as CircleMenuSVG } from "./../../assets/circleMenu.svg";

import {
  StyledTable,
  StyledRow,
  StyledHeader,
  StyledCell,
} from "./../../components/Table";
import UserShortBox from "../../components/userShortBox";
import CircleMenu, {
  CircleMenuPosition,
  StyledContainer,
  StyledPosition,
} from "../../components/CircleMenu";
import { useSelector } from "react-redux";
import {
  createNewMessageDoc,
  getAllProteges,
  getMessageId,
} from "./../../firebase/dataFirebase";
import { getDateddmmyyy } from "./../../helpers";
import { useNavigate } from "react-router-dom";
import LoaderFullPage from "../../components/LoaderFullPage";
const StyledCircleMenuSVG = styled(CircleMenuSVG)`
  cursor: pointer;
`;

const ProtegeTable = ({ filterValue = "" }) => {
  const navigate = useNavigate();
  const [circleMenuVisible, setCircleMenuVisible] = useState(false);
  const [messageId, setMessageId] = useState(null);
  const handleCircleMenuToggle = () => setCircleMenuVisible((prev) => !prev);

  useEffect(() => {
    if (messageId) navigate(`/trainer/message/${messageId}`);
  }, [messageId]);

  const handlerEdit = (e) => console.log("handlerEdit");
  const handlerDiet = (e) => console.log("handlerDiet");
  const handlerMessage = async (id) => {
    await getMessageId(id, setMessageId);
  };
  const handlerTrain = (e) => console.log("handlerTrain");

  const user = useSelector(({ user }) => user);

  const [proteges, setProteges] = useState(null);

  useEffect(() => {
    // console.log('pobieram dane z firebase');
    // console.log('userId', user.userId);
    (async () => {
      const proteges = await getAllProteges(user.userId);
      console.log(proteges);
      setProteges(proteges);
    })();
  }, []);
  return (
    <StyledTable>
      <StyledRow>
        <StyledHeader>
          <Checkbox />
        </StyledHeader>
        <StyledHeader>Podopieczny</StyledHeader>
        <StyledHeader showMinWidth="620px">Opis</StyledHeader>
        <StyledHeader
          showMinWidth="900px"
          isSorted
          onSort={() => console.log("sortowanie")}
        >
          Online
        </StyledHeader>
        <StyledHeader showMinWidth="900px">Współpraca od</StyledHeader>
        <StyledHeader showMinWidth="900px">Współpraca do</StyledHeader>
        <StyledHeader>Akcja</StyledHeader>
      </StyledRow>

      {proteges!=null ? <LoaderFullPage />: proteges
        .filter(
          (item) =>
            new RegExp(filterValue, "i").test(item.name) ||
            new RegExp(filterValue, "i").test(item.email)
        )
        .map(
          ({
            id,
            email,
            name,
            payedFrom,
            onlineTime,
            payedTo,
            description,
          }) => (
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
              <StyledCell showMinWidth="620px">{description}</StyledCell>
              <StyledCell showMinWidth="900px">
                {getDateddmmyyy(new Date(onlineTime.seconds * 1000))}
              </StyledCell>
              <StyledCell showMinWidth="900px">
                {payedFrom
                  ? getDateddmmyyy(new Date(payedFrom.seconds * 1000))
                  : "-"}
              </StyledCell>
              <StyledCell showMinWidth="900px">
                {payedTo
                  ? getDateddmmyyy(new Date(payedTo.seconds * 1000))
                  : "-"}
              </StyledCell>
              <StyledCell>
                <CircleMenu>
                  <CircleMenuPosition onClick={handlerEdit}>
                    Edytuj
                  </CircleMenuPosition>
                  <CircleMenuPosition onClick={handlerDiet}>
                    Dieta
                  </CircleMenuPosition>
                  <CircleMenuPosition onClick={handlerTrain}>
                    Trening
                  </CircleMenuPosition>
                  <CircleMenuPosition onClick={() => handlerMessage(id)}>
                    Wiadomość
                  </CircleMenuPosition>
                </CircleMenu>
              </StyledCell>
            </StyledRow>
          )
        )}
    </StyledTable>
  );
};

export default ProtegeTable;
