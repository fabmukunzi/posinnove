import LoginComponent from '@components/auth/login';
import AuthLayout from '@layout/authLayout';
import React from 'react';

const Login = () => {
  return (
    <AuthLayout>
      <LoginComponent />
    </AuthLayout>
  );
};

export default Login;
