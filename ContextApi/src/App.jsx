import { useState } from "react";
import "./App.css";
import Login from "./section/Login";
import Profile from "./section/Profile";
import ContexProvider from "./context/ContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ContexProvider>
      <h1>Ract context api</h1>
      <Login />
      <Profile />
    </ContexProvider>
  );
}

export default App;
