import React from 'react';

import './style.css';

import Calendar from '../../../assets/Calendar.svg';

export default function index() {
  return (
    <div className="create-share-btn-container">
      <img src={Calendar} alt="Calendar icon" />
      <div className="create-share-btn-text">
        <p>Create Your Nanny Share</p>
        <p>Takes less than 5 minutes</p>
      </div>
    </div>
  )
}
