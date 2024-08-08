import React from 'react';
import Logo from '../Assets/dogs.svg';
import UsuarioFoto from '../Assets/usuario.svg';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.headerBg}>
      <nav className={styles.header + ' container'}>
        <Link to="/" className={styles.headerLogo}>
          <img src={Logo} alt="Logo Dogs" className={styles.headerLogoImagem} />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.linkHeader}>
            {data.nome}
            <img
              src={UsuarioFoto}
              alt="Ilustração de usuário"
              className={styles.linkHeaderImg}
            />
          </Link>
        ) : (
          <Link to="/login" className={styles.linkHeader}>
            {'Login / Criar'}
            <img
              src={UsuarioFoto}
              alt="Ilustração de usuário"
              className={styles.linkHeaderImg}
            />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
