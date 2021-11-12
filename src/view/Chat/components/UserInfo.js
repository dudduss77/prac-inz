import React from "react";
import styled from "styled-components";

const StyledUserInfo = styled.div`
  width: calc(250px - 20px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background: ${({ theme }) => theme.naturalOne};
  border-right: 1px solid ${({ theme }) => theme.naturalSeven};
  h5 {
    width: 100%;
    text-align: center;
  }
`;

const UserInfo = () => {
  return (
    <StyledUserInfo>
      <h5>Podstawowe informacje</h5>
      Do uzupełnienia
    </StyledUserInfo>
  );
};

export default UserInfo;
