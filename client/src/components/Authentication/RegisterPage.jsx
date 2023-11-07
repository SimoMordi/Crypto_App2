
import './auth.css'
import  { useState } from 'react';




const RegisterPage = () => {
 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To store any registration errors

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      // Attempt to register the user with the provided username, email, and password
      await register(username, email, password);
      // If registration is successful, redirect to the login page
     
    } catch (err) {
      // If registration fails
      setError(err.message);
    }
  };

  return (
    <div className="auth-page register-page" >
      <form  className="auth-form" onSubmit={handleRegister}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         {error && <p className="error">{error}</p>} 
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;