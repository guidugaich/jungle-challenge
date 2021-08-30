import React from 'react';

import './style.css';

import ImageSection from '../../assets/ImageSection1.svg';

export default function Hero() {
  return (
    <div className="hero-section-container">
      <div className="hero-section-content">
        <h2>Share your home, nanny and costs</h2>
        <p>You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <span>Hapu means tribe</span> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.</p>
        <span className="hero-section-link">Ready to get started?</span>
      </div>
      <img src={ImageSection} alt="App preview" />
    </div>
  )
}
