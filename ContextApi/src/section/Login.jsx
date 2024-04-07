import React, { useContext, useState } from "react";
import Context from "../context/Context";

const Login = () => {
  const { setUser } = useContext(Context);
  const [usename, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    setUser({
      username: usename,
      password: password,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        style={{
          margin: "20px",
          border: "1px solid gray",
          padding: "8px",
          borderRadius: "5px",
          textAlign: "center",
        }}
        type="text"
        name=""
        value={usename}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Write yor Text"
      />
      <input
        style={{
          margin: "20px",
          border: "1px solid gray",
          padding: "8px",
          borderRadius: "5px",
          textAlign: "center",
        }}
        type="password"
        name=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Write yor Password"
      />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
};

export default Login;
