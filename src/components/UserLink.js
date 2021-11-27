import React from "react";
import styled from "styled-components";
import avatar from "../assets/user.png";

const StyledUserLink = styled.div`
  display: flex;
  gap: 5px;
  color: ${({ customColor, theme }) =>
    customColor ? theme.PrimarySix : theme.CharacterPrimaryInvers};
  cursor: pointer;
  align-items: center;
  min-width: ${({ haveMinWidth }) => (haveMinWidth ? "150px" : "0")};
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
`;

const UserLink = ({ imgSrc = avatar, userName, customColor, haveMinWidth }) => {
  return (
    <StyledUserLink customColor={customColor} haveMinWidth={haveMinWidth}>
      <Avatar src={imgSrc} alt="Avatar" />
      {userName}
    </StyledUserLink>
  );
};

export default UserLink;
