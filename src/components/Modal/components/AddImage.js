import React, { useState } from "react";
import styled from "styled-components";
import { Button, GridLayout } from "../../Reusable";
import AddImageInput from "./AddImageInput";
import { ModalHeader } from "./ModalReusable";

const Image = styled.img`
  width: 100px;
`;

const AddImage = () => {
  const [imageArr, setImageArr] = useState([]);

  const sendImage = (event) => {
    let file = event.target.files[0];
    console.log(file);
    if (file) {
      const render = new FileReader();

      render.onload = (evt) => {
        setImageArr([...imageArr, window.btoa(evt.target.result)]);
      };
      render.readAsBinaryString(file);
    }
  };

  return (
    <>
      <ModalHeader>Dodaj stan sylwetki</ModalHeader>
      <GridLayout
        alignItems="center"
        isGap
        gridTemplateColumns="repeat(3, 1fr)"
      >
        <AddImageInput onChange={(evt) => sendImage(evt)} />
        {imageArr.map((item) => (
          <Image src={`data:image/png;base64, ${item}`} />
        ))}
      </GridLayout>
      <Button>Dodaj</Button>
    </>
  );
};

export default AddImage;
