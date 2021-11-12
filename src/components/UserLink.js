import React from "react";
import styled from "styled-components";

const StyledUserLink = styled.div`
  display: flex;
  gap: 5px;
  color: ${({ customColor, theme }) => customColor ? theme.PrimarySix : theme.CharacterPrimaryInvers};
  cursor: pointer;
  align-items: center;
  min-width: ${({haveMinWidth}) => haveMinWidth ? '150px' : '0'};
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
`;

const UserLink = ({ imgSrc, userName, customColor, haveMinWidth }) => {
  return (
    <StyledUserLink customColor={customColor} haveMinWidth={haveMinWidth}>
      <Avatar src={imgSrc} alt="Avatar" />
      {userName}
    </StyledUserLink>
  );
};

export default UserLink;
