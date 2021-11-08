import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: ${(props) => (props.isRounded ? "50px" : "2px")};
  background: ${(props) => props.theme.PrimarySix};
  color: ${(props) => props.theme.CharacterPrimaryInvers};
  padding: ${(props) => (props.pTB ? props.pTB + "px" : "10px")} 20px;
  font-size: 16px;
  width: ${(props) => (props.isWholeContent ? "100%" : "auto")};
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }
`;

export default Button;
