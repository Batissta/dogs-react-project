import React from 'react';
import styles from './UserHeader.module.css';
import UserHeaderNav from './UserHeaderNav';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      case '/conta/postar':
        setTitle('Poste sua foto');
        break;
      default:
        setTitle('Minha Conta');
        break;
    }
  }, [location]);
  return (
    <header className={`${styles.header} container`}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
