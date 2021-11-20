import React from "react";
import Input from "../../Input";
import { ModalHeader } from "./ModalReusable";
import { Box, Button, Row } from "../../Reusable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DietAddMealItem from "./DietAddMealItem";
import DietAddMealItemAdd from "./DietAddMealItemAdd";

const tempArr = [
  {
    id: 1,
    name: "Bułka",
    proteinOnHundredGrams: 5,
    carbohydratesOnHundredGrams: 6,
    fatOnHundredGrams: 1,
  },
];

const DietAddMeal = () => {
  return (
    <>
      <ModalHeader>Dodaj produkt</ModalHeader>
      <Row>
        <Input />
        <Button isSquare>
          <FontAwesomeIcon icon="search" />
        </Button>
      </Row>
      <Box height="350px" width="100%">
        {tempArr.map((item) => (
          <DietAddMealItem
            key={item.id}
            itemName={item.name}
            proteinOnHundredGrams={item.proteinOnHundredGrams}
            carbohydratesOnHundredGrams={item.carbohydratesOnHundredGrams}
            fatOnHundredGrams={item.fatOnHundredGrams}
          />
        ))}
        <DietAddMealItemAdd />
      </Box>
    </>
  );
};

export default DietAddMeal;
