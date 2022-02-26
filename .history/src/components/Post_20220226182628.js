import React from 'react';
import {UserContext} from '../App';

const Post = ({image, content, user}) => {
  return (
    <UserContext.Consumer>
      {currentUser => (
        <React.Fragment>
          {image &&
            <img
              style={{height: 100, width: 200, objectFit: 'cover'}}
              src={URL.createObjectURL (image)}
              alt="something"
            />}
          <p>{content}</p>
          <div style={{color: currentUser === user && 'green'}}>{user}</div>
        </React.Fragment>
      )}
    </UserContext.Consumer>
  );
};

export default Post;
