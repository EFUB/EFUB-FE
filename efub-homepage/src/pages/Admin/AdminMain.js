import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/common/Button';




const AdminMain = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 style={{marginBottom: "1rem"}}>EFUB ADMIN</h1>
            <h3 style={{marginBottom: "3rem"}}>👇🏻 지원서 조회하기 👇🏻</h3>
            <Button width={20} onClick={() => navigate("/admin/applylist/lead")}  style={{ marginBottom: "2rem"}}  >리드 개발자</Button>
            <Button width={20} onClick={() => navigate("/admin/applylist/intern")} style={{ marginBottom: "2rem"}}>인턴 개발자</Button>
            <Button width={20} onClick={() => navigate("/admin/applylist/design")} >디자이너</Button>
        </>
    );
};

export default AdminMain;