import { useState } from "react";

export const useForm = ({ inititialState }) => {
  const [formState, setFormState] = useState(inititialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
  };

  const handleReset = () => {
    setFormValues(initialValue);
  };

  setFormulario({
    ...formState,
    name:value,
    password: "",
  });
};


return { formState, handleChange, handleReset };
