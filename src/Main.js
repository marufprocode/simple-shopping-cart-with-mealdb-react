import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchFood from './components/SearchFood';

const Main = () => {
    const [cartItems, setCartItems] = useState(null);
    const handleAddCart = (items) => {
        let addedItems = [];
        if (!cartItems){
            addedItems.push(items);
            addedItems.forEach(item => item.quantity = 1);
            setCartItems(addedItems);
            localStorage.setItem("cart-items", JSON.stringify(addedItems));
        } else{
            const isExist = cartItems.find(item => items.idCategory === item.idCategory);
            if(isExist){
                isExist.quantity = parseInt(isExist.quantity)+1;
            } else{
                const newItems = items;
                newItems.quantity = 1;
                addedItems = [...cartItems, newItems];
                setCartItems(addedItems);
                localStorage.setItem("cart-items", JSON.stringify(addedItems));
            }
        }  
    };
/*     const handleAddCart = (item) => {
        console.log(item);
    }; */
    return (
        <div>
            <Navbar/>
            <SearchFood/>
            <Outlet context={handleAddCart}/>
        </div>
    );
};

export default Main;