import React from "react";
import { useNavigate } from "react-router-dom";

const SearchFood = () => {
    let navigate = useNavigate();
    const handleChange = (value) => {
        navigate(`/${value}`)
    }
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-5">
      <div className="form-control mr-0 md:mr-3 mb-3 md:mb-0">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search your favourite foods..."
            className="input input-bordered w-[270px]"
          />
          <button className="btn btn-square" onClick={event => handleChange(event.target.parentNode.parentNode.children[0].value)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Search bar ends */}
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
    </div>
  );
};

export default SearchFood;
