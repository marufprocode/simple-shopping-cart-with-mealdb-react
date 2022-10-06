import React from "react";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  const {
    strCategory: category,
    strCategoryThumb: img,
    strCategoryDescription: description,
  } = product;
  return (
    <Link to ={`/products/${category}`}>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center mx-auto">{category}</h2>
          <p className="text-center mx-auto">{description.slice(1, 80)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default Products;
