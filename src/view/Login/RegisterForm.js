import * as yup from "yup";
import { Button } from "./../../components/Reusable";
import Checkbox from "./../../components/Checkbox";
import Input from "./../../components/Input";

import { ReactComponent as UserSVG } from "./../../assets/user.svg";
import { ReactComponent as passSVG } from "./../../assets/pass.svg";

import { createUser } from "./../../firebase/authFirebase";

import { RememberLost, RememberLost__item } from "./styled";

import { useInput } from "../../hooks/useInput";
import { useNotification } from "../../hooks/useNotification";
import { useNavigate } from "react-router";
import { createColleciontWhenUserCreate } from "../../firebase/dataFirebase";

const schema = yup.object().shape({
  name: yup.string().required("Imię i nazwisko jest wymagane"),
  email: yup.string().email("Nieprawidłowy adres email"),
  pass: yup
    .string()
    .required("Hasło jest wymagane")
    .min(8, "Hasło jest za krótkie")
    .matches(/[a-zA-Z]/, "Hasło zawiera niedozwolone znaki"),
});
const RegisterForm = ({ handleForgotClick, id = false }) => {
  const emailInput = useInput("", "email");
  const passInput = useInput("", "pass");
  const nameInput = useInput("", "name");

  const navigate = useNavigate();
  const notification = useNotification();

  const handleOnSubmit = () => {
    let { value: email } = emailInput;
    const { value: pass } = passInput;
    const { value: name } = nameInput;

    schema
      .validate({ name, pass, email })
      .then(async (valid) => {
        const user = await createUser(email, pass, notification.showError);
        await createColleciontWhenUserCreate(name, email, user.user.uid, id);
        if (user) navigate("/");
      })
      .catch((err) => {
        console.log(err);
        notification.showError(err.errors);
      });
  };

  return (
    <>
      <Input
        useInput={emailInput}
        width="360px"
        placeholder="Email"
        icon={UserSVG}
      />
      <Input
        useInput={passInput}
        width="360px"
        placeholder="Hasło"
        icon={passSVG}
      />
      <Input
        useInput={nameInput}
        width="360px"
        placeholder="Imię i nazwisko"
        icon={UserSVG}
      />

      <RememberLost>
        <RememberLost__item>
          <Checkbox />
          Zapamiętaj mnie
        </RememberLost__item>
        <RememberLost__item onClick={handleForgotClick} secondColor>
          Przypomnij hasło
        </RememberLost__item>
      </RememberLost>

      <Button onClick={handleOnSubmit} isWholeContent>
        Logowanie
      </Button>
    </>
  );
};

export default RegisterForm;
