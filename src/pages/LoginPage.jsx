import React, { lazy, useContext, useEffect } from 'react';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router';

const LoginForm = lazy(() => import('../components/LoginForm'));

const LoginPage = () => {
  const { loginData } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginData?.success) navigate('/');
  }, [loginData]);

  return <LoginForm />;
};

export default LoginPage;
