import React, { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import {
  AboutPage,
  ProjectPage,
  RecruitmentRoutes,
  ContactPage,
} from '../pages/indexHomepage';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Responsive from '../components/common/Responsive';

const Main = styled(Responsive)`
  min-height: calc(100vh - 14rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const HomepageRoutes = () => {
  const [menu, setMenu] = useState('ABOUT');
  const onSelect = useCallback((menu) => setMenu(menu), []);

  return (
    <>
      <Header menu={menu} onSelect={onSelect} />
      <Main>
        <Routes>
          <Route element={<AboutPage />} path="/" />
          <Route element={<ProjectPage />} path="/project" />
          <Route element={<RecruitmentRoutes />} path="/recruitment/*" />
          <Route element={<ContactPage />} path="/contact" />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default HomepageRoutes;
