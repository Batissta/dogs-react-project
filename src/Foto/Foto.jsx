import React from 'react';
import FotoConteudo from './FotoConteudo.jsx';
import useFetch from '../Hooks/useFetch.jsx';
import Loading from '../helper/Loading.jsx';
import { useParams } from 'react-router-dom';
import { FOTOSINGLE_GET } from '../api.jsx';
import Head from '../helper/Head.jsx';

const Foto = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    const { url, options } = FOTOSINGLE_GET(id);
    request(url, options);
  }, []);
  if (error) return <p className="error"></p>;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />

        <FotoConteudo single={true} data={data} />
      </section>
    );
};

export default Foto;
