import React from 'react';

const Header = ({user}) => {
  return (
    <div>
      Welcome, {user}!
      <button>Log out</button>
    </div>
  );
};

export default Header;
