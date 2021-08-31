import React from 'react';

import './style.css';

import ImageSection3 from '../../assets/ImageSection3.svg';

export default function Payment() {
  return (
    <div className="payment-section-container">
      <img src={ImageSection3} alt="Payments" />
      <div className="payment-section-content">
        <h2>Shared payments made simple</h2>
        <p>Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.</p>
        <span className="payment-section-link">Read how Bridget’s share (without Hapu) ended over $15</span>
      </div>
    </div>
  )
}
