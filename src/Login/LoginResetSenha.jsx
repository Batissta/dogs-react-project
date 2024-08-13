import React from 'react';
import styles from './Login.module.css';

import Input from '../Components/forms/Input';
import Botao from '../Components/forms/Botao';
import useForm from '../Hooks/useForm';
import useFetch from '../Hooks/useFetch';
import { PASSWORD_RESET } from '../api';
import { useNavigate } from 'react-router-dom';
import Head from '../helper/Head';

const LoginResetSenha = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const { error, loading, request } = useFetch();
  const password = useForm();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  };
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);
  return (
    <div className={styles.formulario}>
      <Head title="Crie uma nova senha" />

      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label={'Nova senha'}
          type={'password'}
          name={'password'}
          {...password}
        />
        {loading ? (
          <Botao disabeld>
            <div className="loading"></div>
          </Botao>
        ) : (
          <Botao>Resetar</Botao>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default LoginResetSenha;
