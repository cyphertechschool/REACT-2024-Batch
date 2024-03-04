import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0); // hook

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>Rest</button>
      </div>
      <br />
      <div>{count}</div>
    </>
  );
};

export default CounterApp;
