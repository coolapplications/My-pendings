import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar navbar-dark bg-dark d-flex justify-content-between'>
        <a className='navbar-brand'>My Pendings</a>
        <div>
          <Link className='mr-1' to='/todos'>
            List To Dos
          </Link>
          <Link className='ml-1' to='/create'>
            Create To Do
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
