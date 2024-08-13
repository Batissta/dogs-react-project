import React from 'react';
import styles from './FeedFotos.module.css';
import useFetch from '../Hooks/useFetch.jsx';
import FeedFotoItem from './FeedFotoItem.jsx';
import { FOTOS_GET } from '../api.jsx';
import Loading from '../helper/Loading.jsx';

const FeedFotos = ({ setInfinite, page, user, setModalFoto }) => {
  const { data, loading, request } = useFetch();

  React.useEffect(() => {
    const fetchFotos = async () => {
      const total = 6;
      const { url, options } = FOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    };
    fetchFotos();
  }, [request, user, page, setInfinite]);

  if (loading) return <Loading />;
  else
    return (
      <ul className={styles.feed}>
        {data &&
          data.map((foto) => (
            <FeedFotoItem
              key={foto.id}
              foto={foto}
              setModalFoto={setModalFoto}
            />
          ))}
      </ul>
    );
};

export default FeedFotos;
