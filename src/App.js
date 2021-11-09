import { useRoutes } from "react-router-dom";
import Theme from "./Theme";
import "./fontConfig";
import routes from "./routes";

function App() {
  const routing = useRoutes(routes(false));
  return <Theme>{routing}</Theme>;
}

export default App;
