import React from "react";
import Category from "./Category";
import Searched from "./Searched";

const SearchFood = () => {
    
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-5">
      <Searched/>
      {/* Search bar ends */}
      <Category/>
    </div>
  );
};

export default SearchFood;
