import styled from "styled-components";

export const ReusableViewWrapper = styled.div`
  display: flex;
  flex-direction: ${({ isColumnLayout }) =>
    isColumnLayout ? "column" : "row"};
  gap: 10px;
`;
