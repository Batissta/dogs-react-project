import React from 'react';
import FeedModal from './FeedModal.jsx';
import FeedFotos from './FeedFotos.jsx';

const Feed = ({ user }) => {
  const [modalFoto, setModalFoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    const infiniteScroll = () => {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    };
    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);
  return (
    <div className="container mainContainer">
      {modalFoto && <FeedModal foto={modalFoto} setModalFoto={setModalFoto} />}
      {pages.map((pag) => (
        <FeedFotos
          user={user}
          key={pag}
          page={pag}
          setModalFoto={setModalFoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;
