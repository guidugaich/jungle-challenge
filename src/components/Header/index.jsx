import React from 'react';
import HeaderBackground from '../../assets/header-background.svg';
import './style.css';

export default function Header() {
  return (
    <div className="header-container">
      <img src={ HeaderBackground } alt="header background"/>
    </div>
  )
}
