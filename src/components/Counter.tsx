import React, { useState } from "react";
import style from "./Counter.module.scss";

export const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1 className={style.titles}>{counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
