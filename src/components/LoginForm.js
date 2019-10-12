import React from 'react';

const LoginForm = ({
  handleLogin,
  username,
  password,
  handleUsernameChange,
  handlePasswordChange
}) => {
  return (
    <form onSubmit={handleLogin}>
      <div>
        username{' '}
        <input
          type="text"
          name="username"
          value={username}
          onChange={({ target }) => handleUsernameChange(target.value)}
        ></input>
      </div>
      <div>
        password{' '}
        <input
          type="password"
          name="password"
          value={password}
          onChange={({ target }) => handlePasswordChange(target.value)}
        ></input>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
