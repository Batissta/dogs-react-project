import React from 'react';
import styles from './Login.module.css';
import Input from '../Components/forms/Input';
import Botao from '../Components/forms/Botao';
import useForm from '../Hooks/useForm';
import { USER_POST } from '../api';
import { UserContext } from '../UserContext';
import useFetch from '../Hooks/useFetch';

const LoginCadastrar = () => {
  const username = useForm('');
  const email = useForm('email');
  const senha = useForm('');
  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: senha.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, senha.value);
    // 1- criar verificação das senhas
    // 2- criar uma API, ou usar a daorigamid e ver se o email já foi cadastrado.
    // 3- caso esteja tudo certo, cadastrar o novo usuário
  };

  return (
    <div className={styles.formulario}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1 className={'title'}>Cadastre-se</h1>
        <Input
          label={'Usuario'}
          type={'text'}
          name={'username'}
          {...username}
        />
        <Input label={'Email'} type={'email'} name={'email'} {...email} />
        <Input label={'Senha'} type={'password'} name={'password'} {...senha} />
        {loading && (
          <Botao disabled={true}>
            <div className="loading"></div>
          </Botao>
        )}
        {!loading && <Botao>Cadastrar</Botao>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default LoginCadastrar;
