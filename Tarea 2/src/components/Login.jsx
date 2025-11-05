import { useForm } from "../hooks/useForm";

export const Login = () => {
    const {formState,handlechange}= useForm ({
        username: "",
        password:"",
    });

const {username,password}= useState;

return (
    <form>
        <input
        type= "text"
        name="username"
        value={usuario}
        onchange= {handlechange}/>

        <input
        type= "text"
        name="password"
        value={password}
        onchange= {handlechange}/>

    <button>Iniciar Sesion</button>
    </form>
);
};