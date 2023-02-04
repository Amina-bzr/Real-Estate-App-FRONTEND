import React, { useState } from 'react';
import { useCallback,useEffect, useRef } from 'react';
import './Contactus.css';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const email = "mailto:appartapplication@gmail.com?";
    const subject = "subject=Contact%20Form%20Submission";
    const body = `body=Name:%20${formData.name}%0AEmail:%20${formData.email}%0AMessage:%20${formData.message}`;
    window.location.href = `${email}${subject}&${body}`;
  };

  return (
    <div className='contact-form'>
        <h1>Contactez nous</h1>
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default ContactUs;





