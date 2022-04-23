import React from "react";
import styled from "styled-components";
import OptionsItem from "./OptionsItem";
import unitTypes from "../../../data/UnitTypes.json";

const StyledListItem = styled.div`
  padding: 10px;
  background: #6d768a;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
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

const calculateKcalValue = (protein, fat, carbohydrates, proportions) => {
  return (
    protein * proportions * 4 +
    fat * proportions * 9 +
    carbohydrates * proportions * 4
  ).toFixed(2);
};

const Item = ({ id, name, protein, fat, carbohydrates, types, kind }) => {
  return (
    <StyledListItem key={id}>
      <ListItemHeader>
        <ListItemMiddle>
          <StyledListItemTitle>{name}</StyledListItemTitle>
        </ListItemMiddle>
      </ListItemHeader>
      <OptionsWrapper>
        {types.map((item) => (
          <OptionsItem
            key={item.type}
            id={id}
            type={item.type}
            protein={(protein * item.proportions).toFixed(2)}
            fat={(fat * item.proportions).toFixed(2)}
            carbohydrates={(carbohydrates * item.proportions).toFixed(2)}
            kcalValue={calculateKcalValue(
              protein,
              fat,
              carbohydrates,
              item.proportions
            )}
            weight={100 * item.proportions}
            name={unitTypes[item.type].name.pl}
            unit={unitTypes[item.type].unit[kind]}
          />
        ))}
      </OptionsWrapper>
    </StyledListItem>
  );
};

export default Item;
