import React, { ReactNode } from "react";

type CounterProps = {
  children: ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ children, setCount }: CounterProps) => {
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <div>{children}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
