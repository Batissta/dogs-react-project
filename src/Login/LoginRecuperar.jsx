import React from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import Input from '../Components/forms/Input';
import Botao from '../Components/forms/Botao';
import useForm from '../Hooks/useForm';
import useFetch from '../Hooks/useFetch';
import { PASSWORD_LOST } from '../api';
import Head from '../helper/Head';

const LoginRecuperar = () => {
  const email = useForm('');
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: email.value,
        url: window.location.href,
      });
      const { json } = await request(url, options);
    }
    // navigate('/login');
  };
  return (
    <section className={styles.formulario}>
      <Head title="Perdeu a Senha" />

      <h1 className={'title'}>Recuperar senha</h1>
      {data && <p style={{ color: '#4c1' }}>{data}</p>}
      {!data && (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Input
            label={'Digite o usuario cadastrado'}
            name={'email'}
            type={'text'}
            {...email}
          />
          {loading ? (
            <Botao disabled>
              <div className="loading"></div>
            </Botao>
          ) : (
            <Botao>Enviar</Botao>
          )}
        </form>
      )}
    </section>
  );
};

export default LoginRecuperar;
