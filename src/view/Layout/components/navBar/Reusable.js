import styled from "styled-components";

export const NavIcon = styled.div`
  display: flex;
  min-width: ${({isMenuOpen}) => (isMenuOpen ? "25px" : "100%")};
  justify-content: center;

  @media screen and (max-width: 1400px) {
    min-width: ${({isMenuOpen}) => (isMenuOpen ? "100%" : "25px")};
  }

  @media screen and (max-width: 900px) {
    min-width: 25px;
  }
`;

export const NavTitle = styled.div`
  visibility: ${({isMenuOpen}) => (isMenuOpen ? "visible" : "hidden")};
  white-space: nowrap;
  @media screen and (max-width: 1400px) {
    visibility: ${({isMenuOpen}) => (isMenuOpen ? "hidden" : "visible")};
  }
  @media screen and (max-width: 900px) {
    visibility: visible;
  }
`;
