import { Routes, Route} from 'react-router';
import styled from "styled-components";
import Responsive from "../../components/common/Responsive";
import AdminLogin from './AdminLogin';
import AdminLead from './AdminLead';
import AdminIntern from './AdminIntern';
import AdminDesign from './AdminDesign';

const Main = styled(Responsive)`
    min-height: calc(100vh - 14rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const AdminRoutes = () => {
    return (
        <Main>
        <Routes>
            <Route path="/" element={<AdminLogin/>} />
            <Route path="/applylist/lead" element={<AdminLead />} />
            <Route path="/applylist/intern" element={<AdminIntern />} />
            <Route path="/applylist/design" element={<AdminDesign />} />
        </Routes>
        </Main>
    );
};

export default AdminRoutes;