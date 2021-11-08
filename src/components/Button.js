import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: ${props => props.br ? props.br + "px" : "2px"};
  background: ${props => props.theme.PrimarySix};
  color: ${props => props.theme.CharacterPrimaryInvers};
  padding: ${props => props.pm ? props.pm + 'px' : '10px'};
  font-size: 16px;
  width: ${props => props.isWholeContent ? '100%' : 'auto'};
  cursor: pointer;
`

export default Button;