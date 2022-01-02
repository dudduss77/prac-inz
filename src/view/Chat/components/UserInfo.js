import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { Button } from "../../../components/Reusable";
import Tile from "../../../components/Tile";
import UserLink from "../../../components/UserLink";
import { putActualProtege } from "../../../features/protegeViewSlice";
import {
  getDiets,
  getProtegeLastDiet,
  getProtegeLastTraining,
  getUserData,
} from "../../../firebase/dataFirebase";

const StyledUserInfo = styled.div`
  width: calc(250px - 20px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background: ${({ theme }) => theme.naturalOne};
  border-right: 1px solid ${({ theme }) => theme.naturalSeven};
  h4 {
    width: 100%;
    text-align: center;
    font-weight: 700;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  h4 {
    text-align: left;
    font-weight: 400;
  }
`;

const UserInfo = ({ data }) => {
  const navigate = useNavigate();
  const [lastDiet, setLastDiet] = useState({});
  const [lastTraining, setLastTraining] = useState({});
  useEffect(() => {
    (async () => {
      if (data.id) {
        await getProtegeLastDiet(data.id, setLastDiet);
        await getProtegeLastTraining(data.id, setLastTraining);
      }
    })();
  }, [data.id]);

  console.log(lastTraining);
  return (
    <StyledUserInfo>
      <h4>Podstawowe informacje</h4>
      <UserLink userName={data.protegeName} customColor />
      <h4>Dieta</h4>
      {lastDiet.data && (
        <Tile
          tileHeight="75px"
          tileHeader={lastDiet.data.name}
          tileOpenClick={() =>
            navigate(`/trainer/dietcreator/${lastDiet.id}/${data.id}`)
          }
        />
      )}

      <h4>Trening</h4>
      {lastTraining.data && (
        <Tile
          tileHeight="75px"
          tileHeader={lastTraining.data.name}
          tileOpenClick={() =>
            navigate(`/trainer/trainingcreator/${lastTraining.id}/${data.id}`)
          }
        />
      )}
      <h4>Ostatnie pomiary</h4>
      <ContentWrapper>
        <h4>Masa ciała: 100kg</h4>
        <h4>Obwód klatki: 70cm</h4>
        <h4>Obwód bioder: 70cm</h4>
        <h4>Obwód talii: 70cm</h4>
        <h4>Obwód uda: 70cm</h4>
        <h4>Obwód ramienia: 70cm</h4>
      </ContentWrapper>
      <Button onClick={() => navigate(`/trainer/protege/${data.id}`)}>
        Przejdź do profilu
      </Button>
    </StyledUserInfo>
  );
};

export default UserInfo;
