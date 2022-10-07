import React from "react";

const Foods = ({ foods, handleAddCart }) => {
  const { strMeal, strMealThumb, price } = foods;
  return (
    <div data-aos="fade-up">
      <div className="card max-w-[350px] h-[450px] bg-base-100 shadow-xl">
        <figure>
          <img src={strMealThumb} alt="products" className="h-[200px] w-[350px]" />
        </figure>
        <div className="card-body bg-base-200">
          <h2 className="card-title">{strMeal}</h2>
          <p>Lorem ipsum dolor sit nisi?...</p>
          <p className="text-[1.25rem] font-semibold text-orange-500">Price: ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=> handleAddCart(foods)}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
