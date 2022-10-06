import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import SearchFood from './components/SearchFood';

const Main = () => {
    const [cartItems, setCartItems] = useState(null);
    const handleAddCart = (items) => {
        let addedItems = [];
        if (!cartItems){
            addedItems.push(items);
            addedItems.forEach(item => {
                item.quantity = 1; 
                item.eachTotal = item.quantity*item.price;
            });
            setCartItems(addedItems);
            localStorage.setItem("cart-items", JSON.stringify(addedItems));
        } else{
            const isExist = cartItems.find(item => items.idMeal === item.idMeal);
            if(isExist){
                isExist.quantity = parseInt(isExist.quantity)+1;
                isExist.eachTotal = isExist.quantity*isExist.price;
                const restItem = cartItems.filter(item => item.idMeal !== items.idMeal);
                setCartItems([...restItem, isExist]);
                localStorage.setItem("cart-items", JSON.stringify([...restItem, isExist]));
            } else{
                const newItems = items;
                newItems.quantity = 1;
                newItems.eachTotal = newItems.quantity*newItems.price;
                addedItems = [...cartItems, newItems];
                setCartItems(addedItems);
                localStorage.setItem("cart-items", JSON.stringify(addedItems));
            }
        }  
    };
    useEffect(()=>{
        const StoredData = JSON.parse(localStorage.getItem("cart-items"));
        if(StoredData) setCartItems(StoredData);
    },[setCartItems]);

    const handleClearCart = () => {
        const storedData = JSON.parse(localStorage.getItem("cart-items"));
        if (storedData) localStorage.removeItem("cart-items");
        setCartItems(null);
    }

    const handleRemoveItem = (i) => {
        // const storedCart = JSON.parse(localStorage.getItem('cart-items'));
        const filteredCart= cartItems.filter(item => item.idCategory !== i.idCategory || item.idMeal !== i.idMeal);
        setCartItems(filteredCart);
        localStorage.setItem("cart-items", JSON.stringify(filteredCart));
      }

    return (
        <div>
            <Navbar cartItems={cartItems} handleClearCart={handleClearCart}/>
            <Outlet context={[handleAddCart, cartItems, handleRemoveItem]}/>
            <Footer/>
        </div>
    );
};

export default Main;