import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searched = () => {
    const [value, setValue] = useState('');
    let navigate = useNavigate();
    const handleChange = (value) => {
        navigate(`../products/${value}`)
    }
    return (
        <div className="form-control mr-0 md:mr-3 mb-3 md:mb-0">
        <div className="input-group">
          <input
            onKeyUp={(e) =>setValue(e.target.value)}
            type="text"
            placeholder="Search your favourite foods..."
            className="input input-bordered w-[270px]"
          />
          <button className="btn btn-square" onClick={() => handleChange(value)}>
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
    );
};

export default Searched;