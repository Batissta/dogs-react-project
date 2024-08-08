import React from 'react';
import styles from './FeedFotoItem.module.css';

const FeedFotoItem = ({ foto }) => {
  return (
    <li className={styles.foto}>
      <img src={foto.src} alt={foto.title} />
      <span>{foto.acessos}</span>
    </li>
  );
};

export default FeedFotoItem;
