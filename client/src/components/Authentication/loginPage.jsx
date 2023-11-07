import './auth.css'
import { useState } from 'react';


const LoginPage = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    const result = await login(username, password); // login should return some result
    // Check if login was successful based on the returned result
    if (result.success) { // Adjust depending on how your login function signals success
       // Redirect to the homepage
    } else {
      console.log('Login failed'); // Placeholder for error handling
    }
  };

  return (
    <div className="auth-page login-page">
      <form className="auth-form" >
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;