import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ONE_DAY_MS } from "../../../constants";
import { getDateddmmyyy, getLastMondayTime } from "../../../helpers";

import { ReactComponent as ArrowSVG } from "./../../../assets/arrow.svg";

const StyledContainer = styled.span`
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledArrowLeftSVG = styled.svg.attrs({
  width: "29px",
  height: "20px",
})`
  transform: rotate(90deg);
  cursor: pointer;

  & * {
    fill-opacity: 1;
  }
`;

const StyledArrowRightSVG = styled.svg.attrs({
  width: "29px",
  height: "20px",
})`
  transform: rotate(-90deg) scaleX(-1);
  cursor: pointer;

  & * {
    fill-opacity: 1;
  }
`;

const StyledContent = styled.div`
  font-weight: bold;
`;

const WeekChanger = ({
  numberOfDays = 1,
  onChange = (e) => console.log(e),
}) => {
  const [date, setDate] = useState(null);

  const handlerOnPlusClick = () => {
    setDate(({ from, to }) => ({
      from: new Date(from.getTime() + numberOfDays * ONE_DAY_MS),
      to: new Date(to.getTime() + numberOfDays * ONE_DAY_MS),
    }));
  };

  const handlerOnMinusClick = () => {
    setDate(({ from, to }) => ({
      from: new Date(from.getTime() - numberOfDays * ONE_DAY_MS),
      to: new Date(to.getTime() - numberOfDays * ONE_DAY_MS),
    }));
  };

  useEffect(() => {
    if (date) onChange(date);
  }, [date]);

  useEffect(() => {
    if (numberOfDays === 1)
      setDate({
        from: new Date(),
        to: new Date(),
      });
    else if (numberOfDays === 3) {
      var today = new Date();
      var before = new Date(today);
      before.setDate(before.getDate() - 1);
      var after = new Date(today);
      after.setDate(after.getDate() + 1);
      setDate({
        from: before,
        to: after,
      });
    } else {
      var currDate = new Date();
      if (currDate.getDay() === 0) {
        setDate({
          from: new Date(currDate.setDate(currDate.getDate() - 6)),
          to: new Date(),
        });
      } else {
        setDate({
          from: new Date(getLastMondayTime()),
          to: new Date(
            new Date(getLastMondayTime()).getTime() +
              (numberOfDays - 1) * ONE_DAY_MS
          ),
        });
      }
    }
  }, [numberOfDays]);

  return (
    <StyledContainer>
      <StyledArrowLeftSVG as={ArrowSVG} onClick={handlerOnMinusClick} />
      <StyledContent>
        {date && numberOfDays !== 1 && getDateddmmyyy(date.from) + " - "}{" "}
        {date && getDateddmmyyy(date.to)}
      </StyledContent>

      <StyledArrowRightSVG as={ArrowSVG} onClick={handlerOnPlusClick} />
    </StyledContainer>
  );
};

export default WeekChanger;
