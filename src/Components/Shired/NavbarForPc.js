import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const NavbarForPc = () => {
  let navItem=
  <>
   <li className='hover:underline hover:underline-offset-4 '><NavLink to="/" >Home</NavLink></li>
           <li className='hover:underline hover:underline-offset-4 '><NavLink to="/about" >About</NavLink></li>
         <li className='hover:underline hover:underline-offset-4 '><NavLink to="/contact" >Contact</NavLink></li>
           <li className='hover:underline hover:underline-offset-4 '><NavLink to="/terms-of-service">Terms of Service</NavLink></li>
  </>
     return (
        //   <div className="navbar bg-base-100 border-b-2 border-gray-400 sticky top-0 z-20 ">
        //   <div className="flex-1">
        //     <Link to="/" className="btn btn-ghost  text-4xl logo text-gray-900 font-normal x-0 border-b-0">imgpoint</Link>
        //   </div>
        //   <div className="flex-none ">
        //     <ul className="menu menu-horizontal px-1">
        //       <li className='hover:underline hover:underline-offset-4 '><NavLink to="/" >Home</NavLink></li>
        //       <li className='hover:underline hover:underline-offset-4 '><NavLink to="/about" >About</NavLink></li>
        //       <li className='hover:underline hover:underline-offset-4 '><NavLink to="/contact" >Contact</NavLink></li>
        //       <li className='hover:underline hover:underline-offset-4 '><NavLink to="/terms-of-service">Terms of Service</NavLink></li>
        //     </ul>
        //   </div>
        // </div>
        <div className="navbar bg-gray-100 border-b-2 sticky top-0 z-20">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItem}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost  text-4xl logo text-gray-900 font-normal x-0 border-b-0">imgpoint</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItem}
    </ul>
  </div>
</div>
     );
};
export default NavbarForPc;