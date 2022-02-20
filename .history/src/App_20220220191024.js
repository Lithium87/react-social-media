import React, {useState} from 'react';
import Login from './components/Login';
import Header from './components/Header';

const App = () => {
  const [user, setUser] = useState ('');

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
