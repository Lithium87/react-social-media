import React, {useContext} from 'react';
import {UserContext, PostContext} from '../App';

const Post = ({image, content, user, id}) => {
  const currentUser = useContext (UserContext);
  const {dispatch} = useContext (PostContext);
  const isCurrentUser = currentUser === user;

  const handleDeletePost = () => {
    dispatch ({type: 'DELETE_POST', payload: {id}});
  };

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
      {isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}
    </React.Fragment>
  );
};

export default Post;
