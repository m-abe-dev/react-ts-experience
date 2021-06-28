import React, { useState, useRef, useEffect } from "react";

// React.FCでも可能
export const Counter: React.FunctionComponent<{}> = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  return (
    <>
      <div>value: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>this component was re-rendered {renderTimes.current} times!</div>
    </>
  );
};
