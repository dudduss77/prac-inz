import React from "react";

import AddTile from "../../components/AddTile";
import { useNavigate } from "react-router";

const Questionnaire = () => {
  const navigate = useNavigate();
  return (
    <AddTile addTileClick={() => navigate("new")} />
  );
};

export default Questionnaire;
