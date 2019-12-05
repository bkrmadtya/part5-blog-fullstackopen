import React from "react";
import PropTypes from "prop-types";

const LoginForm = ({
  handleLogin,
  username,
  password,
  handleUsernameChange,
  handlePasswordChange
}) => {
  LoginForm.prototype = {
    handleLogin: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        username{" "}
        <input
          placeholder="username"
          type="text"
          name="username"
          value={username}
          onChange={({ target }) => handleUsernameChange(target.value)}
        ></input>
      </div>
      <div>
        password{" "}
        <input
          placeholder="password"
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
