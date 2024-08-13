import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './Login.module.css';
import LoginForm from './LoginForm';
import LoginRecuperar from './LoginRecuperar';
import LoginCadastrar from './LoginCadastrar';
import { UserContext } from '../UserContext';
import NotFound from '../NotFound';
import LoginResetSenha from './LoginResetSenha';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.loginContainer}>
      <img src="https://dogs.origamid.dev/assets/login-800344e4.jpg" alt="" />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="recuperar" element={<LoginRecuperar />} />
        <Route path="cadastrar" element={<LoginCadastrar />} />
        <Route path="resetar/:token" element={<LoginResetSenha />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default Login;
