import React from "react";
import styled from "styled-components";

const StyledUserLink = styled.div`
  display: flex;
  gap: 5px;
  color: ${({ theme }) => theme.CharacterPrimaryInvers};
  cursor: pointer;
  align-items: center;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
`;

const UserLink = ({ imgSrc, userName }) => {
  return (
    <StyledUserLink>
      <Avatar src={imgSrc} alt="Avatar" />
      {userName}
    </StyledUserLink>
  );
};

export default UserLink;
