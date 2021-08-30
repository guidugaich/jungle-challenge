import React from 'react';

import './style.css';

import PlayButton from '../../../../assets/PlayButton.svg';

export default function HeaderTitle() {
  return (
    <div className="header-title-container">
      <p className="header-title-main">Easily create or join a local nanny share with Hapu</p>
      <p className="header-description-title">Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
      <div className="play-action">
        <img src={PlayButton} alt="Play button" />
        <span>See hapu in action (27 seconds)</span>
      </div>
    </div>
  )
}
