import React from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import Input from '../Components/forms/Input';
import Botao from '../Components/forms/Botao';
import useForm from '../Hooks/useForm';

const LoginRecuperar = () => {
  const email = useForm('email');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };
  return (
    <div className={styles.formulario}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1 className={'title'}>Recuperar senha</h1>
        <Input
          label={'Digite o email cadastrado'}
          name={'email'}
          type={'text'}
          {...email}
        />
        <Botao>Enviar</Botao>
      </form>
    </div>
  );
};

export default LoginRecuperar;
