import { ThemeProvider } from "styled-components";

const theme = {
  naturalOne: "#FFF",
  PrimarySix: "#1890FF",
  CharacterPrimaryInvers: "#FFF",
  CharacterPrimary: "#262626",
  CharacterSecoundary: "#8C8C8C",
  backgroundColorOne: "#001529",
  backgroundColorTwo: "#000C17",
  pageBackground: "#F0F2F5",
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
