import React from "react";

const Condition = () => {
  const age = 15;
  const isGlod = true;

  return (
    <div>
      {age >= 18 ? <h1>Over Age </h1> : <h1>Under Age </h1>}
      <h1 style={{ color: isGlod ? "gold" : "red" }}>this has Color</h1>
    </div>
  );
};

export default Condition;
