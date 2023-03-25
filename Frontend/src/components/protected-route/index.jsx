import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = useSelector(state => state.auth.userToken);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace={true} />
  );
};

export default ProtectedRoute;
