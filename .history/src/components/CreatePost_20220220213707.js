import React, {useState, useRef} from 'react';

const CreatePost = ({user, handleAddPost}) => {
  const [content, setContent] = useState ('');
  const [image, setImage] = useState (null);

  const imageInputRef = useRef ();

  const handleSubmit = event => {
    event.preventDefault ();
    const post = {content, image, user};
    handleAddPost (post);
    setContent ('');
    imageInputRef.current.value = '';
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Post Content"
          value={content}
          onChange={event => setContent (event.target.value)}
        />
        <input
          type="file"
          onChange={event => setImage (event.target.files[0])}
          ref={imageInputRef}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
