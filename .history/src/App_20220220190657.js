import React, {useState} from 'react';
import Login from './components/Login';

const App = () => {
  const [user, setUser] = useState ('');

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div className="App">
      app
    </div>
  );
};

export default App;
