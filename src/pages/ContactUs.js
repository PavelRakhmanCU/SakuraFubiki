import React, { useState } from 'react';

const ContactUsPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Contact Details:
    First Name: ${firstName}
    Last Name: ${lastName}
    Contact Number: ${contactNumber}
    Email: ${email}
    Message: ${message}`);
    console.log('handling form submission');
  };

  return (
    <div className="contact-us-page">
      <form onSubmit={handleSubmit}>
        <h2 className='form-heading'>Get in Touch</h2>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Contact Number:
          <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsPage; 
