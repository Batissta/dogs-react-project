import React from 'react';
import styles from './FeedFotoItem.module.css';
import Image from '../helper/Image';

const FeedFotoItem = ({ foto, setModalFoto }) => {
  const handleClick = () => {
    setModalFoto(foto);
  };
  return (
    <li className={styles.foto} onClick={handleClick}>
      <Image src={foto.src} alt={foto.title} />
      <span>{foto.acessos}</span>
    </li>
  );
};

export default FeedFotoItem;
