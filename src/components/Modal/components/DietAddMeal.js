import React, { useEffect, useState } from "react";
import Input from "../../Input";
import { ModalHeader } from "./ModalReusable";
import { Box, Button, Row } from "../../Reusable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DietAddMealItem from "./DietAddMealItem";
import DietAddMealItemAdd from "./DietAddMealItemAdd";
import { getProductList } from "../../../firebase/dataFirebase";
import { useInput } from "../../../hooks/useInput";

const DietAddMeal = () => {
  const searchInput = useInput("");
  const [productList, setProductList] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  useEffect(() => {
    (async () => {
      const { toReturn, lastVisable } = await getProductList();
      setProductList(toReturn);
      setLastItem(lastVisable);
    })();
  }, []);

  const handleSearch = async () => {
    if (searchInput.value) {
      const { toReturn, lastVisable } = await getProductList(
        null,
        searchInput.value
      );
      setProductList(toReturn);
      setLastItem(lastVisable);
    }
  };

  const handleScroll = async (event) => {
    const bottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight;
    if (bottom) {
      const { toReturn, lastVisable } = await getProductList(lastItem, searchInput.value);
      setProductList((prev) => prev.concat(toReturn));
      setLastItem(lastVisable);
    }
  };

  return (
    <>
      <ModalHeader>Dodaj produkt</ModalHeader>
      <Row noMedia width="100%">
        <Input useInput={searchInput} width="100%" />
        <Button onClick={handleSearch} isSquare>
          <FontAwesomeIcon icon="search" />
        </Button>
      </Row>
      <Box onScroll={handleScroll} height="350px" width="100%" isOverflow>
        {productList.length > 0 ? (
          productList.map((item) => (
            <DietAddMealItem
              key={item.id}
              itemName={item.name}
              proteinOnHundredGrams={item.proteinOnHundredGrams}
              carbohydratesOnHundredGrams={item.carbohydratesOnHundredGrams}
              fatOnHundredGrams={item.fatOnHundredGrams}
            />
          ))
        ) : (
          <DietAddMealItemAdd />
        )}
      </Box>
    </>
  );
};

export default DietAddMeal;
