import React from 'react';
import FotoComentarios from './FotoComentarios.jsx';
import styles from './FotoConteudo.module.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext.jsx';
import FotoDelete from './FotoDelete.jsx';
import Image from '../helper/Image.jsx';

const FotoConteudo = ({ data, single }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`${styles.foto} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.detalhes}>
        <div>
          <p className={styles.autor}>
            {user.data && user.data.username === photo.author && (
              <FotoDelete id={photo.id} />
            )}
            {!(user.data && user.data.username === photo.author) && (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.atributos}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade}
              {photo.idade > 0 ? ' anos' : ' ano'}
            </li>
          </ul>
        </div>
      </div>
      <FotoComentarios id={photo.id} comentarios={comments} single={single} />
    </div>
  );
};

export default FotoConteudo;
