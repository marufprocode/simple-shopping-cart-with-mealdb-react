import React, { useEffect, useState } from 'react';
import Products from './Products';
import axios from "axios";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(data => {
            const productsData = data.data.categories;
            productsData.forEach(product => product.price = Math.floor(Math.random() * 100));
            setProducts(productsData);
        });
    },[]);
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mx-5 lg:mx-10 my-5'>
            {
                products.map(product => <Products key={product.idCategory} product={product}/>)
            }
        </div>
    );
};

export default Shop;