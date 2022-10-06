import React, { useEffect, useState } from 'react';
import Products from './Products';
import axios from "axios";
import SearchFood from './SearchFood'
import { ProgressBar } from 'react-loader-spinner';

const Shop = () => {
    const [products, setProducts] = useState([]); 
    const [loader, setLoader] = useState(true);
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(data => {
            const productsData = data.data.categories;
            productsData.forEach(product => product.price = Math.floor(Math.random() * 100));
            setProducts(productsData);
            setLoader(false);
        });
    },[]);
    
    return (
        <div>
        <SearchFood/>
        {loader && <div className='flex justify-center'>
                        <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor = '#F4442E'
                barColor = '#51E5FF'
                />
        </div>}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mx-5 lg:mx-10 my-5 min-h-screen'>
            {
                products.map(product => <Products key={product.idCategory} product={product}/>)
            }
        </div>
        </div>
    );
};

export default Shop;