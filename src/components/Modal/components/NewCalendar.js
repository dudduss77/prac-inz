import React from "react";
import { Button } from "../../Reusable";
import Input from "../../Input";
import { ModalHeader, ModalParagraph } from "./ModalReusable";

import { ReactComponent as UserSVG } from "./../../../assets/user.svg";

const NewCalendar = () => {
  return (
    <>
      <ModalHeader>Nowy wpis w kalendarzu</ModalHeader>
      <Input placeholder="Email" icon={UserSVG} />
      <ModalParagraph align="center">
        Podopieczny otrzyma prośbę o wypełnienie ankiety wstępnej. Jeśli nie
        stworzyłeś jeszcze ankiety, zrób to przed dodaniem podopiecznego. W
        przeciwnym razie użytkownik otrzyma ankietę domyślną.
      </ModalParagraph>
      <Button>Nowy podopieczny</Button>
    </>
  );
};

export default NewCalendar;