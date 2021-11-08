import { ThemeProvider } from "styled-components";

const theme = {
  naturalOne: "#666",
  naturalTwo: "#333",
  PrimarySix: "#1890FF",
  CharacterPrimaryInvers: "#FFF"
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
