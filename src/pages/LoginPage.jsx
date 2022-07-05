import React, { lazy, useEffect } from 'react';
import { useLoginValue } from '../context/LoginContext';
import { useNavigate } from 'react-router';

const LoginForm = lazy(() => import('../components/LoginForm'));

const LoginPage = () => {
  const loginData = useLoginValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginData?.success) navigate('/');
  }, [loginData]);

  return <LoginForm />;
};

export default LoginPage;
