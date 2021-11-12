import React from "react";
import Button from "../../Button";
import { ModalHeader, ModalParagraph } from "./ModalReusable";

const NewProtege = () => {
  return (
    <>
      <ModalHeader>Nowy podopieczny</ModalHeader>
      <input type="text" />
      <ModalParagraph align="center">
        Podopieczny otrzyma prośbę o wypełnienie ankiety wstępnej. Jeśli nie
        stworzyłeś jeszcze ankiety, zrób to przed dodaniem podopiecznego. W
        przeciwnym razie użytkownik otrzyma ankietę domyślną.
      </ModalParagraph>
      <Button>Nowy podopieczny</Button>
    </>
  );
};

export default NewProtege;
