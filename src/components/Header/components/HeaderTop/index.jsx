import React from 'react';
import Logo from './Logo/';
import NavBar from './NavBar/';
import SignUpBtn from './SignUpBtn';
import SignInBtn from './SignInBtn';

import './style.css';

export default function index() {
  return (
    <div classname="header-top-container">
      <div className="top-left">
        <Logo />
        <NavBar />
      </div>
      <div className="top-right">
        <SignUpBtn />
        <SignInBtn />
      </div>
    </div>
  )
}
