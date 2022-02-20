import React from 'react';

const Post = ({post}) => {
  return (
    <React.Fragment>
      {post.image &&
        <img
          style={{height: 100, width: 200, objectFit: 'cover'}}
          src={URL.createObjectURL (post.image)}
          alt="something"
        />}
      <p>{post.content}</p>
      <div>{post.user}</div>
    </React.Fragment>
  );
};

export default Post;
