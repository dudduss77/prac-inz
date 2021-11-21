import { useEffect, useState } from "react";

export const useInput = (initialValue, key, initialWidth = "100px") => {
  const [value, setValue] = useState(initialValue);
  const [width, setWidth] = useState(initialWidth);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setWidth(`${((value.length) * 9 )}px`);
  }, [value]);

  return {
    value,
    key,
    width,
    onChange,
  };
};