import { useState } from "react";

export const useForm = ({ inititialState }) => {
  const [formState, setFormState] = useState(inititialState);

  const handleChange = (event, onLogin) => {
    const { name, value } = event.target;

    
  };

  const handleReset = () => {
    setFormState(inititialState);
  };

  const handleSubmit = (event) => {
    // prevenir que se reinicie el formulario
    event.preventDefault();

    //Logica a ejecutar la funcion para reiniciar el formulario
    handleReset();

    onLogin(username);
  };

  setFormulario({
    ...formState,
    name: value,
    password: "",
  });
};

return { formState, handleChange, handleReset, handleSubmit };
