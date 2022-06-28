import React, { lazy } from 'react';

const LoginForm = lazy(() => import('../components/LoginForm'));

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
