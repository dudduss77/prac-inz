import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectModalData } from "../../../features/AppSlice";
import { getExerciseList } from "../../../firebase/dataFirebase";
import { useInput } from "../../../hooks/useInput";
import Input from "../../Input";
import { Box, Button, Row } from "../../Reusable";
import { ModalHeader } from "./ModalReusable";
import TrainingAddExerciseItem from "./TrainingAddExerciseItem";
import TrainingAddExerciseItemAdd from "./TrainingAddExerciseItemAdd";

const TrainingAddExercise = () => {
  const searchInput = useInput("");
  const [exerciseList, setExerciseList] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  useEffect(() => {
    (async () => {
      const { toReturn, lastVisable } = await getExerciseList();
      setExerciseList(toReturn);
      setLastItem(lastVisable);
    })();
  }, []);

  const handleSearch = async () => {
    if (searchInput.value) {
      const { toReturn, lastVisable } = await getExerciseList(
        null,
        searchInput.value
      );
      setExerciseList(toReturn);
      setLastItem(lastVisable);
    }
  };

  const handleScroll = async (event) => {
    const bottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight;
    if (bottom) {
      const { toReturn, lastVisable } = await getExerciseList(
        lastItem,
        searchInput.value
      );
      setExerciseList((prev) => prev.concat(toReturn));
      setLastItem(lastVisable);
    }
  };

  return (
    <>
      <ModalHeader>Dodaj ćwiczenie</ModalHeader>
      <Row noMedia width="100%">
        <Input useInput={searchInput} width="100%" />
        <Button onClick={handleSearch} isSquare>
          <FontAwesomeIcon icon="search" />
        </Button>
      </Row>
      <Box onScroll={handleScroll} height="350px" width="100%" isOverflow>
        {exerciseList.length > 0 ? (
          exerciseList.map((item) => (
            <TrainingAddExerciseItem itemName={item.name} />
          ))
        ) : (
          <TrainingAddExerciseItemAdd />
        )}
      </Box>
    </>
  );
};

export default TrainingAddExercise;
