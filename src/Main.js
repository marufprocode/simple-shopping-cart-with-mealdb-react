import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchFood from './components/SearchFood';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <SearchFood/>
            <Outlet/>
        </div>
    );
};

export default Main;