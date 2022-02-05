import React, {useState} from 'react';
import InputLine from '../../components/common/InputLine';
import Button from '../../components/common/Button';
import AdminMain from './AdminMain';

const AdminLogin = () => {
    const [login, setLogin] = useState(false);
    const _handleLogin = () => {
        setLogin(!login);
    }
    return (
        <>
        {
            login ? (
                <AdminMain />
            ) : (
                <>
                <h1 style={{marginBottom: "5rem"}}>EFUB ADMIN</h1>
                <InputLine placeholder="ID" width="20rem"/>
                <InputLine type="password" placeholder="Password" width="20rem" />
                <Button width={20} onClick={_handleLogin}>로그인</Button>
                </>
            )
        }
        </>
    );
};

export default AdminLogin;