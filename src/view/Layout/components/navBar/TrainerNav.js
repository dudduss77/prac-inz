import React from "react";
import NavBarLink from "./NavBarLink";
import NavBarLinkWithSublinks from "./NavBarLinkWithSublinks";

const ProtegesSublinks = [
  { path: "/browse", title: "Przeglądaj", icon:"file" },
  { path: "/questionnaire", title: "Ankieta", icon:"tasks" },
  { path: "/newproteges", title: "Dodaj nowego podopiecznego", icon:"user-plus" },
];

const TrainerNav = () => {
  return (
    <>
      <NavBarLink path="/" icon="plus" title="Dashboard" />
      <NavBarLinkWithSublinks
        mainIcon="users"
        mainTitle="Podopieczni"
        subLinks={ProtegesSublinks}
      />
      <NavBarLink path="/calendar" icon="calendar" title="Kalendarz" />
      <NavBarLink path="/training" icon="running" title="Trening" />
      <NavBarLink path="/diet" icon="carrot" title="Diety" />
      <NavBarLink path="/messages" icon="envelope" title="Wiadomości" />
    </>
  );
};

export default TrainerNav;
