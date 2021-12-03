import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Header from "./components/common/Header";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import RecruitmentPage from "./pages/Recruitment/RecruitmentPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/common/Footer";
import Responsive from "./components/common/Responsive";
import DeveloperApplyMainPage from "./pages/Recruitment/DeveloperApplyMainPage";
import DeveloperApplyFormPage from "./pages/Recruitment/DeveloperApplyFormPage";
import ListPage from "./pages/ListPage";
import FirstListPass from "./pages/FirstListPass";
import FirstListFail from "./pages/FirstListFail";
import FinalList from "./pages/FinalList";
import ThankYou from "./pages/ThankYou";
import DeveloperApplyInternPage from "./pages/Recruitment/DeveloperApplyInternPage";
import DeveloperApplyLeadPage from "./pages/Recruitment/DeveloperApplyLeadPage";
import DesignerApplyMainPage from "./pages/Recruitment/DesignerApplyMainPage";
import DesignerApplyFormPage from "./pages/Recruitment/DesignerApplyFormPage";

const Main = styled(Responsive)`
  min-height: calc(100vh - 14rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const App = () => {
  const [menu, setMenu] = useState("ABOUT");
  const onSelect = useCallback((menu) => setMenu(menu), []);

  return (
    <>
      <Header menu={menu} onSelect={onSelect} />
      <Main>
        <Switch>
          <Route component={AboutPage} path="/" exact />
          <Route component={ProjectPage} path="/project" />
          <Route component={RecruitmentPage} path="/recruitment" />
          <Route component={ListPage} path="/list" exact />
          <Route component={FirstListPass} path="/list/firstlistpass" />
          <Route component={FirstListFail} path="/list/firstlistfail" />
          <Route component={FinalList} path="/list/finalresult" />
          <Route component={DeveloperApplyMainPage} path="/developer-apply" exact />
          <Route component={DeveloperApplyFormPage} path="/developer-apply/form" />
          <Route component={DeveloperApplyInternPage} path="/developer-apply/intern" />
          <Route component={DeveloperApplyLeadPage} path="/developer-apply/lead" />
          <Route component={DesignerApplyMainPage} path="/designer-apply" exact />
          <Route component={DesignerApplyFormPage} path="/designer-apply/form" />
          <Route component={ContactPage} path="/contact" />
          <Route component={ThankYou} path="/thankyou" />
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default App;
