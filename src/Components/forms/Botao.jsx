import React from 'react';
import styles from './Botao.module.css';

const Botao = ({ children, ...props }) => {
  return (
    <button className={styles.botao} {...props}>
      {children}
    </button>
  );
};

export default Botao;
