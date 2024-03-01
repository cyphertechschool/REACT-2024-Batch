import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function counter() {
    setCount((count) => count + 1);
    // code if 10
    // alert('Hello 10')
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={counter}>+</button>
    </>
  );
}

export default App;
