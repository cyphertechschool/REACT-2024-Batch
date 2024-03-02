import React from "react";
import User from "./User";

const Listing = () => {
  const names = ["aman", "poonam", "akshay", "dummby", "tumi", "pinki"];

  return (
    <div>
      {names.map((name, index) => {
        return <User key={index} user={name} />;
      })}
    </div>
  );
};

export default Listing;
