import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import { ROUTES as ROUTE_PATHS } from '../constants/routes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATHS.HOME} element={<Home />} />
      <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />
      <Route path={ROUTE_PATHS.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
