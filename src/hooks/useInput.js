import { useEffect, useState } from "react";

export const useInput = (initialValue, key, initialWidth = "100px") => {
  const [value, setValue] = useState(initialValue);
  const [width, setWidth] = useState(initialWidth);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    setWidth(`${((value.length) * 9 )}px`);
  }, [value]);

  const setterInputValue = (value) => {
    setValue(value)
  }

  return {
    value,
    key,
    width,
    onChange,
    setterInputValue
  };
};
