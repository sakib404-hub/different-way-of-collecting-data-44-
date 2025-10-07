import React, { useState } from 'react';
import LoginForms from '../LoginForms/LoginForms';
import LoginDetails from '../LoginDetails/LoginDetails';

const LoginManagement = () => {
    const [logins, setLogins] = useState([]);

    const handleLoginForm = (newLogin) => {
        const newLogins = [...logins, newLogin];
        setLogins(newLogins);
    }

    return (
        <div>
            <LoginForms handleLoginForm={handleLoginForm}></LoginForms>
            <LoginDetails></LoginDetails>
        </div>
    );
};

export default LoginManagement;