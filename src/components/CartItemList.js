import React from 'react';

const CartItemList = ({index, item, handleRemoveItem}) => {
    return (
        <tr>
              <th>{index+1}</th>
              <td className="flex">
                <img
                  src={item.strCategoryThumb? item.strCategoryThumb:item.strMealThumb}
                  alt="product-img"
                  width={"50px"}
                  height={"60px"}
                />
                <div className="des ml-2">
                  <p>{item.strCategory? item.strCategory: item.strMeal}</p>
                  <p>$ <span>{item.price}</span> </p>
                  <p className="text-red-600 cursor-pointer" onClick={()=> handleRemoveItem(item)}>remove</p>
                </div>
              </td>
              <td>
                <div className="flex items-center">
                  <button className="btn btn-xs text-white bg-gray-600">-</button>
                  <p className="px-2 mx-1 font-semibold border">{item.quantity}</p>
                  <button className="btn btn-xs text-white bg-gray-600">+</button>
                </div>
              </td>
              <td>$ <span>{item.eachTotal}</span></td>
            </tr>
    );
};

export default CartItemList;