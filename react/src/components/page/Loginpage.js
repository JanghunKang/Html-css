import React from 'react';
import LoginForm2 from '../auth/LoginForm2';
import LoginImage from '../LoginImage';
import KakaoLogin from '../auth/KakaoLogin';

const Loginpage = () => {
  return (
    <div>
      <LoginImage/>
      <LoginForm2/>
      <KakaoLogin/>
    </div>
  );
};

export default Loginpage;