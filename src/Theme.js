import { ThemeProvider } from "styled-components";

const theme = {
  naturalOne: "#666",
  naturalTwo: "#333"
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
