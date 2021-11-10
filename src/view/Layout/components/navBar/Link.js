import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavIcon, NavTitle } from "./Reusable";

const Link = ({ menuStatus, icon, title }) => {
  return (
    <>
      <NavIcon isMenuOpen={menuStatus}>
        <FontAwesomeIcon icon={icon} />
      </NavIcon>
      <NavTitle isMenuOpen={menuStatus}>{title}</NavTitle>
    </>
  );
};

export default Link;
