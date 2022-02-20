import React from 'react';
import Login from './components/Login';

const App = () => {
  let user = 'reed';

  if (!user) {
    return <Login />;
  }

  return (
    <div className="App">
      app
    </div>
  );
};

export default App;
