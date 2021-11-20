import React from "react";
import { Box, Column, Spacer } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import styled from "styled-components";
import UserLink from "../../../components/UserLink";
import avatar from "../../../assets/user.png";
import { useNavigate } from "react-router";

const Item = styled.div`
  width: calc(100% - 20px);
  display: flex;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.naturalSeven};
  align-items: center;
`;

const NewProtege = () => {
  const navigate = useNavigate();
  return (
    <Box width="40%" height="450px">
      <BoxHeader
        headerTitle="Nowi podopieczni"
        headerButtonTitle="Wszyscy"
        headerOnClick={() => {
          navigate("/browse");
        }}
      />
      <Column isOverflow>
        <Item>
          <UserLink
            customColor
            haveMinWidth
            imgSrc={avatar}
            userName="Testowy Jan"
          />
          <Spacer />
          <h4>2021-02-05 08:28:36</h4>
        </Item>
        <Item>
          <UserLink
            customColor
            haveMinWidth
            imgSrc={avatar}
            userName="Testowy Jan"
          />
          <Spacer />
          <h4>2021-02-05 08:28:36</h4>
        </Item>
        <Item>
          <UserLink
            customColor
            haveMinWidth
            imgSrc={avatar}
            userName="Testowy Jan"
          />
          <Spacer />
          <h4>2021-02-05 08:28:36</h4>
        </Item>
        <Item>
          <UserLink
            customColor
            haveMinWidth
            imgSrc={avatar}
            userName="Testowy Jan"
          />
          <Spacer />
          <h4>2021-02-05 08:28:36</h4>
        </Item>
        <Item>
          <UserLink
            customColor
            haveMinWidth
            imgSrc={avatar}
            userName="Testowy Jan"
          />
          <Spacer />
          <h4>2021-02-05 08:28:36</h4>
        </Item>
        <Item>
          <UserLink
            customColor
            haveMinWidth
            imgSrc={avatar}
            userName="Testowy Jan"
          />
          <Spacer />
          <h4>2021-02-05 08:28:36</h4>
        </Item>
        <Item>
          <UserLink
            customColor
            haveMinWidth
            imgSrc={avatar}
            userName="Testowy Jan"
          />
          <Spacer />
          <h4>2021-02-05 08:28:36</h4>
        </Item>
        <Item>
          <UserLink
            customColor
            haveMinWidth
            imgSrc={avatar}
            userName="Testowy Jan"
          />
          <Spacer />
          <h4>2021-02-05 08:28:36</h4>
        </Item>
        <Item>
          <UserLink
            customColor
            haveMinWidth
            imgSrc={avatar}
            userName="Testowy Jan"
          />
          <Spacer />
          <h4>2021-02-05 08:28:36</h4>
        </Item>
      </Column>
    </Box>
  );
};

export default NewProtege;
