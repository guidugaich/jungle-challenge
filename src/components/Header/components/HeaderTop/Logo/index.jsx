import React from 'react';

import smile from '../../../../../assets/PathCopy.svg';
import oval from '../../../../../assets/oval.svg';

import './style.css';

export default function Logo() {
  return (
    <div className="header-top-logo-shape">
      <img
        src={smile}
        alt="smile"
        className="header-top-logo-smile"
      />
      <img
        src={oval}
        alt="eye1"
        className="header-top-logo-eye1"
      />
      <img
        src={oval}
        alt="eye2"
        className="header-top-logo-eye2"
      />
    </div>
  )
}
