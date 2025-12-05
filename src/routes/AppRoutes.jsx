import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ROUTES as ROUTE_PATHS } from '../constants/routes';
import PageLoader from '../components/common/PageLoader';
import RouteWrapper from '../components/common/RouteWrapper';
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route 
          path={ROUTE_PATHS.HOME} 
          element={
            <RouteWrapper>
              <Home />
            </RouteWrapper>
          } 
        />
        <Route 
          path={ROUTE_PATHS.LOGIN} 
          element={
            <RouteWrapper>
              <Login />
            </RouteWrapper>
          } 
        />
        <Route 
          path={ROUTE_PATHS.NOT_FOUND} 
          element={
            <RouteWrapper>
              <NotFound />
            </RouteWrapper>
          } 
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
