import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
  };

  const handleClick = () => {
    console.log('Button clicked!');
    navigate('/login');
  };

  return (
    <div
      style={{
        width: '300px',
        margin: '80px auto', 
        border: '1px solid black',
        padding: '20px',
        backgroundColor: 'grey',
        textAlign: 'center', 
      }}
    >
      <form onSubmit={handleSubmit}>
        <label style={{ marginBottom: '10px' }}>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{
              padding: '5px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '3px',
              backgroundColor: 'ButtonShadow',
            }}
            placeholder="First Name"
            required
          />
        </label>
        <br />
        <label style={{ marginBottom: '10px' }}>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{
              padding: '5px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '3px',
              backgroundColor: 'ButtonShadow',
            }}
            placeholder="Last Name"
            required
          />
        </label>
        <br />
        <label style={{ marginBottom: '10px' }}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '5px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: 'ButtonShadow',
            }}
            placeholder="Email"
            required
          />
        </label>
        <br />
        <label style={{ marginBottom: '10px' }}>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{
              padding: '5px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: 'ButtonShadow',
            }}
            placeholder="Phone Number"
            required
          />
        </label>
        <br />
        <label style={{ marginBottom: '10px' }}>
          Address:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{
              padding: '7px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '3px',
              backgroundColor: 'ButtonShadow',
              width: '80%', 
            }}
            placeholder="Address"
            required
          />
        </label>
        <br />
        <br />
        <br />

        <button
          onClick={handleClick}
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            display: 'block', 
            margin: '0 auto', 
          }}
        >
          Submit
        </button>
        <p>
          Already have an account? <a href="Login">Login</a>
        </p>
      </form>
    </div>
  );
};


  export default RegistrationForm;
