import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = () => {
    let navigate = useNavigate();
    const handleChange = (value) => {
        navigate(`/products/${value}`)
    }
    return (
        <select className="select select-bordered w-80 max-w-xs" defaultValue={'DEFAULT'} onChange={event => handleChange(event.target.value)}>
            <option value="DEFAULT" disabled>
            Pick your favorite Food Category
            </option>
            <option value='seafood'>SeaFood</option>
            <option value='dessert'>Dessert</option>
            <option value='pasta'>Pasta</option>
            <option value='breakfast'>Breakfast</option>
            <option value='beef'>Beef Items</option>
      </select>
    );
};

export default Category;