import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  ReusableViewWrapper,
  Row,
} from "../../components/Reusable";
import BoxHeader from "../../components/Box/components/BoxHeader";
import Pagination from "../../components/Pagination";
import SearchInput from "../../components/SearchInput";

import { useDispatch, useSelector } from "react-redux";

import { changeModalState, setModalData } from "./../../features/AppSlice";

import { ReactComponent as PlusSVG } from "./../../assets/plus.svg";
import styled from "styled-components";
import ChatTable from "./components/ChatTable";
import {
  getMessagesArray,
  getProtegeEmail,
  getProtegeName,
} from "../../firebase/dataFirebase";
import { selectUserId } from "../../features/UserSlice";
import { useInput } from "../../hooks/useInput";

const StyledPlusSVG = styled.svg.attrs({
  width: "11px",
  height: "11px",
})`
  margin-right: 10px;
`;

const BrowseChat = () => {
  const userId = useSelector(selectUserId);
  const modalDispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const [messagesData, setMessagesData] = useState([]);
  const [messages, setMessages] = useState([]);
  const [paginateValue, setPaginateValue] = useState(1);
  const maxItem = 5;

  useEffect(() => {
    getMessagesArray(userId, setMessagesData, true);
  }, []);

  useEffect(() => {
    if (messagesData) {
      messagesData.forEach(async (message) => {
        const username = await getProtegeName(message.data.protegeId);
        const email = await getProtegeEmail(message.data.protegeId);
        let lastMessage =
          message.data.messages[message.data.messages.length - 1];

        const arr = {
          id: message.id,
          protegeId: message.data.protegeId,
          isRead: lastMessage.from === userId,
          username: username,
          content: lastMessage.content,
          messageDate: lastMessage.date,
          email: email,
        };

        setMessages((old) => [...old, arr]);
      });
    }
  }, [messagesData]);

  const handleClickNewProtege = () => {
    modalDispatch(changeModalState());
    modalDispatch(setModalData("newprotege"));
  };

  console.log(messages);
  return (
    <ReusableViewWrapper isColumnLayout={true} flexValue="1">
      <Box width="100%" height="100%" isGap>
        <BoxHeader headerTitle="Wiadomo??ci" />

        <Row
          justifyContent="space-between"
          mediaQueryPoint="620px"
          isPadding
          isGap
        >
          <SearchInput
            onSearch={setSearchValue}
            placeholder="Szukaj..."
            mediaQueryPoint="620px"
          />
        </Row>

        <Row isPadding isOverflow>
          <ChatTable
            data={messages
              .filter(
                (item) =>
                  new RegExp(searchValue, "i").test(item.username) ||
                  new RegExp(searchValue, "i").test(item.email)
              )
              .slice(maxItem * (paginateValue - 1), maxItem * paginateValue)}
          ></ChatTable>
        </Row>

        <Row justifyContent="flex-end" isPadding>
          <Pagination
            count={
              parseInt(messages.length / maxItem) > 0
                ? parseInt(messages.length / maxItem)
                : 1
            }
            _active={paginateValue}
            onChange={setPaginateValue}
          />
        </Row>
      </Box>
    </ReusableViewWrapper>
  );
};

export default BrowseChat;
