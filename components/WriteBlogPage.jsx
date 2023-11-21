// WriteBlogPage.js

import React, { useState } from 'react';

const WriteBlogPage = () => {
  const [blogContent, setBlogContent] = useState('');

  const handleContentChange = (event) => {
    setBlogContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle blog submission (e.g., send data to server)
    console.log('Blog content:', blogContent);
  };

  return (
    <div>
      <h2>Write a Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Blog Content:
          <textarea value={blogContent} onChange={handleContentChange} />
        </label>
        <button type="submit">Submit Blog</button>
      </form>
    </div>
  );
};

export default WriteBlogPage;
