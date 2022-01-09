import React, { useEffect, useState } from "react";
import { Box, Column, Spacer } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import styled from "styled-components";
import UserLink from "../../../components/UserLink";
import avatar from "../../../assets/user.png";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectUserId } from "../../../features/UserSlice";
import { getAllProteges } from "../../../firebase/dataFirebase";
import LoaderFullPage from "../../../components/LoaderFullPage";

const Item = styled.div`
  width: calc(100% - 20px);
  display: flex;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.naturalSeven};
  align-items: center;
`;

const DateFormat = (val) => {
  var date = new Date(val * 1000);
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return (
    day + "." + month + "." + date.getFullYear() + " " + hour + ":" + minutes
  );
};

const NewProtege = () => {
  const userId = useSelector(selectUserId);
  const navigate = useNavigate();
  const [newProtege, setNewProtege] = useState(null);

  useEffect(() => {
    (async () => {
      const protege = await getAllProteges(userId);
      const sortAndLimit = protege
        .sort((a, b) => b.registerTime.seconds - a.registerTime.seconds)
        .slice(0, 10);
      setNewProtege(sortAndLimit);
      console.log(sortAndLimit);
    })();
  }, []);

  return (
    <Box width="40%" height="450px">
      <BoxHeader
        headerTitle="Nowi podopieczni"
        headerButtonTitle="Wszyscy"
        headerOnClick={() => {
          navigate("/trainer/browse");
        }}
      />
      <Column isGap isOverflow>
        {newProtege === null ? (
          <LoaderFullPage />
        ) : (
          newProtege.map((protege) => (
            <Item onClick={() => navigate(`/trainer/protege/${protege.id}`)}>
              <UserLink
                customColor
                haveMinWidth
                imgSrc={avatar}
                userName={protege.name}
              />
              <Spacer />
              <h4>{DateFormat(protege.registerTime.seconds)}</h4>
            </Item>
          ))
        )}
      </Column>
    </Box>
  );
};

export default NewProtege;
