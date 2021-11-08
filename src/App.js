import styled from 'styled-components';
import Theme from './Theme';
import './fontConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './components/Button';

const Test = styled.div`
  width: 100px;
  height: 100px;
  background: ${props => props.theme.naturalOne};
`

const TestTwo = styled.div`
  width: 100px;
  height: 100px;
  background: ${props => props.theme.naturalTwo};
`

function App() {
  return (
    <Theme>
      <Test/>
      <TestTwo/>
      <FontAwesomeIcon icon="plus"/>
      <Button>Rejestracja</Button>
      <Button isWholeContent>Rejestracja</Button>
      <Button pm="5">Rejestracja</Button>
      <Button br="20">Rejestracja</Button>
    </Theme>
  );
}

export default App;
