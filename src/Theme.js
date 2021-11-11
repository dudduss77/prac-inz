import { ThemeProvider } from "styled-components";

const theme = {
  naturalOne: "#FFF",
  naturalThree: "#F5F5F5",
  naturalFive: "#D9D9D9",
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
