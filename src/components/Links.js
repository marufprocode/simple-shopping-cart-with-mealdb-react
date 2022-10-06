import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <ul>
            <NavLink to='/home' className={({ isActive }) =>
              isActive ? 'bg-base-300 mx-1 px-5 py-2 rounded-lg' : 'bg-base-100 mx-1 px-5 py-2 rounded-lg'
            }
            ><li>Home</li></NavLink>
            <NavLink to='/about' className={({ isActive }) =>
              isActive ? 'bg-base-300 mx-1 px-5 py-2 rounded-lg' : 'mx-1 bg-base-100 px-5 py-2 rounded-lg'
            }><li>About</li></NavLink>
        </ul>
    );
};

export default NavLinks;