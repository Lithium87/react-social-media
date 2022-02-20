import React, {useState} from 'react';

const CreatePost = () => {
  const [content, setContent] = useState ('');
  const [image, setImage] = useState (null);

  return (
    <div>
      <h1>Create New Post</h1>
      <form>
        <input
          type="text"
          placeholder="Add Post Content"
          onChange={event => setContent (event.target.value)}
        />
        <input
          type="file"
          onChange={event => setImage (event.target.files[0])}
        />
        <button type="submit">Submit Post</button>
      </form>
      <p>{content}</p>
      <img src={image} alt="Of" />
    </div>
  );
};

export default CreatePost;
