// import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import Home from './components/Home';
import Navbar from './components/Navbar';
import SearchFood from './components/SearchFood';

const Main = () => {
    // const [cartItems, setCartItems] = useState(null);
    /* const handleAddCart = (item) => {
        let addedItems = [];
        if (!cartItems){
            addedItems.push(item);
            setCartItems(addedItems);
        } else{
            addedItems = [...cartItems, item];
            setCartItems(addedItems);
        }   
    }; */
    const handleAddCart = (product) => {
        console.log('clicked');
        console.log(product);
    };
    return (
        <div>
            <Navbar/>
            <SearchFood/>
            <Outlet context={handleAddCart}/>
            {/* <Home handleAdd Cart={handleAddCart}/> */}
        </div>
    );
};

export default Main;