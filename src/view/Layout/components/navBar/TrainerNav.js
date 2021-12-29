import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeModalState,
  selectScreenSize,
  setModalData,
} from "../../../../features/AppSlice";
import { changeOpenStateAction } from "../../../../features/AppSlice";
import NavBarLink from "./NavBarLink";
import NavBarLinkWithSublinks from "./NavBarLinkWithSublinks";

const TrainerNav = () => {
  const modalDispatch = useDispatch();
  const menuDispatch = useDispatch();
  const screenSize = useSelector(selectScreenSize);
  const ProtegesSublinks = [
    { path: "/trainer/browse", title: "Przeglądaj", icon: "file" },
    { path: "/trainer/questionnaire", title: "Ankieta", icon: "tasks" },
    {
      title: "Dodaj nowego podopiecznego",
      icon: "user-plus",
      customClick: () => {
        modalDispatch(changeModalState());
        modalDispatch(setModalData({ name: "newprotege" }));
        if (screenSize === "small") menuDispatch(changeOpenStateAction(false));
        if (screenSize === "mid") menuDispatch(changeOpenStateAction(true));
      },
    },
  ];
  return (
    <>
      <NavBarLink path="/trainer" icon="plus" title="Dashboard" />
      <NavBarLinkWithSublinks
        mainIcon="users"
        mainTitle="Podopieczni"
        subLinks={ProtegesSublinks}
      />
      <NavBarLink path="/trainer/calendar" icon="calendar" title="Kalendarz" />
      <NavBarLink path="/trainer/training" icon="running" title="Trening" />
      <NavBarLink path="/trainer/diet" icon="carrot" title="Diety" />
      <NavBarLink path="/trainer/messages" icon="envelope" title="Wiadomości" />
    </>
  );
};

export default TrainerNav;
