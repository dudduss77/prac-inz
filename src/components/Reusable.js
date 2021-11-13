import styled from "styled-components";

export const ReusableViewWrapper = styled.div`
  display: flex;
  flex-direction: ${({ isColumnLayout }) =>
    isColumnLayout ? "column" : "row"};
  gap: 10px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  border: none;
  border-radius: ${({ isRounded, isSquare }) => (isRounded ? "50px" : isSquare ? '0px' : "5px")};
  background: ${({ theme }) => theme.PrimarySix};
  color: ${({ theme }) => theme.CharacterPrimaryInvers};
  padding: ${({ pTB }) => (pTB ? pTB + "px" : "10px")} 20px;
  font-size: 16px;
  width: ${({ isWholeContent }) => (isWholeContent ? "100%" : "auto")};
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  flex: ${({flexValue}) => flexValue};
  display: flex;
  gap: ${({ isGap }) => (isGap ? "10px" : "0")};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ isPadding }) => isPadding ? "10px" : "0"};
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  width: ${({ width }) => width};
  flex: ${({flexValue}) => flexValue};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Box = styled.div`
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  display: flex;
  flex-direction: column;
  gap: ${({ isGap }) => (isGap ? "10px" : "0")};
  background: ${({ theme }) => theme.naturalOne};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const StyledTextarea = styled.textarea`
  resize: none;
  min-height: 100px;
  padding: 5px;
  flex: 1;
  font-size: 1em;
  border: 1px solid $${({ theme }) => theme.naturalFive};
`;

export const Icon = styled.div`
  cursor: pointer;
` 
