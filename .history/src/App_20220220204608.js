import React, {useState, useEffect} from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';

const App = () => {
  const [user, setUser] = useState ('');
  const [posts, setPosts] = useState ([]);

  useEffect (
    () => {
      document.title = user ? `${user}'s Feed` : 'Please, log in';
    },
    [user]
  );

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <React.Fragment>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} setPosts={setPosts} posts={posts} />
      {posts.map ((post, i) => (
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
      ))}
    </React.Fragment>
  );
};

export default App;
