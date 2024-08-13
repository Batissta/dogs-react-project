import React from 'react';
import styles from './FotoDelete.module.css';
import { FOTO_DELETE } from '../api';
import useFetch from '../Hooks/useFetch';

const FotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = FOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          <div className="loading"></div>
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default FotoDelete;
