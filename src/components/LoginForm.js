import React from 'react';

const LoginForm = ({
  handleLogin,
  username,
  password,
  handleUsername,
  handlePassword
}) => {
  return (
    <form onSubmit={handleLogin}>
      <div>
        username{' '}
        <input
          type="text"
          name="username"
          value={username}
          onChange={({ target }) => handleUsername(target.value)}
        ></input>
      </div>
      <div>
        password{' '}
        <input
          type="password"
          name="password"
          value={password}
          onChange={({ target }) => handlePassword(target.value)}
        ></input>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
