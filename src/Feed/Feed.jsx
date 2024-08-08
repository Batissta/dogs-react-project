import React from 'react';
import FeedModal from './FeedModal.jsx';
import FeedFotos from './FeedFotos.jsx';

const Feed = () => {
  return (
    <div className="container mainContainer">
      <FeedModal />
      <FeedFotos />
    </div>
  );
};

export default Feed;
