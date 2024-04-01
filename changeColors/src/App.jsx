import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              style={{ backgroundColor: "red", color: "white" }}
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            >
              text
            </button>
            <button
              style={{ backgroundColor: "blue", color: "white" }}
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            >
              text 2
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
