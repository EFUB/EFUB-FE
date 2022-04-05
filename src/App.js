import React from 'react';
import {Routes, Route } from 'react-router-dom';
import AdminRoutes from './pages/Admin/AdminRoutes';
import HomepageRoutes from './routes/HomepageRoutes';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<HomepageRoutes />} path="/*" />
        <Route element={<AdminRoutes />} path="/admin/*" />
      </Routes>
    </>
  );
};

export default App;
