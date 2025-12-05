import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ROUTES as ROUTE_PATHS } from '../constants/routes';
import PageLoader from '../components/common/PageLoader';
import RouteWrapper from '../components/common/RouteWrapper';
const Home = lazy(() => import('../pages/Home'));
const Solutions = lazy(() => import('../pages/Solutions'));
const CaseStudies = lazy(() => import('../pages/CaseStudies'));
const Services = lazy(() => import('../pages/Services'));
const Insights = lazy(() => import('../pages/Insights'));
const About = lazy(() => import('../pages/About'));
const Careers = lazy(() => import('../pages/Careers'));
const Contact = lazy(() => import('../pages/Contact'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Terms = lazy(() => import('../pages/Terms'));
const Refund = lazy(() => import('../pages/Refund'));
const GDPR = lazy(() => import('../pages/GDPR'));
const WebDevelopment = lazy(() => import('../pages/WebDevelopment'));
const AppDevelopment = lazy(() => import('../pages/AppDevelopment'));
const CloudServices = lazy(() => import('../pages/CloudServices'));
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
          path={ROUTE_PATHS.SOLUTIONS} 
          element={
            <RouteWrapper>
              <Solutions />
            </RouteWrapper>
          } 
        />
        <Route 
          path={ROUTE_PATHS.CASE_STUDIES} 
          element={
            <RouteWrapper>
              <CaseStudies />
            </RouteWrapper>
          } 
        />
        <Route 
          path={ROUTE_PATHS.SERVICES} 
          element={
            <RouteWrapper>
              <Services />
            </RouteWrapper>
          } 
        />
        <Route 
          path={ROUTE_PATHS.WEB_DEVELOPMENT} 
          element={
            <RouteWrapper>
              <WebDevelopment />
            </RouteWrapper>
          } 
        />
        <Route 
          path={ROUTE_PATHS.APP_DEVELOPMENT} 
          element={
            <RouteWrapper>
              <AppDevelopment />
            </RouteWrapper>
          } 
        />
        <Route 
          path={ROUTE_PATHS.CLOUD_SERVICES} 
          element={
            <RouteWrapper>
              <CloudServices />
            </RouteWrapper>
          } 
        />
        <Route 
          path={ROUTE_PATHS.INSIGHTS} 
          element={
            <RouteWrapper>
              <Insights />
            </RouteWrapper>
          } 
        />
        <Route 
          path={ROUTE_PATHS.ABOUT} 
          element={
            <RouteWrapper>
              <About />
            </RouteWrapper>
          } 
        />
        <Route 
          path={ROUTE_PATHS.CAREERS} 
          element={
            <RouteWrapper>
              <Careers />
            </RouteWrapper>
          } 
        />
        <Route 
          path={ROUTE_PATHS.CONTACT} 
          element={
            <RouteWrapper>
              <Contact />
            </RouteWrapper>
          } 
        />
        <Route 
          path={ROUTE_PATHS.PRIVACY} 
          element={
            <RouteWrapper>
              <Privacy />
            </RouteWrapper>
          } 
        />
        <Route 
          path={ROUTE_PATHS.TERMS} 
          element={
            <RouteWrapper>
              <Terms />
            </RouteWrapper>
          } 
        />
        <Route 
          path={ROUTE_PATHS.REFUND} 
          element={
            <RouteWrapper>
              <Refund />
            </RouteWrapper>
          } 
        />
        <Route 
          path={ROUTE_PATHS.GDPR} 
          element={
            <RouteWrapper>
              <GDPR />
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
