import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Header from "../components/common/Header";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import RecruitmentPage from "./Recruitment/RecruitmentPage";
import ContactPage from "./ContactPage";
import Footer from "../components/common/Footer";
import Responsive from "../components/common/Responsive";
import DeveloperApplyMainPage from "./Recruitment/DeveloperApplyMainPage";
import DeveloperApplyFormPage from "./Recruitment/DeveloperApplyFormPage";
import ListPage from "./ListPage";
import FirstListPass from "./FirstListPass";
import FirstListFail from "./FirstListFail";
import FinalList from "./FinalList";
import ThankYou from "./ThankYou";
import DeveloperApplyInternPage from "./Recruitment/DeveloperApplyInternPage";
import DeveloperApplyLeadPage from "./Recruitment/DeveloperApplyLeadPage";
import DesignerApplyMainPage from "./Recruitment/DesignerApplyMainPage";
import DesignerApplyFormPage from "./Recruitment/DesignerApplyFormPage";

const Main = styled(Responsive)`
    min-height: calc(100vh - 14rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const HomepageRoutes = () => {
    const [menu, setMenu] = useState("ABOUT");
    const onSelect = useCallback((menu) => setMenu(menu), []);

    return (
        <>
        <Header menu={menu} onSelect={onSelect} />
        <Main>
            <Routes>
            <Route element={<AboutPage />} path="/" exact />
            <Route element={<ProjectPage />} path="/project" />
            <Route element={<RecruitmentPage />} path="/recruitment" />
            <Route element={<ListPage />} path="/list" exact />
            <Route element={<FirstListPass />} path="/list/firstlistpass" />
            <Route element={<FirstListFail />} path="/list/firstlistfail" />
            <Route element={<FinalList />} path="/list/finalresult" />
            <Route element={<DeveloperApplyMainPage />} path="/developer-apply" exact />
            <Route element={<DeveloperApplyFormPage />} path="/developer-apply/form/:userId" exact />
            <Route element={<DeveloperApplyInternPage />} path="/developer-apply/intern" />
            <Route element={<DeveloperApplyLeadPage />} path="/developer-apply/lead" />
            <Route element={<DesignerApplyMainPage />} path="/designer-apply" exact />
            <Route element={<DesignerApplyFormPage />} path="/designer-apply/form" />
            <Route element={<ContactPage />} path="/contact" />
            <Route element={<ThankYou />} path="/thankyou" />
            </Routes>
        </Main>
        <Footer />
        </>
    );
};

export default HomepageRoutes;
