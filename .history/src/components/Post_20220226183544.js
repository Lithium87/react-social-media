import React, {useContext} from 'react';
import {UserContext} from '../App';

const Post = ({image, content, user}) => {
  const currentUser = useContext (UserContext);
  const isCurrentUser = currentUser === user;

  return (
    <React.Fragment>
      {image &&
        <img
          style={{height: 100, width: 200, objectFit: 'cover'}}
          src={URL.createObjectURL (image)}
          alt="something"
        />}
      <p>{content}</p>
      <div style={{color: isCurrentUser && 'green'}}>{user}</div>
    </React.Fragment>
  );
};

export default Post;
