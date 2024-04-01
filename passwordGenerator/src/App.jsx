import React, { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";

function App() {
  const PasswordRef = useRef(null);
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ASDWIEJQWOJFDKNVETIHPEASLJDQWDSFelktjwef";

    if (numberAllowed) str += "0213243353689";
    if (charAllowed) str += "!@#$%^&*()_+-={}[]\\|;:'\",<.>/?";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Function to copy password to clipboard
  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    PasswordRef.current.select();
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={PasswordRef}
        />
        <button
          onClick={copyPassword}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-x-1">
          <input
            className="cursor-pointer"
            onChange={(e) => setLength(parseInt(e.target.value))}
            type="range"
            min={6}
            max={20}
            value={length}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="character">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
