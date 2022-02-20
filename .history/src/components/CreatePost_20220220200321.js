import React from 'react';

const CreatePost = () => {
  return (
    <div>
      <h1>Create New Post</h1>
      <form>
        <input type="text" placeholder="Add Post Content" />
        <input type="file" />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
