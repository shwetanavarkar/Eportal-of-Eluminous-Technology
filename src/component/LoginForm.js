import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    // Email validation
    if (!email) {
      formIsValid = false;
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      newErrors.email = 'Email is invalid';
    }

    // Password validation
    if (!password) {
      formIsValid = false;
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform login logic here
      console.log('Form submitted');
    }
  };

  const handleClick = () => {
    console.log('Button clicked!');
     window.open("https://tabler.io/demo/index.html","_self")
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block' }}>Email:</label>
            <input
              type="email"
              style={{ width: '100%', padding: '5px' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email' required
            />
            {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block' }}>Password:</label>
            <input
              type="password"
              style={{ width: '100%', padding: '5px' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password' required
            />
            {errors.password && <span style={{ color: 'red', fontSize: '12px' }}>{errors.password}</span>}
          </div>
          <button onClick={handleClick} style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
          <p> Dont have an account ? <a href="signup"> Sign Up </a> </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;