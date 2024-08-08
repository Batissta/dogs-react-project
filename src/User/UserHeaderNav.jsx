import React from 'react';
import styles from './UserHeaderNav.module.css';
import { UserContext } from '../UserContext.jsx';
import { NavLink, useLocation } from 'react-router-dom';
import feed from '../Assets/feed.svg';
import estatisticas from '../Assets/estatisticas.svg';
import adicionar from '../Assets/adicionar.svg';
import sair from '../Assets/sair.svg';
import useMedia from '../Hooks/useMedia.jsx';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(width <= 600px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileBotao} ${
            mobileMenu && styles.mobileBotaoAtivo
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile && styles.navMobile} ${!mobile && styles.nav} ${
          mobileMenu && styles.navMobileAtivo
        }`}
      >
        <NavLink to="/conta" end>
          <img src={feed} alt="'Feed' ilustração" />
          {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <img src={estatisticas} alt="'Estatisticas' ilustração" />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <img src={adicionar} alt="'Adicionar Foto' ilustração" />
          {mobile && 'Adicionar foto'}
        </NavLink>
        <button onClick={userLogout}>
          <img src={sair} alt="" />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
