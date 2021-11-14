import { ThemeProvider } from "styled-components";

const theme = {
  naturalOne: "#FFFFFF",
  naturalThree: "#F5F5F5",
  naturalFour: "#F0F0F0",
  naturalFive: "#D9D9D9",
  naturalSeven: "#8C8C8C",
  PrimaryTwo: "#BAE7FF",
  PrimaryFour: "#69C0FF",
  PrimarySix: "#1890FF",
  CharacterPrimaryInvers: "#FFFFFF",
  CharacterPrimary: "#262626",
  CharacterSecoundary: "#8C8C8C",
  backgroundColorOne: "#001529",
  backgroundColorTwo: "#000C17",
  backgroundColorThree: "#001529",
  backgroundColorFour: "#60D792",
  pageBackground: "#F0F2F5",
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
