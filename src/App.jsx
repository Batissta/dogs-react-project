import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Login from './Login/Login.jsx';
import { UserStorage } from './UserContext.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import User from './User/User.jsx';
import Home from './Home.jsx';
import Foto from './Foto/Foto.jsx';
import UserProfile from './User/UserProfile.jsx';
import NotFound from './NotFound.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
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
              <Route path="foto/:id" element={<Foto />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
