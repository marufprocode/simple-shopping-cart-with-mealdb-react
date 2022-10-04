import React from "react";

const Foods = ({ foods }) => {
  console.log(foods);
  const { strMeal, strMealThumb } = foods;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={strMealThumb} alt="products" className="object-contain w-full" />
        </figure>
        <div className="card-body bg-base-200">
          <h2 className="card-title">{strMeal}</h2>
          <p>Lorem ipsum dolor sit nisi?...</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
