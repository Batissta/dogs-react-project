import React from 'react';
import { Link } from 'react-router-dom';
import stylesLog from './Login.module.css';
import styles from './LoginForm.module.css';
import stylesBtn from '../Components/forms/Botao.module.css';
import Input from '../Components/forms/Input.jsx';
import Botao from '../Components/forms/Botao.jsx';
import useForm from '../Hooks/useForm.jsx';
import { UserContext } from '../UserContext.jsx';
import Head from '../helper/Head.jsx';

const LoginForm = () => {
  const username = useForm('');
  const senha = useForm('');
  const { userLogin, error, loading } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && senha.validate()) {
      userLogin(username.value, senha.value);
    }
  };
  return (
    <div className={stylesLog.formulario}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1 className={'title'}>Login</h1>
        <Input label={'Usuário'} type={'text'} name={'user'} {...username} />
        <Input label={'Senha'} type={'password'} name={'password'} {...senha} />
        {loading && (
          <Botao disabled={true}>
            <div className="loading"></div>
          </Botao>
        )}
        {!loading && <Botao>Entrar</Botao>}
        {error && <p className="error">{error}</p>}
      </form>
      <Link to="recuperar" className={styles.esqueceuSenha}>
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <p>Novo usuário?</p>
        <h2 className="subtitle">Cadastre-se</h2>
        <Link
          to="cadastrar"
          style={{ marginTop: '2rem' }}
          className={stylesBtn.botao}
        >
          Cadastrar
        </Link>
        <Head title="Faça o seu Login" />
      </div>
    </div>
  );
};

export default LoginForm;
