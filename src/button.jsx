
{/* This code is written on 30th November to know about how component renders on the UI and how conditional rendering works */}

import React from "react";

const Button = () => {
  const Animals = [
    { name: "Lion", id: 1 },
    { name: "Rabbit", id: 2 },
    { name: "Rrr", id: 2 },
    { name: "Tiger", id: 3 },
  ];

  return (
    <>
      <button>Animals</button>
      {Animals.map((value) => {
        return value.name.startsWith("R") ? (
          <li key={value.id}>{value.name}</li>
        ) : null;
      })}
    </>
  );
};

export default Button;
