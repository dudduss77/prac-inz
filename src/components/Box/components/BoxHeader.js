import React from "react";
import styled from "styled-components";
import {Button, Spacer} from "../..//Reusable";

const StyledBoxHeader = styled.div`
  width: calc(100% - 20px);
  padding: 0 10px;
  min-height: 35px;
  max-height: 35px;
  background: ${({ theme }) => theme.PrimaryFour};
  color: ${({ theme }) => theme.CharacterPrimaryInvers};
  display: flex;
  align-items: center;
  gap: 5px;
  /* position: relative; */
`;

const BoxHeader = ({
  headerTitle,
  headerButtonTitle,
  headerOnClick,
  children,
}) => {
  return (
    <StyledBoxHeader>
      {children ? (
        children
      ) : (
        <>
          {headerTitle}
          <Spacer />
          {headerButtonTitle && (
            <Button onClick={headerOnClick} pTB="2">
              {headerButtonTitle}
            </Button>
          )}
        </>
      )}
    </StyledBoxHeader>
  );
};

export default BoxHeader;
