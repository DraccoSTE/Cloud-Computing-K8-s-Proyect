// login.js
import React, { useState, useEffect } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext'; // Import the context

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { userData, setUserData } = useUser(); // Use context
  const navigate = useNavigate();

  useEffect(() => {
    document.title = userData ? `Welcome, ${userData.email}!` : 'LootBox - Login';
  }, [userData]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      setUserData(response.data); // Set user data in context
      setErrorMessage('');
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Incorrect email or password. Please try again.');
      } else {
        setErrorMessage('An error occurred during login. Please try again later.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit">Iniciar Sesión</button>
      </form>

      {errorMessage && <h2 className="error-message">{errorMessage}</h2>}
    </div>
  );
}

export default LoginPage;