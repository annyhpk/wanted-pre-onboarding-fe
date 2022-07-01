import React, { useContext, useEffect } from 'react';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router';

const MainPage = () => {
  const { loginData } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginData?.success) navigate('/login');
  }, [loginData]);

  return (
    <div>
      <h1>hi, Welcome</h1>
    </div>
  );
};

export default MainPage;
