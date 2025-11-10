import { useState } from "react";

export const useCounter = (initialState) => {
  const [count, setCount] = useState(initialState);

  const handleIncrement = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return { count, handleIncrement, handleDecrement, handleReset };
};
