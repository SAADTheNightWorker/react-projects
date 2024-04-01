import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };
  const removeCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>React Counter</h1>
      <h2>
        Counter Value: <span>( {count} )</span>
      </h2>
      <button onClick={addCount}>Add Value</button>
      <button onClick={removeCount}>Remove Value</button>
      <p>Footer:</p>
    </>
  );
}

export default App;
