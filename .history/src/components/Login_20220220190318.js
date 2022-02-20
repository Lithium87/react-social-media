import React, {useState} from 'react';

const Login = () => {
  const [username, setUsername] = useState ('');

  const handleSubmit = event => {
    event.preventDefault ();
  };

  return (
    <div>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={event => setUsername (event.target.value)}
          placeholder="Input username"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
