import {Routes, Route } from 'react-router';
import {
  RecruitmentMainPage,
  RecruitmentDeveloperPage,
  RecruitmentDesignerPage,
  RecruitmentPassPage,
  RecruitmentThankyouPage,
} from '../pages/Recruitment/indexRecruitment';

const RecruitmentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RecruitmentMainPage />} />
      <Route path="/developer" element={<RecruitmentDeveloperPage />} />
      <Route path="/designer" element={<RecruitmentDesignerPage />} />
      <Route path="/pass" element={<RecruitmentPassPage />} />
      <Route path="/thankyou" element={<RecruitmentThankyouPage />} />
    </Routes>
  );
};

export default RecruitmentRoutes;
