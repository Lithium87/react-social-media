import React, {useState, useEffect} from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

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
      <PostList posts={posts} />
    </React.Fragment>
  );
};

export default App;
