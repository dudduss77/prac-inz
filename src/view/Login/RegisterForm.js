import * as yup from 'yup';
import {Button} from './../../components/Reusable';
import Checkbox from './../../components/Checkbox';
import Input from "./../../components/Input";

import { ReactComponent as UserSVG } from './../../assets/user.svg';
import { ReactComponent as passSVG } from './../../assets/pass.svg';

import { createUser } from './../../firebase/authFirebase';

import {
    RememberLost, 
    RememberLost__item
  } from './styled';

import { useInput } from '../../hooks/useInput';
import { useNotification } from '../../hooks/useNotification';

const schema = yup.object().shape({
  name: yup.string().required("Imię i nazwisko jest wymagane"),
  email: yup.string().email("Nieprawidłowy adres email"),
  pass: yup.string()
  .required('Hasło jest wymagane') 
  .min(8, 'Hasło jest za krótkie')
  .matches(/[a-zA-Z]/, 'Hasło zawiera niedozwolone znaki')
});
const RegisterForm = ({handleForgotClick}) => {

  const email = useInput("", "email");
  const pass = useInput("", "pass");
  const name = useInput("", "name");

  const notification = useNotification();

  const { ...nameInput } = useInput("", "nameInput");

  const handleOnSubmit = () => {
    console.log({ name: name.value, email: email.value, pass: pass.value})
    schema
    .validate({ name: name.value, email: email.value, pass: pass.value})
    .then((valid) => {
      notification.show('sukces')
      console.log(" adw")
    }).catch(console.log)
  }

  return (
    <>
      <Input useInput={email} width="360px" placeholder="Email" icon={UserSVG} />  
      <Input useInput={pass}  width="360px" placeholder="Hasło" icon={passSVG} />  
      <Input useInput={name}  width="360px" placeholder="Imię i nazwisko" icon={UserSVG} />  

      <RememberLost>
        <RememberLost__item>
          <Checkbox />
          Zapamiętaj mnie
        </RememberLost__item>
        <RememberLost__item  onClick={handleForgotClick} secondColor>Przypomnij hasło</RememberLost__item>
      </RememberLost>

      <Button onClick={handleOnSubmit} isWholeContent >Logowanie</Button>
    </>

  )
}


  export default RegisterForm;