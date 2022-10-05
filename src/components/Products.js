import React from "react";

const Products = ({ product, handleAddCart }) => {
  const {
    price,
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
          <h4 className="text-[1.25rem] font-semibold text-orange-500">Price: {price}</h4>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=> handleAddCart(product)}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
