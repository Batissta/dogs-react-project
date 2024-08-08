import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Login from './Login/Login.jsx';
import { UserStorage } from './UserContext.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import User from './User/User.jsx';
import Home from './Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route
            path="/conta/*"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
