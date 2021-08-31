import React from 'react';

import './style.css';

import CreateShareBtn from './CreateShareBtn/';
import LinkBar from './LinkBar/'

export default function Footer() {
  return (
    <div className="footer-container">
      <h2 className="footer-title">Become a nanny share host</h2>
      <p className="footer-subtitle">Takes less than 5 minutes to get started</p>
      <CreateShareBtn />
      <span className="footer-link">Or browse local nanny-shares</span>
      <LinkBar />
      <p className="copyright">Copyright © 2017 Hapu PTY Limited All rights reserved</p>
    </div>
  )
}
