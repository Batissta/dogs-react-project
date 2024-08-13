import React from 'react';
import { UserContext } from '../UserContext.jsx';
import FotoComentarioForm from './FotoComentarioForm';
import styles from './FotoComentarios.module.css';

const FotoComentarios = ({ id, ...props }) => {
  const [comments, setComments] = React.useState(() => props.comentarios);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);
  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comentario} ${props.single ? styles.single : ''}`}
      >
        {comments.map((comentario) => (
          <li key={comentario.comment_ID}>
            <b>{comentario.comment_author}: </b>
            <span>{comentario.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <FotoComentarioForm
          single={props.single}
          id={id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default FotoComentarios;
