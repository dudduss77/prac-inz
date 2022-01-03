import React, { useEffect, useState } from "react";

import AddTile from "../../components/AddTile";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { resetQuestionaireState } from "../../features/QuestionaireSlice";
import { selectUserId } from "../../features/UserSlice";
import { getQuestionaires } from "../../firebase/dataFirebase";
import Tile from "../../components/Tile";
import LoaderFullPage from "../../components/LoaderFullPage";

const Questionnaire = () => {
  const questionaireDispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector(selectUserId);
  const [questionaireList, setQuestionaireList] = useState(null);

  useEffect(() => {
    questionaireDispatch(resetQuestionaireState());
  }, []);

  useEffect(() => {
    if (userId) {
      getQuestionaires(userId, setQuestionaireList);
    }
  }, [userId]);

  return questionaireList == null ? 
  <LoaderFullPage /> : (
    <>
      <AddTile addTileClick={() => navigate("new")} />
      {questionaireList.map((questionaire) => (
        <Tile
          key={questionaire.id}
          tileHeader={questionaire.data.name}
          tileOpenClick={() =>
            navigate(`/trainer/questionnaire/edit/${questionaire.id}`)
          }
        />
      ))}
    </>
  );
};

export default Questionnaire;
