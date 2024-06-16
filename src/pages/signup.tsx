import LoginComponent from '@components/auth/login';
import SignupComponent from '@components/auth/signup';
import AuthLayout from '@layout/authLayout';
import React from 'react';

const Signup = () => {
  return (
    <AuthLayout>
      <SignupComponent />
    </AuthLayout>
  );
};

export default Signup;
