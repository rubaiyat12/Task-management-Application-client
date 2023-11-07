import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full'>
        <div className="navbar w-full  z-10 bg-opacity-40 max-w-screen-xl bg-black text-white mx-auto p-3 mb-12">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     
    </div>
    <a className="btn btn-ghost normal-case text-xl">Task Management</a>
  </div>
 
  <div className="navbar-end">
    <a className="btn mr-3"> <Link to="/login"> LogIn</Link></a>
  </div>
</div>
</div>
    );
};

export default Navbar;