import { useState } from "react";
import { Button } from "../components/button";

export function CounterRoute() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  document.title = `Count: ${count} - Todo List`;

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}
