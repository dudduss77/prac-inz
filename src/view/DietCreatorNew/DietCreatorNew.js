import React, { useState } from "react";
import styled from "styled-components";
import ItemsList from "./components/ItemsList";
import Settings from "./components/Settings";
import { ReactSortable } from "react-sortablejs";

import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Meal from "./components/Meal";

const StyledDietCreator = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 300px;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    "menu menu"
    "content rightMenu";
  color: #fff;
`;

const StyledMenu = styled.div`
  width: 100%;
  height: 100%;
  background: #818a9c;
  grid-area: menu;
`;

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  background: #818a9c;
`;

const StyledRightMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyleListWrapper = styled.div`
  width: 400px;
  background: #666;
  height: 300px;
`;

const StyledListItem = styled.div`
  padding: 10px 0;
  background: #888;
  border: ${({ isDrag }) => (isDrag ? "2px solid #f00" : "none")};
`;

const MealsWrapper = styled.div`
  width: 500px;
  height: 100%;
  background: #778093;
  display: flex;
  flex-direction: column;
`;

const MealsHeader = styled.div`
  width: calc(100% - 20px);
  padding: 0 10px;
  height: 50px;
  display: flex;
  align-items: center;
  background: #6D768A;
`
const MealsHeaderMiddle = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MealsWrapperContent = styled.div`
  flex: 1;
  width: calc(100% - 20px);
  background: #666;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const DietCreatorNew = () => {
  const [list, setList] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "dietCreator",
    drop: (item) => {
      console.log(item);
      setList((prev) => [
        ...prev,
        {
          id: 1,
          title: "Posiłek",
          product: [item],
        },
      ]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <StyledDietCreator>
      <StyledMenu />
      <StyledContent>

        <MealsWrapper>
          <MealsHeader>
            <h5>1000 Kcal</h5>
            <MealsHeaderMiddle>
              <h4>Dzień pierwszy</h4>
              <h5>10B 20T 30W</h5>
            </MealsHeaderMiddle>
            <h5>500 Gram</h5>
          </MealsHeader>
          <MealsWrapperContent ref={drop}>
            <Meal/>
          </MealsWrapperContent>
        </MealsWrapper>
      </StyledContent>
      <StyledRightMenu>
        <Settings title="Ustawienia diety" />
        <ItemsList />
      </StyledRightMenu>
    </StyledDietCreator>
  );
};

export default DietCreatorNew;
