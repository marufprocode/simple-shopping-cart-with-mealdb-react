import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Foods from './Foods';

const FoundFood = () => {
    const foods = useLoaderData();
    const foundFoods = foods.meals;
    console.log(foundFoods);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mx-5 lg:mx-10 my-5'>
            {
                foundFoods.map(foods => <Foods key={foods.idMeal} foods={foods}/>)
            }
        </div>
    );
};

export default FoundFood;