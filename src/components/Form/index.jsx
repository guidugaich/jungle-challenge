import React, { useState } from 'react';

import './style.css'; 

import Loading from '../Loading/'

const API_URL = 'https://api.jungledevs.com/api/v1/challenge-newsletter/';

export default function Form({title, description, onAction}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formAnswered, setFormAnswered] = useState(false);

  function handleChange({target}) {
    if (target.name === 'name') setName(target.value)
    if (target.name === 'email') setEmail(target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true)

    fetch(API_URL, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email }),
      method: "POST"
    }).then(res => {
      if (res.ok) {
        setFormSuccess(true)
      } else {
        setFormSuccess(false)
      }
      setLoading(false);
      if (!formAnswered) setFormAnswered(true)
    })
  }

  function enableSubmitForm() {
    const emailRegex = /[a-z0-9]+@[a-z0-9]+(\.com)$/gi;
    return emailRegex.test(email);
  }

  return (
    <div className="form-section-container">
      <h3>{title}</h3>
      <p>{description}</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="Your name"
            name="name"
            onChange={handleChange}
            data-testid="name-input"
          />
        </label>
        <label>
          <input
            placeholder="Your email"
            name="email"
            onChange={handleChange}
            data-testid="email-input"
          />
        </label>
        <button
          type="submit"
          disabled={(!enableSubmitForm() && !loading)}
          onClick={onAction}
          data-testid="submit-btn"
        >
          {loading ? <Loading /> : <>Send</>}
        </button>
        {formAnswered && (
          <span
            className={formSuccess ? "form-success" : "form-error"}
          >
            {formSuccess ? "Success!" : "Error. Try again"}
          </span>
        )}
      </form>
    </div>
  )
}
