import { useSelector } from "react-redux";
import { Button } from "../../Reusable";
import Input from "../../Input";
import { ModalHeader, ModalParagraph } from "./ModalReusable";

import { ReactComponent as UserSVG } from "./../../../assets/user.svg";

const NewProtege = () => {

  const user = useSelector(({user}) => user)
  return (
    <>
      <ModalHeader>Nowy podopieczny</ModalHeader>
      <Input isDisabled value={`http://localhost:3000/login/${user.userId}`} placeholder="Email" icon={UserSVG} />
      <ModalParagraph align="center">
        Wyślij ten link swojemu podopiecznemu.
        Umozliwi to mu stworzenie konta nowego podopiecznego
      </ModalParagraph>
    </>
  );
};

export default NewProtege;
