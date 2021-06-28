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

  // Non-null Assertion Operator(null!): 絶対にnullのはずがない時に、最初からnullである状態を除外する
  const ref = useRef<HTMLInputElement>(null!);
  const focusInput = () => {
    // const current = ref.current;
    // if (current != null) current.focus();
    // ?: nullかもしれない時に使う
    // ref.current?.focus();
    ref.current.focus();
  };

  return (
    <>
      <div>value: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>this component was re-rendered {renderTimes.current} times!</div>
      <input type="text" ref={ref} />
      <button onClick={focusInput}>Click me</button>
    </>
  );
};
