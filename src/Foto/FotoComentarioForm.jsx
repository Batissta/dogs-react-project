import React from 'react';
import useFetch from '../Hooks/useFetch';
import Enviar from '../Assets/enviar.svg?react';
import styles from './FotoComentarioForm.module.css';
import { COMMENT_POST } from '../api';

const FotoComentarioForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((c) => [...c, json]);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${single ? styles.single : ''}`}
    >
      <textarea
        className={styles.textarea}
        id="comentario"
        name="comentario"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default FotoComentarioForm;
