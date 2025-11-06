import "./App.css";
import { Login } from "../src/components/Login";
import { useState } from "react";
import { Register } from "./components/Register";


export const App = () => {
  const [username, setUser] = useState("");

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser("");
  };

  return (
    <>
      <h1>¡Hola de nuevo {username}!</h1>
      <Login onLogin={handleLogin} />
      <button onClick={handleLogout}>Logout</button>
      <br />
      <Register />
    </>
  );
};