import React, {useState, useEffect, useCallback} from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

const functionsCount = new Set ();

const App = () => {
  const [user, setUser] = useState ('');
  const [posts, setPosts] = useState ([]);
  const [count, setCount] = useState (0);

  useEffect (
    () => {
      document.title = user ? `${user}'s Feed` : 'Please, log in';
    },
    [user]
  );

  const handleAddPost = useCallback (
    newPost => {
      setPosts ([newPost, ...posts]);
    },
    [posts]
  );

  functionsCount.add (handleAddPost);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <React.Fragment>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handleAddPost={handleAddPost} />
      <PostList posts={posts} />
      <button onClick={prev => prev + 1}>
        {count}
      </button>
    </React.Fragment>
  );
};

export default App;
