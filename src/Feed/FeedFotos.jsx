import React from 'react';
import styles from './FeedFotos.module.css';
import useFetch from '../Hooks/useFetch.jsx';
import FeedFotoItem from './FeedFotoItem.jsx';
import { FOTOS_GET } from '../api.jsx';

const FeedFotos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const fetchFotos = async () => {
      const { url, options } = FOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    };
    fetchFotos();
  }, []);

  if (loading) return <p className="container mainContainer">Carregando...</p>;
  else
    return (
      <ul className={styles.feed}>
        {data && data.map((foto) => <FeedFotoItem key={foto.id} foto={foto} />)}
      </ul>
    );
};

export default FeedFotos;
