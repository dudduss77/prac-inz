import React, { useState } from 'react'

import {
  ImgBackground, 
  Container, 
  Logo, 
  LoginBox, 
  MenuLogin, 
  MenuLogin__item, 
} from './styled'

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotForm from './ForgotForm';
import { useParams } from 'react-router';


const WHICHFORM = {
  LOGIN: 'login',
  REGISTER: 'register',
  FORGET_PASSWORD: 'forgotten_password'
}

const Login = () => {

  const { id } = useParams();
  const [whichForm, setWhichForm] = useState(id ? WHICHFORM.REGISTER : WHICHFORM.LOGIN);

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
        {whichForm == WHICHFORM.REGISTER && <RegisterForm handleForgotClick={handleForgotClick} id={id}/>}
        {whichForm == WHICHFORM.FORGET_PASSWORD && <ForgotForm/>}
        
      </LoginBox>
    </Container>  
    </>


  )
}
export default Login
