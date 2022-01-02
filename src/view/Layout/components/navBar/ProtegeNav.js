import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUserId } from "../../../../features/UserSlice";
import { getMessageId } from "../../../../firebase/dataFirebase";
import NavBarLink from "./NavBarLink";

const ProtegeNav = () => {
  const userId = useSelector(selectUserId)
  const [messageId, setMessageId] = useState();

  useEffect(() => {
    (async () => {
      getMessageId(userId, setMessageId);
    })()
  }, [])


  return (
    <>
      <NavBarLink path="/protege" icon="plus" title="Dashboard" />
      <NavBarLink path="/protege/calendar" icon="calendar" title="Kalendarz" />
      <NavBarLink path="/protege/diet" icon="carrot" title="Dieta" />
      <NavBarLink path="/protege/training" icon="running" title="Trening" />
      <NavBarLink path={`/protege/message/${messageId}`} icon="envelope" title="Wiadomości" />
      <NavBarLink path="/protege/history" icon="history" title="Historia" />
    </>
  );
};

export default ProtegeNav;
