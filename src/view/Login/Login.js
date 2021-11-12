import React, { useState } from 'react'
import { ReusableViewWrapper } from '../../components/Reusable'
import Input from "./../../components/Input";

import { ReactComponent as UserSVG } from './../../assets/user.svg';
import { ReactComponent as passSVG } from './../../assets/pass.svg';
import Button from './../../components/Button';
import Checkbox from './../../components/Checkbox';

import {
  ImgBackground, 
  Container, 
  Logo, 
  LoginBox, 
  MenuLogin, 
  MenuLogin__item, 
  RememberLost, 
  RememberLost__item
} from './styled'
import LoginForm from './LoginForm';
import RegisterForm from './LoginForm';
import ForgotForm from './ForgotForm';


  
const WHICHFORM = {
  LOGIN: 'login',
  REGISTER: 'register',
  FORGET_PASSWORD: 'forgotten_password'
}

const Login = () => {

  const [whichForm, setWhichForm] = useState(WHICHFORM.LOGIN);

  const handleLoginClick = () => setWhichForm(WHICHFORM.LOGIN)
  const handleRegisterClick = () => setWhichForm(WHICHFORM.REGISTER)
  const handleForgotClick = () => setWhichForm(WHICHFORM.FORGET_PASSWORD)
  
  return (
    <>
    <ImgBackground/>
    <Container>
      <Logo>No Name</Logo>
      <LoginBox>

        <MenuLogin>
          <MenuLogin__item 
            onClick={handleLoginClick}
            active={whichForm== WHICHFORM.LOGIN}
          >
            Logowanie
          </MenuLogin__item>

          <MenuLogin__item 
            onClick={handleRegisterClick} 
            active={whichForm == WHICHFORM.REGISTER}
          >
            Rejestracja
          </MenuLogin__item>
        </MenuLogin>
        {whichForm == WHICHFORM.LOGIN && <LoginForm handleForgotClick={handleForgotClick} />}
        {whichForm == WHICHFORM.REGISTER && <RegisterForm handleForgotClick={handleForgotClick}/>}
        {whichForm == WHICHFORM.FORGET_PASSWORD && <ForgotForm/>}
        
      </LoginBox>
    </Container>  
    </>


  )
}
export default Login
