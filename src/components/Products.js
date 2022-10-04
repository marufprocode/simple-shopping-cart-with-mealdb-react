import React from "react";

const Products = ({ product }) => {
  const {
    strCategory: category,
    strCategoryThumb: img,
    strCategoryDescription: description,
  } = product;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl h-[500px]">
        <figure>
          <img src={img} alt="products" className="object-contain w-full"/>
        </figure>
        <div className="card-body bg-base-200">
          <h2 className="card-title">{category}</h2>
          <p>{description.slice(0, 50)}...</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
