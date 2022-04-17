import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";
import OptionsItem from "./OptionsItem";

const StyledListItem = styled.div`
  padding: 10px;
  background: #6d768a;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  cursor: ${({ isGrabCursor }) => (isGrabCursor ? "grab" : "default")};
  border: ${({ isDrag }) => (isDrag ? "1px solid #000" : "none")};
  position: relative;
`;

const ListItemHeader = styled.div`
  display: flex;
  align-items: center;
`;

const ListItemMiddle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledListItemTitle = styled.h4`
  font-weight: 700;
`;

const OptionsWrapper = styled.div`
  width: 100%;
`;

const calculateKcalValue = (protein, fat, carbohydrates) => {
  return protein * 4 + fat * 9 + carbohydrates * 4;
};

const calculateForHundredGrams = (weight, protein, fat, carbohydrates) => {
  let proportionValue = (100 * 100) / weight / 100;
  let newProtein = (protein * proportionValue).toFixed(2);
  let newFat = (fat * proportionValue).toFixed(2);
  let newCarbohydrates = (carbohydrates * proportionValue).toFixed(2);
  let kcalValue = calculateKcalValue(
    newProtein,
    newFat,
    newCarbohydrates
  ).toFixed(2);
  return { newProtein, newFat, newCarbohydrates, kcalValue };
};

const Item = ({ id, name, weight, protein, fat, carbohydrates, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "dietCreator",
    item: {
      id: id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  let onHundredGrams = calculateForHundredGrams(
    weight,
    protein,
    fat,
    carbohydrates
  );

  return (
    <StyledListItem
      key={id}
      ref={type ? null : drag}
      isGrabCursor={type ? false : true}
      isDrag={isDragging}
    >
      <ListItemHeader>
        <ListItemMiddle>
          <StyledListItemTitle>{name}</StyledListItemTitle>
          {type ? (
            ""
          ) : (
            <>
              <h5>{weight} gram</h5>
              <h5>
                {calculateKcalValue(protein, fat, carbohydrates)}
                kcal {protein}B {fat}T {carbohydrates}W
              </h5>
            </>
          )}
        </ListItemMiddle>
      </ListItemHeader>

      {type && (
        <OptionsWrapper>
          <OptionsItem
            id={id}
            protein={protein}
            fat={fat}
            carbohydrates={carbohydrates}
            kcalValue={calculateKcalValue(protein, fat, carbohydrates)}
            weight={weight}
            type="unit"
          />
          <OptionsItem
            id={id}
            protein={onHundredGrams.newProtein}
            fat={onHundredGrams.newFat}
            carbohydrates={onHundredGrams.newCarbohydrates}
            kcalValue={onHundredGrams.kcalValue}
          />
        </OptionsWrapper>
      )}
    </StyledListItem>
  );
};

export default Item;
