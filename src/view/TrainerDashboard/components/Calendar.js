import React, { useEffect, useState } from "react";
import { Box } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import CalendarItem from "../../../components/CalendarItem";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectUserId } from "../../../features/UserSlice";
import { getCalendarDay } from "../../../firebase/dataFirebase";

const ColorMap = {
  ordinary: "#C4C4C4",
  "open-to-reservation": "#FF0000",
  "training-or-meet": "#00ff00",
};

const Calendar = () => {
  const userId = useSelector(selectUserId);
  const navigate = useNavigate();
  const [calItem, setCalItem] = useState([]);

  useEffect(() => {
    (async () => {
      const today = new Date();
      const caleItem = await getCalendarDay(
        userId,
        today.getDay(),
        today.getMonth() + 1,
        today.getFullYear()
      );
      caleItem.sort(
        (a, b) =>
          parseInt(a.data.from.replace(":", "")) -
          parseInt(b.data.from.replace(":", ""))
      );
      setCalItem(caleItem);
    })();
  }, []);

  return (
    <Box width="30%">
      <BoxHeader
        headerTitle="Kalendarz"
        headerButtonTitle="Kalendarz"
        headerOnClick={() => navigate("/trainer/calendar")}
      />
      {calItem.length > 0 &&
        calItem.map((item) => (
          <CalendarItem
            time={`${item.data.from} - ${item.data.to}`}
            description={item.data.desc}
            color={ColorMap[item.data.type]}
          />
        ))}
    </Box>
  );
};

export default Calendar;
