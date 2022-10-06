import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Shop from './Shop';

const Home = () => {
    const [handleAddCart] = useOutletContext();
    return (
        <div>
            <Shop handleAddCart={handleAddCart}/>
        </div>
    );
};

export default Home;