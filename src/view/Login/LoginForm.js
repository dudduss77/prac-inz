import {Button} from './../../components/Reusable';
import Checkbox from './../../components/Checkbox';
import Input from "./../../components/Input";

import { ReactComponent as UserSVG } from './../../assets/user.svg';
import { ReactComponent as passSVG } from './../../assets/pass.svg';

import {
    RememberLost, 
    RememberLost__item
  } from './styled'



  const LoginForm = ({handleForgotClick}) => (
    <>
      <Input placeholder="Email" icon={UserSVG} />  
      <Input placeholder="Hasło" icon={passSVG} />  

      <RememberLost>
        <RememberLost__item>
          <Checkbox />
          Zapamiętaj mnie
        </RememberLost__item>
        <RememberLost__item onClick={handleForgotClick} secondColor>Przypomnij hasło</RememberLost__item>
      </RememberLost>

      <Button isWholeContent >Rejestracja</Button>
    </>

  )


  export default LoginForm;