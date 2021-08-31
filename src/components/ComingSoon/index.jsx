import React from 'react';

import './style.css';

import ImageSection5 from '../../assets/ImageSection5.svg'; 

export default function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <img src={ImageSection5} alt="Coming soon" />
      <h2>Coming soon: Nanny Share Daily Diary!</h2>
      <p>With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!</p>
    </div>
  )
}
