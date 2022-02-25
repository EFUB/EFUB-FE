import { Routes, Route } from 'react-router';
import {
  RecruitmentMainPage,
  RecruitmentDeveloperPage,
  RecruitmentDesignerPage,
  RecruitmentPassPage,
  RecruitmentThankyouPage,
} from '../pages/Recruitment/indexRecruitment';

const RecruitmentRoutes = ({ onSelect }) => {
  return (
    <Routes>
      <Route path="/" element={<RecruitmentMainPage onSelect={onSelect} />} />
      {/* <Route path="/developer" element={<RecruitmentDeveloperPage />} />
      <Route path="/designer" element={<RecruitmentDesignerPage />} /> */}
      <Route path="/pass" element={<RecruitmentPassPage />} />
      <Route
        path="/developer/thankyou"
        element={<RecruitmentThankyouPage onSelect={onSelect} />}
      />
      <Route
        path="/designer/thankyou"
        element={<RecruitmentThankyouPage onSelect={onSelect} />}
      />
    </Routes>
  );
};

export default RecruitmentRoutes;
