import React from 'react';

const BlogForm = ({
  handleCreateBlog,
  title,
  author,
  url,
  handleTitleChange,
  handleAuthorChange,
  handleUrlChange
}) => {
  return (
    <form onSubmit={handleCreateBlog}>
      <h2>Create new blog</h2>
      <div>
        title:
        <input
          type="text"
          value={title}
          onChange={({ target }) => handleTitleChange(target.value)}
          required
        />
      </div>
      <div>
        author:
        <input
          type="text"
          value={author}
          onChange={({ target }) => handleAuthorChange(target.value)}
          required
        />
      </div>
      <div>
        url:
        <input
          type="text"
          value={url}
          onChange={({ target }) => handleUrlChange(target.value)}
          required
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default BlogForm;
