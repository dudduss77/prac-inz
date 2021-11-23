import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useInput } from "../../../hooks/useInput";
import Input from "../../Input";
import { Icon, Row } from "../../Reusable";

const ExerciseSettings = ({
  addIcon = false,
  deleteIcon = false,
  iconFun,
  currentValue,
  setValue,
  array,
}) => {
  const { ...weight } = useInput(
    currentValue.weight ? currentValue.weight : "",
    "weight"
  );
  const { ...series } = useInput(
    currentValue.repeat ? currentValue.repeat : "",
    "series"
  );

  useEffect(() => {
    if (array)
      setValue(
        array.map((item) => {
          if (item.id === currentValue.id) {
            return {
              ...item,
              weight: parseInt(weight.value),
              repeat: parseInt(series.value),
            };
          } else return item;
        })
      );
  }, [weight.value, series.value]);
  console.log("curValue", currentValue);
  return (
    <Row isGap alignItems="center">
      <Input
        width="150px"
        placeholder="Obciążenia"
        useInput={weight}
      />
      <Input
        width="150px"
        placeholder="Ilość serii"
        useInput={series}
      />
      {addIcon && (
        <Icon onClick={() => iconFun()} fontSize="1.2em">
          <FontAwesomeIcon icon="plus-circle" />
        </Icon>
      )}
      {deleteIcon && (
        <Icon onClick={() => iconFun(currentValue.id)} fontSize="1.2em">
          <FontAwesomeIcon icon="minus-circle" />
        </Icon>
      )}
    </Row>
  );
};

export default ExerciseSettings;
