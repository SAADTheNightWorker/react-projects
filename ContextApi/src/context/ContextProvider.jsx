import { useState } from "react";
import UserContex from "./Context";

const ContexProvider = ({ children }) => {
  
    const [user, setUser] = useState([]);
  
  return (
    <UserContex.Provider value={{ user, setUser }}>
      {children}
    </UserContex.Provider>
  );
};

export default ContexProvider;
