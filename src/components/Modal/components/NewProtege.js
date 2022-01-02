import { useSelector } from "react-redux";
import { Button } from "../../Reusable";
import Input from "../../Input";
import { ModalHeader, ModalParagraph } from "./ModalReusable";

import { ReactComponent as UserSVG } from "./../../../assets/user.svg";
import Select from "../../Select";
import { useEffect, useState } from "react";
import { getQuestionaires } from "../../../firebase/dataFirebase";

const NewProtege = () => {
  const user = useSelector(({user}) => user);
  const [questionaire, setQuestionaire] = useState(null);
  const [ link, setLink ] = useState(null);

  const updateLink = (id) => {
    setLink(`http://localhost:3000/login/${user.userId}/${questionaire[id].id}`)
  }

  useEffect(async () => {
    const res = await getQuestionaires(user.userId);
    setQuestionaire(res);
  }, [])

  // useEffect(() => questionaire != null ? updateLink(0) : null, [questionaire])
  
  return questionaire == null ? "Ładowanie" : (
    <>
      <ModalHeader>Nowy podopieczny</ModalHeader>
      {
        questionaire.length<1 ? "" :
        (
          <Select
          width="92%"
          data={questionaire.map(item => item.data.name)}
          placeholder="Wybierz Ankietę z listy"
          onChangeWithIndex={({i}) => updateLink(i)}
        />
        )
      }

      {link ? <Input isDisabled value={link} placeholder="Email" icon={UserSVG} /> : ""}
      <ModalParagraph align="center">
        {
        questionaire.length<1 ?
        "Aby dodać podopiecznego musisz stworzyć przynajmniej jedną ankietę początkową"
        :
        link ? 
        "Wyślij ten link swojemu podopiecznemu. Umozliwi to mu stworzenie konta nowego podopiecznego"
        :
        "Wybierz ankietę która zostanie wysłana twojemu podopiecznemu tuz po utworzeniu konta."
        }
      </ModalParagraph>
    </>
  );
};

export default NewProtege;
