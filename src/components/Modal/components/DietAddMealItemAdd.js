import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useInput } from "../../../hooks/useInput";
import Input from "../../Input";
import { Button, ClickedInput, Row } from "../../Reusable";

const StyldDietAddMealItemAdd = styled.div`
  width: calc(100% - 20px);
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.naturalSeven};
  h4 {
    color: ${({ theme }) => theme.CharacterSecoundary};
  }
`;

const DietAddMealItemAdd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [kcalValue, setKcalValue] = useState(0);
  const { ...nameInput } = useInput("", "nameInput");
  const { ...proteinInput } = useInput("", 'proteinInput');
  const { ...carbohydratesInput } = useInput("", "carbohydratesInput");
  const { ...fatInput } = useInput("", "fatInput");

  useEffect(() => {
    if (proteinInput.value && carbohydratesInput.value && fatInput.value) {
      console.log(parseInt(proteinInput.value));
      setKcalValue(
        parseInt(proteinInput.value) * 4 +
          parseInt(carbohydratesInput.value) * 4 +
          parseInt(fatInput.value) * 9
      );
    }
  }, [proteinInput.value, carbohydratesInput.value, fatInput.value]);

  return (
    <StyldDietAddMealItemAdd>
      {!isOpen && (
        <>
          <h4>Nie znaleziono produktu</h4>
          <Button onClick={() => setIsOpen(true)}>Dodaj nowy produkt</Button>
        </>
      )}
      {isOpen && (
        <>
          <Input useInput={nameInput} placeholder="Nazwa produktu" />
          <Input useInput={proteinInput} placeholder="Białko na 100g" />
          <Input
            useInput={carbohydratesInput}
            placeholder="Węglowodany na 100g"
          />
          <Input useInput={fatInput} placeholder="Tłuszcz na 100g" />
          {/* <input {...fatInput} placeholder="tse"/> */}
          <h4>{kcalValue} kcal na 100g</h4>
          <Row isGap>
            <Button>Dodaj</Button>
            <Button onClick={() => setIsOpen(false)}>Anuluj</Button>
          </Row>
        </>
      )}
    </StyldDietAddMealItemAdd>
  );
};

export default DietAddMealItemAdd;
