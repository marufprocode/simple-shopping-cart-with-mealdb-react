// import React, { useState } from 'react';
import { useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import { useLoaderData, useOutletContext } from "react-router-dom";
import Foods from "./Foods";
import SearchFood from "./SearchFood";
import { useLocation } from "react-router";

const FoundFood = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  const [loader, setLoader] = useState(false);
  const [handleAddCart] = useOutletContext();
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);
  const foods = useLoaderData();
  const foundFoods = foods.meals;
  if (!foundFoods) {
    return (
      <div className="h-screen">
        <div className="text-3xl font-bold text-center mt-12 text-red-600">
          No Foods Found, Try another search by category
        </div>
      </div>
    );
  }
  foundFoods.forEach((foods) => {
    if (!foods.price) foods.price = Math.floor(Math.random() * 100);
  });
  return (
    <>
      <SearchFood />
      {loader && (
        <div className="flex justify-center">
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#F4442E"
            barColor="#51E5FF"
          />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mx-5 lg:mx-10 my-5">
        {foundFoods.map((foods) => (
          <Foods
            key={foods.idMeal}
            foods={foods}
            handleAddCart={handleAddCart}
          />
        ))}
      </div>
    </>
  );
};

export default FoundFood;
