import Button from './../../components/Button';
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
      <Input placeholder="Email" icon={UserSVG} width="360px" />  
      <Input placeholder="Hasło" icon={passSVG} />  

      <RememberLost>
        <RememberLost__item>
          <Checkbox />
          Zapamiętaj mnie
        </RememberLost__item>
        <RememberLost__item  onClick={handleForgotClick} secondColor>Przypomnij hasło</RememberLost__item>
      </RememberLost>

      <Button isWholeContent >Logowanie</Button>
    </>

  )


  export default LoginForm;