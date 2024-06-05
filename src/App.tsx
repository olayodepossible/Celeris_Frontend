import { Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

import Main from './Layouts';
import Landing from './modules/Landing/Landing';
import Login from './modules/Login/Login';
import Dashboard from './modules/Dashboard/Dashboard';
import DecisionEngine from './modules/DecisionEngine/DecisionEngine';
import DashboardDetail from './modules/Dashboardcopy/DashboardDetail';
import JobList from './modules/JobList/JobList';
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/creditSearch" element={<DashboardDetail />} />
        <Route path="/decisionEngine" element={<DecisionEngine />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
