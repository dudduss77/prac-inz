import React, { useEffect, useState } from "react";
import Input from "../../Input";
import { ModalHeader } from "./ModalReusable";
import { Box, Button, Row } from "../../Reusable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DietAddMealItem from "./DietAddMealItem";
import DietAddMealItemAdd from "./DietAddMealItemAdd";
import { useSelector } from "react-redux";
import { selectProduct } from "../../../features/TempProductSlice";

const DietAddMeal = () => {
  const product = useSelector(selectProduct);
  return (
    <>
      <ModalHeader>Dodaj produkt</ModalHeader>
      <Row noMedia width="100%">
        <Input width="100%" />
        <Button isSquare>
          <FontAwesomeIcon icon="search" />
        </Button>
      </Row>
      <Box height="350px" width="100%" isOverflow>
        {product.map((item) => (
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
