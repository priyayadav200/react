import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setUser } = useContext(UserContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    alert("Login Successfully");
  };
  return (
    <div>
      <h1>Login Component</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="UserName"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={HandleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
