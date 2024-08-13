import React from 'react';
import styles from './UserPostar.module.css';
import Input from '../Components/forms/Input.jsx';
import Botao from '../Components/forms/Botao.jsx';
import useForm from '../Hooks/useForm.jsx';
import useFetch from '../Hooks/useFetch.jsx';
import { FOTO_POST } from '../api.jsx';
import { useNavigate } from 'react-router-dom';
import Head from '../helper/Head.jsx';

const UserPostar = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data]);

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = FOTO_POST(formData, token);
    request(url, options);
  };
  return (
    <section className={`${styles.fotoPost} container mainContainer`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input type="file" name="img" onChange={handleImgChange} />
        {loading && (
          <Botao disabled>
            <div className="loading"></div>
          </Botao>
        )}
        {!loading && <Botao>Enviar</Botao>}
        {error && <p className="error">{error}</p>}
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
      <Head title="Poste sua foto" />
    </section>
  );
};

export default UserPostar;
