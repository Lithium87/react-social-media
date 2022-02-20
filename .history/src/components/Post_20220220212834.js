import React from 'react';

const Post = ({image, content, user}) => {
  return (
    <React.Fragment>
      {image &&
        <img
          style={{height: 100, width: 200, objectFit: 'cover'}}
          src={URL.createObjectURL (image)}
          alt="something"
        />}
      <p>{content}</p>
      <div>{user}</div>
    </React.Fragment>
  );
};

export default Post;
