import { useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(() =>
    new Array(29_999_9)
      .fill("")
      .map((_, index) => ({ id: index, isSelected: index === 29_999_8 })),
  );

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items],
  );

  //   useMemo is a hook that memoizes a value and return the same value until any of the
  //   dependenceies in the dependency array changed
  return (
    <div>
      <h1>UseMemo hooks</h1>
      <h2>Count: {count}</h2>
      <h2>Selected item : {selectedItem?.id}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default App;
