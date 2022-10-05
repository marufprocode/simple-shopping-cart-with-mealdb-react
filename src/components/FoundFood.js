import React from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import Foods from './Foods';

const FoundFood = () => {
    const handleAddCart = useOutletContext();
    const foods = useLoaderData();
    const foundFoods = foods.meals;
    if(!foundFoods){
        return <div className="text-3xl font-bold text-center mt-12 text-red-600">No Foods Found, Try another search by category</div> 
    }else{
        foundFoods.forEach(foods => foods.price = (Math.floor(Math.random()*100)))
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mx-5 lg:mx-10 my-5'>
            {
                foundFoods.map(foods => <Foods key={foods.idMeal} foods={foods} handleAddCart={handleAddCart}/>)
            }
        </div>
    );
};

export default FoundFood;