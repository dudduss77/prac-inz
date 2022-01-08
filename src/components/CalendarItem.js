import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { changeModalState, setModalData } from "../features/AppSlice";

const CalendarItemStyled = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.1);
    z-index: 9999999999;
  }
`;

const CalendarItem = ({ description, color = "#00FF00", from, to, id }) => {
  const modalDispatch = useDispatch();

  return (
    <CalendarItemStyled
      color={color}
      onClick={() => {
        modalDispatch(changeModalState());
        modalDispatch(
          setModalData({
            name: "newCalendar",
            config: {
              data: {
                id: id,
              },
            },
          })
        );
      }}
    >
      <div>{`${from} - ${to}`}</div>
      <div>{description}</div>
    </CalendarItemStyled>
  );
};

export default CalendarItem;
