import React, { useState } from 'react';

import './style.css'; 

const API_URL = 'https://api.jungledevs.com/api/v1/challenge-newsletter/';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleChange({target}) {
    if (target.name === 'name') setName(target.value)
    if (target.name === 'email') setEmail(target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch(API_URL, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email }),
      method: "POST"
    }).then(r => console.log(r))
  }

  function enableSubmitForm() {
    const emailRegex = /[a-z0-9]+@[a-z0-9]+(\.com)$/gi;
    return emailRegex.test(email);
  }

  return (
    <div className="form-section-container">
      <h3>Are you a parent without a nanny and looking to share?</h3>
      <p>Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="Your name"
            name="name"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            placeholder="Your email"
            name="email"
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          disabled={!enableSubmitForm()}
        >
          Send
        </button>
      </form>
    </div>
  )
}
