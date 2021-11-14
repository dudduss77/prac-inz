import React from "react";
import { Box } from "../../../components/Reusable";
import BoxHeader from "../../../components/Box/components/BoxHeader";
import CalendarItem from "../../../components/CalendarItem";
import { useNavigate } from "react-router";
const Calendar = () => {
  const navigate = useNavigate();
  return (
    <Box width="30%">
      <BoxHeader
        headerTitle="Kalendarz"
        headerButtonTitle="Kalendarz"
        headerOnClick={() => navigate("/calendar")}
      />
      <CalendarItem
        time="10:00 - 11:00"
        description="Opis zadania aktualnego..."
        color="#C4C4C4"
      />
      <CalendarItem
        time="10:00 - 11:00"
        description="Opis zadania aktualnego..."
        color="#FF0000"
      />
      <CalendarItem
        time="10:00 - 11:00"
        description="Opis zadania aktualnego..."
      />
    </Box>
  );
};

export default Calendar;
