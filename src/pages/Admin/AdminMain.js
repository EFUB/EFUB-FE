import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/common/Button';




const AdminMain = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 style={{marginBottom: "1rem"}}>EFUB ADMIN</h1>
            <h3 style={{marginBottom: "3rem"}}>ππ» μ§μμ μ‘°ννκΈ° ππ»</h3>
            <Button width={20} onClick={() => navigate("/admin/applylist/lead")}  style={{ marginBottom: "2rem"}}  >λ¦¬λ κ°λ°μ</Button>
            <Button width={20} onClick={() => navigate("/admin/applylist/intern")} style={{ marginBottom: "2rem"}}>μΈν΄ κ°λ°μ</Button>
            <Button width={20} onClick={() => navigate("/admin/applylist/design")} >λμμ΄λ</Button>
        </>
    );
};

export default AdminMain;