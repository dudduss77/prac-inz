import styled from "styled-components";

export const ModalHeader = styled.h3`
  color: ${({ theme }) => theme.CharacterPrimaryInvers + "A6"};
`;

export const ModalParagraph = styled.p`
  color: ${({ theme }) => theme.CharacterPrimaryInvers};
  text-align: ${({ align }) => align};
`;
