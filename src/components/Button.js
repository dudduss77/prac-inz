import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: ${({ isRounded }) => (isRounded ? "50px" : "5px")};
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

export default Button;
