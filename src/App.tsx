import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Loader from './shared/Loader/Loader';
import AuthGuard from './utils/guards/AuthGuard';

const Main = lazy(() => import('./Layouts'));
const Landing = lazy(() => import('./modules/Landing/Landing'));
const Login = lazy(() => import('./modules/Login/Login'));
const Dashboard = lazy(() => import('./modules/Dashboard/Dashboard'));
const DecisionEngine = lazy(
  () => import('./modules/DecisionEngine/DecisionEngine'),
);
const StatementDetail = lazy(
  () => import('./modules/StatementDetail/StatementDetail'),
);

const JobList = lazy(() => import('./modules/JobList/JobList'));

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <Main>
                <Landing />
              </Main>
            }
          />

          <Route path="login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            }
          />
          <Route
            path="/decisionEngine"
            element={
              <AuthGuard>
                <DecisionEngine />
              </AuthGuard>
            }
          />
          <Route
            path="/joblist"
            element={
              <AuthGuard>
                <JobList />
              </AuthGuard>
            }
          />
          <Route
            path="/joblist/statement/:id"
            element={
              <AuthGuard>
                <StatementDetail />
              </AuthGuard>
            }
          />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
