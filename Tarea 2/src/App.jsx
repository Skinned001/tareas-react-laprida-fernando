import { useState } from "react";

export const App = () => {
    const [user,setUser]= useState("");

    const handleLogin = (username) => {
        setUser(username);
    };

    return{
        <>
        <h1>¡Hola de nuevo {user}!</h1>
        <button>Logout</button>

       <Login onLogin={handleLogin}/> 
        </>
    };
};