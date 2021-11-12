import styled from "styled-components";

export const ModalHeader = styled.h3`
  color: ${({ theme }) => theme.CharacterPrimaryInvers + "A6"};
  margin: 10px 0px;
`;

export const ModalParagraph = styled.p`
  color: ${({ theme }) => theme.CharacterPrimaryInvers};
  text-align: ${({ align }) => align};
  margin: 20px 0px;
`;
