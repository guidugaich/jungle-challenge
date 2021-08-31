import React from 'react';

import './style.css';

import HapuLogo from '../../../assets/HapuLogo.svg';
import Facebook from '../../../assets/Facebook.svg';
import Twitter from '../../../assets/Twitter.svg';
import Instagram from '../../../assets/Instagram.svg';


export default function index() {
  return (
    <div className="footer-link-bar-container">
      <img src={HapuLogo} alt="Hapu logo" />
      <div className="footer-central-links">
        <span>Share Your Nanny</span>
        <span>Our Story</span>
        <span>Blog</span>
        <span>Terms & Privacy</span>
      </div>
      <div className="footer-social-media">
        <div className="social-media-icon">
          <img src={Facebook} alt="Facebook" />
        </div>
        <div className="social-media-icon">
          <img src={Twitter} alt="Facebook" />
        </div>
        <div className="social-media-icon">
        <img src={Instagram} alt="Facebook" />
        </div>
      </div>
    </div>
  )
}
