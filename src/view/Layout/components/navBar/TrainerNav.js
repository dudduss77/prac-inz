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
    { path: "/browse", title: "Przeglądaj", icon: "file" },
    { path: "/questionnaire", title: "Ankieta", icon: "tasks" },
    {
      title: "Dodaj nowego podopiecznego",
      icon: "user-plus",
      customClick: () => {
        modalDispatch(changeModalState());
        modalDispatch(setModalData("newprotege"));
        if (screenSize === "small") menuDispatch(changeOpenStateAction(false));
        if (screenSize === "mid") menuDispatch(changeOpenStateAction(true));
      },
    },
  ];
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
