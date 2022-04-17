import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactSortable } from "react-sortablejs";
import { useDrag } from "react-dnd";
import Item from "./Item";

const StyledItemsList = styled.div`
  flex: 1;
  background: #818a9c;
  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;

const MenuButton = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ListWeapper = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
`;

const ItemsList = () => {
  const [selectedItems, setSelectedItems] = useState("product");
  const [state, setState] = useState([
  ]);

  useEffect(() => {
    (async () => {
       let response = await fetch('http://localhost:3000/product');
       let productList = await response.json();
       console.log(productList)
       setState(productList);
    })()
    
  }, [])
  

  return (
    <StyledItemsList>
      <Menu>
        <MenuButton
          backgroundColor={selectedItems === "product" ? "none" : "#6D768A"}
          onClick={() => setSelectedItems("product")}
        >
          Produkty
        </MenuButton>
        <MenuButton
          backgroundColor={selectedItems === "meals" ? "none" : "#6D768A"}
          onClick={() => setSelectedItems("meals")}
        >
          Produkty
        </MenuButton>
      </Menu>
      <ListWeapper>
        {state.map((item) => (
          <Item
            id={item.id}
            name={item.name}
            weight={item.weight}
            protein={item.proteinGrams}
            fat={item.fatGrams}
            carbohydrates={item.carbohydratesGrams}
            type={item.type}
          />
        ))}
      </ListWeapper>
    </StyledItemsList>
  );
};

export default ItemsList;
