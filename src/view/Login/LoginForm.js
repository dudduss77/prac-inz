import * as yup from 'yup';
import { useInput } from '../../hooks/useInput';
import { useNotification } from '../../hooks/useNotification';
import { useNavigate } from 'react-router';

import { signIn } from './../../firebase/authFirebase';
import {Button} from './../../components/Reusable';
import Checkbox from './../../components/Checkbox';
import Input from "./../../components/Input";

import { ReactComponent as UserSVG } from './../../assets/user.svg';
import { ReactComponent as passSVG } from './../../assets/pass.svg';

import {
    RememberLost, 
    RememberLost__item
  } from './styled'

  const schema = yup.object().shape({
    email: yup.string().email("Nieprawidłowy adres email"),
    pass: yup.string()
    .required('Hasło jest wymagane') 
    .min(8, 'Hasło jest za krótkie')
    .matches(/[a-zA-Z]/, 'Hasło zawiera niedozwolone znaki')
  });

  const LoginForm = ({handleForgotClick}) => {
    const emailInput = useInput("", "email");
    const passInput = useInput("", "pass");
  
    const navigate = useNavigate();
    const notification = useNotification();
  
    const handleOnSubmit = () => {
      const {value : email} = emailInput
      const {value : pass} = passInput
  
      console.log({ pass, email});
      schema
      .validate({ pass, email})
      .then(async (valid) => {
        const user = await signIn(email, pass, notification.showError);
        if(user) navigate('/')
      }).catch(err => {
        notification.showError(err.errors[0])
      })
    }


    return (
      <>
        <Input useInput={emailInput} placeholder="Email" icon={UserSVG} />  
        <Input type="password" useInput={passInput} placeholder="Hasło" icon={passSVG} />  
  
        <RememberLost>
          <RememberLost__item>
            <Checkbox />
            Zapamiętaj mnie
          </RememberLost__item>
          <RememberLost__item onClick={handleForgotClick} secondColor>Przypomnij hasło</RememberLost__item>
        </RememberLost>
  
        <Button onClick={handleOnSubmit} isWholeContent >Logowanie</Button>
      </>
  
    )
  }


  export default LoginForm;