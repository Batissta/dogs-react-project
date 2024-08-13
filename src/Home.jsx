import React from 'react';
import Feed from './Feed/Feed.jsx';
import Loading from './helper/Loading.jsx';
import Head from './helper/Head.jsx';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" />
      <Feed />
    </section>
  );
};

export default Home;
