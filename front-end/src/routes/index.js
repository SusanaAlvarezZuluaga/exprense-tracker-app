import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const PrivateRoutes = () => {
  const isLoggedIn = cookies.get('loggedIn');
  console.log(isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
