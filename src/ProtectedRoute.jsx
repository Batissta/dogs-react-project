import React from 'react';
import { UserContext } from './UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { login, loading } = React.useContext(UserContext);

  if (loading) return <p className="container mainContainer">Carregando...</p>;
  if (login === true) return children;
  else if (!loading && login === false) return <Navigate to="/login" />;
  else return <></>;
};

export default ProtectedRoute;
