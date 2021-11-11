import React from "react";
import NavBarLink from "./NavBarLink";

const ProtegeNav = () => {
  return (
    <>
      <NavBarLink path="/" icon="plus" title="Dashboard" />
      <NavBarLink path="/calendar" icon="calendar" title="Kalendarz" />
      <NavBarLink path="/diet" icon="carrot" title="Dieta" />
      <NavBarLink path="/training" icon="running" title="Trening" />
      <NavBarLink path="/messages" icon="envelope" title="Wiadomości" />
      <NavBarLink path="/history" icon="plus" title="Historia" />
    </>
  );
};

export default ProtegeNav;
