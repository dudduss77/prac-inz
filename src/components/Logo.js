import styled from "styled-components";
const StyledLogo = styled.h2`
  color: ${({ isInvers, theme }) =>
    isInvers ? theme.CharacterPrimaryInvers : theme.CharacterPrimary};
`;

export default StyledLogo;
