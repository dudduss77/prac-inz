import styled from "styled-components";
import Theme from "./Theme";
import "./fontConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./components/Button";

const Test = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.theme.naturalOne};
`;

const TestTwo = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.theme.naturalTwo};
`;

function App() {
  return (
    <Theme>
      <Test />
      <TestTwo />
      <FontAwesomeIcon icon="plus" />
      <Button>Rejestracja</Button>
      <Button isWholeContent>Rejestracja</Button>
      <Button pTB="5">Rejestracja</Button>
      <Button isRounded>Rejestracja</Button>
      <Button>
        <FontAwesomeIcon icon="plus" /> Dodaj nowego
      </Button>
      <Button>
        <FontAwesomeIcon icon="plus" /> 
      </Button>
    </Theme>
  );
}

export default App;
