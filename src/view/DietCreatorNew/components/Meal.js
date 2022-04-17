import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";

const StyledMeal = styled.div`
  width: 100%;
  background: #6d768a;
  border-radius: 5px;
`;
const MealHeader = styled.div`
  width: calc(100% - 10px);
  display: flex;
  padding: 5px;
  align-items: center;
`;
const MealIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  cursor: pointer;
`;
const MealHeaderMiddle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MealContent = styled.div`
  width: 100%;
`;

const MealContentButtonWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const MealButton = styled.div`
  width: 100%;
  height: 30px;
  background: ${({ isSelected }) => (isSelected ? "none" : "#636b7d")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const MealProductList = styled.div`
  width: 100%;
  min-height: 150px;
`;

const MealProduct = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
`;

const MealProductMiddle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MealProductWeight = styled.h4`
  margin-right: 10px;
`;

const calculateForHundredGrams = (weight, protein, fat, carbohydrates) => {
  let proportionValue = (100 * 100) / weight / 100;
  let newProtein = (protein * proportionValue).toFixed(2);
  let newFat = (fat * proportionValue).toFixed(2);
  let newCarbohydrates = (carbohydrates * proportionValue).toFixed(2);
  return { newProtein, newFat, newCarbohydrates };
};

const Meal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("product");
  const [products, setProducts] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "dietCreator",
    drop: (item) => {
      (async () => {
        let response = await fetch(`http://localhost:3000/product/${item.id}`);
        let product = await response.json();
        if (item.type) {
          setProducts((prev) => [...prev, product]);
        } else {
          console.log("else");
          let newValue = calculateForHundredGrams(
            product.weight,
            product.proteinGrams,
            product.fatGrams,
            product.carbohydratesGrams
          );
          let tempProduct = {
            ...product,
            proteinGrams: newValue.newProtein,
            fatGrams: newValue.newFat,
            carbohydratesGrams: newValue.newCarbohydrates,
            weight: 100,
            type: undefined,
          };
          console.log(tempProduct);
          setProducts((prev) => [...prev, tempProduct]);
        }
      })();
      console.log("item", item);
      // setProducts((prev) => [...prev, item]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <StyledMeal>
      <MealHeader>
        <MealIcon>
          <FontAwesomeIcon icon="trash-alt" />
        </MealIcon>
        <MealHeaderMiddle>
          <h4>Pierś z kurczaka z warzywami.</h4>
          <h5>650 gram</h5>
          <h5>20B 2T 30W</h5>
        </MealHeaderMiddle>
        <MealIcon>
          <FontAwesomeIcon icon="copy" />
        </MealIcon>
        <MealIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FontAwesomeIcon icon="chevron-up" />
          ) : (
            <FontAwesomeIcon icon="chevron-down" />
          )}
        </MealIcon>
      </MealHeader>
      {isOpen && (
        <MealContent>
          <MealContentButtonWrapper>
            <MealButton
              isSelected={selected == "product"}
              onClick={() => setSelected("product")}
            >
              Produkty
            </MealButton>
            <MealButton
              isSelected={selected == "description"}
              onClick={() => setSelected("description")}
            >
              Opis
            </MealButton>
          </MealContentButtonWrapper>
          <MealProductList ref={drop}>
            {products.map((item) => (
              <MealProduct>
                <MealIcon>
                  <FontAwesomeIcon icon="trash-alt" />
                </MealIcon>
                <MealProductMiddle>
                  <h4>{item.name}</h4>
                  <h5>
                    {item.proteinGrams}B {item.fatGrams}T{" "}
                    {item.carbohydratesGrams}W
                  </h5>
                </MealProductMiddle>
                <MealProductWeight>
                  {item.type
                    ? `1 sztuka (${item.weight} gram)`
                    : `${item.weight} gram`}
                </MealProductWeight>
              </MealProduct>
            ))}
            {/* <MealProduct>
              <MealIcon>
                <FontAwesomeIcon icon="trash-alt" />
              </MealIcon>
              <MealProductMiddle>
                <h4>Mąka</h4>
                <h5>10B 1T 20W</h5>
              </MealProductMiddle>
              <MealProductWeight>100 gram</MealProductWeight>
            </MealProduct> */}
          </MealProductList>
        </MealContent>
      )}
    </StyledMeal>
  );
};

export default Meal;
