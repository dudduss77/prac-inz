import Button from './../../components/Button';
import Checkbox from './../../components/Checkbox';
import Input from "./../../components/Input";

import { ReactComponent as UserSVG } from './../../assets/user.svg';
import { ReactComponent as passSVG } from './../../assets/pass.svg';

import {
    RememberLost, 
    RememberLost__item
  } from './styled'



  const RegisterForm = ({handleForgotClick}) => (
    <>
      <Input placeholder="Email" icon={UserSVG} width="360px" />  
      <Input placeholder="Hasło" icon={passSVG} />  
      <Input placeholder="Imię i nazwisko" icon={UserSVG} />  

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


  export default RegisterForm;