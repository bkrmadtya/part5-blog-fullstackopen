import React, { useState } from 'react';

const ExtraDetails = ({ blog }) => {
  return (
    <div>
      <div>
        <a href={blog.url} target="_">
          {blog.url}
        </a>
      </div>
      <div>
        {blog.likes} likes
        <button>likes</button>
      </div>
      <div>added by {blog.user.username}</div>
    </div>
  );
};

const Blog = ({ blog }) => {
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

  return (
    <div style={blogStyle}>
      <div onClick={toggleDetails}>
        {blog.title} {blog.author}
      </div>
      {showDetails && <ExtraDetails blog={blog} />}
    </div>
  );
};

export default Blog;
