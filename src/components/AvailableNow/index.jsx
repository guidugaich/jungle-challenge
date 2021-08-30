import React from 'react';

import './style.css';

import ProfileImage from '../../assets/ProfileImage.svg';

export default function AvailableNow() {
  return (
    <div className="available-now-container">
      <img src={ProfileImage} alt="Profile" />
      <span className="available-now-link">Sarah's day care available now in North Sydney</span>
      <span className="available-now-schedule">Wednesday, Thursday, Friday - 7:30 - 5:30</span>
    </div>
  )
}
