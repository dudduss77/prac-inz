import React from "react";
import NavBarLink from "./NavBarLink";

const ProtegeNav = () => {
  return (
    <>
      <NavBarLink path="/protege" icon="plus" title="Dashboard" />
      <NavBarLink path="/protege/calendar" icon="calendar" title="Kalendarz" />
      <NavBarLink path="/protege/diet" icon="carrot" title="Dieta" />
      <NavBarLink path="/protege/training" icon="running" title="Trening" />
      <NavBarLink path="/protege/message" icon="envelope" title="Wiadomości" />
      <NavBarLink path="/protege/history" icon="history" title="Historia" />
    </>
  );
};

export default ProtegeNav;
