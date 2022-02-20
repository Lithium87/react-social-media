import React from 'react';

const PostList = ({posts, user}) => {
  return posts.map ((post, i) => (
    <React.Fragment key={i}>
      {post.image &&
        <img
          style={{height: 100, width: 200, objectFit: 'cover'}}
          src={URL.createObjectURL (post.image)}
          alt="something"
        />}
      <p>{post.content}</p>
      <div>{user}</div>
    </React.Fragment>
  ));
};

export default PostList;
