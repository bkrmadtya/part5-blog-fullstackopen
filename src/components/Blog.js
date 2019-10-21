import React, { useState } from 'react';

const Blog = ({ blog, updateBlog }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const blogStyle = {
    border: '1px solid black',
    borderRadius: 5,
    // backgroundColor: '#ccc',
    padding: 10,
    marginTop: 5
  };

  const likeBlog = () => {
    blog.likes++;
    updateBlog(blog);
  };

  return (
    <div style={blogStyle}>
      <div onClick={toggleDetails}>
        {blog.title} {blog.author}
      </div>
      {showDetails && (
        <div>
          <div>
            <a href={blog.url} target="_">
              {blog.url}
            </a>
          </div>
          <div>
            {blog.likes} likes
            <button onClick={likeBlog}>like</button>
          </div>
          <div>added by {blog.user.username}</div>
        </div>
      )}
    </div>
  );
};

export default Blog;
