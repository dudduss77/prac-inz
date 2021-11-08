import styled from 'styled-components';
import Theme from './Theme';
import './fontConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    </Theme>
  );
}

export default App;
