import React, { useState } from 'react';

const Blog = ({ blog, updateBlog, deleteBlog, blogCreator }) => {
  const [showDetails, setShowDetails] = useState(true);

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

  const enableRemoveIfCreator = () => {
    let result = null;

    if (blogCreator) {
      result = (
        <div>
          <button
            onClick={() => {
              const confirmDelete = window.confirm(
                `Remove blog ${blog.title} by ${blog.author}`
              );

              confirmDelete && deleteBlog(blog);
            }}
          >
            Remove
          </button>
        </div>
      );
    }
    return result;
  };

  enableRemoveIfCreator();

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
          {enableRemoveIfCreator()}
        </div>
      )}
    </div>
  );
};

export default Blog;
