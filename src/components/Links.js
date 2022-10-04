import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
    return (
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
        </ul>
    );
};

export default Links;