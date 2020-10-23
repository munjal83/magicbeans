import React from 'react';
import './LoginRegister.scss';
import Login from '../../components/login/Login';
import Signup from '../../components/signup/SignUp';

const LoginRegister = () => {
    return (
        <div className='login-register'>
            <Login/>
            <Signup/>
        </div>
    )
}

export default LoginRegister;
