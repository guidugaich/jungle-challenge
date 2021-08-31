import React from 'react';

import './style.css';

import ImageSection4 from '../../assets/ImageSection4.svg';

export default function Description() {
  return (
    <div className="desc-section-container">
      <h2>A framework built for the long term</h2>
      <p>Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.</p>
      <span className="desc-section-link">Read how Hapu’s tribal background defines our app </span>
      <img src={ImageSection4} alt="Billing history" />
    </div>
  )
}
