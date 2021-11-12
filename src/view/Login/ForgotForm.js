import Button from './../../components/Button';
import Input from "./../../components/Input";

import { ReactComponent as UserSVG } from './../../assets/user.svg';

const ForgotForm = () => (
    <>
      <Input placeholder="Email" icon={UserSVG} width="360px" />  
      <Button isWholeContent >Logowanie</Button>
    </>

)


export default ForgotForm;