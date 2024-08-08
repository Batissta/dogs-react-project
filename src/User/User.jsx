import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPostar from './UserPostar.jsx';
import UserEstatisticas from './UserEstatisticas.jsx';

const User = () => {
  return (
    <section>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPostar />} />
        <Route path="estatisticas" element={<UserEstatisticas />} />
      </Routes>
    </section>
  );
};

export default User;
