import React, { useState, useEffect } from 'react';

import loginService from './services/login';
import blogService from './services/blogs';
import Notification from './components/Notification';
import LoginForm from './components/LoginForm';
import Blog from './components/Blog';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const func = async () => {
      const blogs = await blogService.getAll();
      console.log(blogs);
      setBlogs(blogs);
    };
    func();
  }, []);

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedBlogappUser');
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson);
      console.log(user);
      setUser(user);
    }
  }, []);

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password
      });

      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user));
      setUser(user);
    } catch (exception) {
      setErrorMessage('Wrong credentials');
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    } finally {
      setUsername('');
      setPassword('');
    }
  };

  const handleLogout = () => {
    window.localStorage.clear();
    setUser(null);
  };

  const allBlogs = () => {
    const usersBlog = blogs.filter(
      blog => blog.user.username === user.username
    );
    return usersBlog.map(blog => <Blog key={blog.id} blog={blog} />);
  };

  return (
    <div>
      <Notification message={errorMessage} />

      {user === null ? (
        <div>
          <h2>Log in to application</h2>
          <LoginForm
            handleLogin={handleLogin}
            username={username}
            password={password}
            handleUsername={value => setUsername(value)}
            handlePassword={value => setPassword(value)}
          />
        </div>
      ) : (
        <div>
          <h2>Blogs</h2>
          <p>{user.name} logged in</p>
          <button onClick={handleLogout}>Logout</button>
          {allBlogs()}
        </div>
      )}
    </div>
  );
}

export default App;
