import React from 'react';
import './style.css';

import HeaderTop from './components/HeaderTop';
import HeaderTitle from './components/HeaderTitle/';

import ImageHeader from '../../assets/ImageHeader.svg';


export default function Header() {
  return (
    <div className="header-container">
      <HeaderTop />
      <div className="header-middle-section">
        <HeaderTitle />
        <img src={ImageHeader} alt="Header" />
      </div>
    </div>
  )
}
