import React from 'react';
import FotoConteudo from '../Foto/FotoConteudo.jsx';
import styles from './FeedModal.module.css';
import useFetch from '../Hooks/useFetch.jsx';
import { FOTO_GET } from '../api.jsx';
import Loading from '../helper/Loading.jsx';

const FeedModal = ({ foto, setModalFoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = FOTO_GET(foto.id);
    request(url, options);
  }, [foto, request]);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) setModalFoto(null);
  };
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <p className="error"></p>}
      {loading && <Loading />}
      {data && <FotoConteudo data={data} />}
    </div>
  );
};

export default FeedModal;
