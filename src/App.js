import { useRoutes } from "react-router-dom";
import Theme from "./Theme";
import "./fontConfig";
import routes from "./routes";
import styled from "styled-components";

const StyledApp = styled.div`
  color: ${({ theme }) => theme.CharacterPrimary};
  background: ${({ theme }) => theme.pageBackground};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
`;

function App() {
  const routing = useRoutes(routes(false));
  return (
    <StyledApp>
      <Theme>{routing}</Theme>
    </StyledApp>
  );
}

export default App;
