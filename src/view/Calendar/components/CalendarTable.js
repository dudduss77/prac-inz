import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CalendarItem from "../../../components/CalendarItem";
import { ONE_DAY_MS } from "../../../constants";
import { selectUserId } from "../../../features/UserSlice";
import { getCalendarDay } from "../../../firebase/dataFirebase";
import {
  getDayNameFromDate,
  getDateddmmyyy,
  getNextDay,
} from "../../../helpers";

const StyledContainer = styled.div`
  border-left: 1px solid #079ae5;
  border-bottom: 1px solid #079ae5;
  border-top: 1px solid #079ae5;
  width: 100%;
  min-height: 500px;
  display: flex;
  border-right: none;
`;

const StyledColumn = styled.div`
  border-right: 1px solid #079ae5;
  width: 100%;
  min-height: 500px;
`;

const StyledHeader = styled.div`
  border-bottom: 1px solid #079ae5;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ColorMap = {
  ordinary: "#C4C4C4",
  "open-to-reservation": "#FF0000",
  "training-or-meet": "#00ff00",
};

const CalendarTable = ({ date = null }) => {
  const userId = useSelector(selectUserId);
  const [mappedDays, setMappedDays] = useState([]);

  useEffect(() => {
    (async () => {
      const { from, to } = date;
      if (!from || !to) return;

      const tab = [];
      let actualDate = from;
      while (actualDate.getTime() <= to.getTime()) {
        const caleItem = await getCalendarDay(
          userId,
          actualDate.getDate(),
          actualDate.getMonth() + 1,
          actualDate.getFullYear()
        );
        caleItem.sort(
          (a, b) =>
            parseInt(a.data.from.replace(":", "")) -
            parseInt(b.data.from.replace(":", ""))
        );
        tab.push(
          <StyledColumn>
            <StyledHeader>
              <p>{getDayNameFromDate(actualDate)}</p>
              <p>{getDateddmmyyy(actualDate)}</p>
            </StyledHeader>
            {caleItem.length > 0 &&
              caleItem.map((item) => (
                <CalendarItem
                  id={item.id}
                  from={item.data.from}
                  to={item.data.to}
                  description={item.data.desc}
                  color={ColorMap[item.data.type]}
                />
              ))}
          </StyledColumn>
        );

        actualDate = getNextDay(actualDate);
      }
      setMappedDays(tab);
    })();
  }, [date]);

  return <StyledContainer>{mappedDays}</StyledContainer>;
};

export default CalendarTable;
