import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
  useReducer,
} from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import postReducer from './reducer';

export const UserContext = createContext ();
export const PostContext = createContext ({
  posts: [],
});

const App = () => {
  const initialPostState = useContext (PostContext);
  const [state, dispatch] = useReducer (postReducer, initialPostState);
  const [user, setUser] = useState ('');
  //const [posts, setPosts] = useState ([]);

  useEffect (
    () => {
      document.title = user ? `${user}'s Feed` : 'Please, log in';
    },
    [user]
  );

  // const handleAddPost = useCallback (
  //   newPost => {
  //     setPosts ([newPost, ...state.posts]);
  //   },
  //   [posts]
  // );

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <PostContext.Provider value={{state, dispatch}}>
      <UserContext.Provider value={user}>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
};

export default App;
