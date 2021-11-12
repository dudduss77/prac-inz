import styled from "styled-components";

export const ReusableViewWrapper = styled.div`
  display: flex;
  flex-direction: ${({ isColumnLayout }) =>
    isColumnLayout ? "column" : "row"};
  gap: 10px;
  flex-wrap: wrap;
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
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
