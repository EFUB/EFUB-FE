import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Header from "./components/common/Header";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import RecruitmentPage from "./pages/RecruitmentPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/common/Footer";
import Responsive from "./components/common/Responsive";
import DeveloperRecruit from "./pages/DeveloperRecruit";
import DeveloperRecruitSub from "./pages/DeveloperRecruitSub";
import DeveloperRecruitLead from "./pages/DeveloperRecruitLead";
import DeveloperRecruitIntern from "./pages/DeveloperRecruitIntern";
import DesignerRecruit from "./pages/DesignerRecruit";
import ListPage from "./pages/ListPage";
import FirstList from "./pages/FirstList";
import FinalList from "./pages/FinalList";
import DesignerRecruitSub from "./pages/DesignerRecruitSub";
import ThankYou from "./pages/ThankYou";

const Main = styled(Responsive)`
  min-height: calc(100vh - 14rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const App = () => {
  const [menu, setMenu] = useState("About");
  const onSelect = useCallback((menu) => setMenu(menu), []);

  return (
    <>
      <Header menu={menu} onSelect={onSelect} />
      <Main>
        <Switch>
          <Route component={AboutPage} path="/" exact />
          <Route component={ProjectPage} path="/project" />
          <Route component={RecruitmentPage} path="/recruitment" />
          <Route component={ListPage} path="/list" />
          <Route component={FirstList} path="/firstList" />
          <Route component={FinalList} path="/finalList" />
          <Route component={DeveloperRecruit} path="/developerRecruit" />
          <Route component={DeveloperRecruitSub} path="/developerRecruitSub" />
          <Route
            component={DeveloperRecruitLead}
            path="/developerRecruitLead"
          />
          <Route
            component={DeveloperRecruitIntern}
            path="/developerRecruitIntern"
          />
          <Route component={DesignerRecruit} path="/designerRecruit" />
          <Route component={DesignerRecruitSub} path="/designerRecruitSub" />
          <Route component={ContactPage} path="/contact" />
          <Route component={ThankYou} path="/thankyou" />
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default App;
