import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// import SearchFood from './components/SearchFood';

const Main = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
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

    const handleQuantityUpdate = (item, isPlus) => {
        let tempCart = [];
        const matchedItem = cartItems.find(cartItem => item.idMeal === cartItem.idMeal);
        // const restItem = cartItems.filter(cartItem => item.idMeal !== cartItem.idMeal);
        if (isPlus){
            matchedItem.quantity = matchedItem.quantity+1;
            matchedItem.eachTotal = matchedItem.quantity*matchedItem.price;
        } else{
            if(matchedItem.quantity>=2){
                matchedItem.quantity = matchedItem.quantity-1;
                matchedItem.eachTotal = matchedItem.quantity*matchedItem.price;
            }
        };
        tempCart = [...cartItems];
        setCartItems(tempCart);
        localStorage.setItem("cart-items", JSON.stringify(tempCart)); 
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
            <Outlet context={[handleAddCart, cartItems, handleRemoveItem, handleQuantityUpdate]}/>
            <Footer/>
        </div>
    );
};

export default Main;