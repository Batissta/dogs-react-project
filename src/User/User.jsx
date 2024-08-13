import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPostar from './UserPostar.jsx';
import UserEstatisticas from './UserEstatisticas.jsx';
import { UserContext } from '../UserContext.jsx';
import NotFound from '../NotFound.jsx';
import Head from '../helper/Head.jsx';

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section>
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPostar />} />
        <Route path="estatisticas" element={<UserEstatisticas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
