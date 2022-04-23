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
  const [productList, setProdutList] = useState([]);

  useEffect(() => {
    (async () => {
      let productResponse = await fetch("http://localhost:3000/product");
      let productList = await productResponse.json();
      console.log(productList);
      setProdutList(productList);
    })();
  }, []);

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
        {productList.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ListWeapper>
    </StyledItemsList>
  );
};

export default ItemsList;
