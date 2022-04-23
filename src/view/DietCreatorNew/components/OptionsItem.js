import React from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";

const StyledOptionsItem = styled.div`
  width: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;
  cursor: grab;

  h5 {
    flex: auto;
  }

  border-bottom: 1px solid #000;

  &:last-child {
    border-bottom: none;
  }
`;

const OptionsItem = ({
  id,
  protein,
  fat,
  carbohydrates,
  kcalValue,
  name,
  unit,
  weight,
  type,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "dietCreator",
    item: {
      id: id,
      type: type,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <StyledOptionsItem ref={drag}>
      <h5>
        {kcalValue}
        kcal {protein}B {fat}T {carbohydrates}W
      </h5>{" "}
      {name + " " + weight + unit}
    </StyledOptionsItem>
  );
};

export default OptionsItem;
