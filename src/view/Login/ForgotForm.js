import * as yup from 'yup';
import { useInput } from '../../hooks/useInput';
import { useNotification } from '../../hooks/useNotification';
import { useNavigate } from 'react-router';

import { resetPassword } from './../../firebase/authFirebase';
import {Button} from './../../components/Reusable';
import Input from "./../../components/Input";

import { ReactComponent as UserSVG } from './../../assets/user.svg';

const schema = yup.object().shape({
  email: yup.string().email("Nieprawidłowy adres email"),
});

const ForgotForm = () => {

  const emailInput = useInput("", "email");

  const navigate = useNavigate();
  const notification = useNotification();

  const handleOnSubmit = () => {
    const {value : email} = emailInput

    console.log({email});
    schema
    .validate({email})
    .then(async (valid) => {
      const reset = await resetPassword(email, notification.showError);
      if(reset) notification.show('Instrukcje na temat resetu hasła zostały wysłane na podany adres email')
    }).catch(err => {
      notification.showError(err.code)
    })
  }
  return (
    <>
      <Input useInput={emailInput} placeholder="Email" icon={UserSVG} width="360px" />  
      <Button onClick={handleOnSubmit} isWholeContent >Przypomnij hasło</Button>
    </>
)
}


export default ForgotForm;