import React from 'react';
const types = {
  email: {
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Preencha um e-mail válido!',
  },
  password: {
    regex:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,30}$/,
    message: `A senha deve possuir no minimo 8 caracteres.
      Precisa de 1 uma letra maíuscula, 1 mínuscula e 1 caractere especial.`,
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize números apenas.',
  },
};
const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  const onChange = ({ target }) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  const validate = (valor) => {
    if (type === false) return true;
    if (valor.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
