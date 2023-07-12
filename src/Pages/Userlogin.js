import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

const LoginForm = () => {
  const { loginUser, authTokens, user } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting form...');
    loginUser(username, password);
  };

  console.log('Rendering LoginForm...');

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Login</button>
      <div>
        <p>authTokens: {authTokens}</p>
        <p>user: {user}</p>
      </div>
    </form>
  );
};

export default LoginForm;