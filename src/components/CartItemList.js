import React from 'react';

const CartItemList = ({index, item, handleRemoveItem, handleQuantityUpdate}) => {
    return (
        <tr>
              <td className='hidden md:table-cell'>{index+1}</td>
              <td className="flex flex-col md:flex-row px-1 md:px-5">
                <img
                  src={item.strCategoryThumb? item.strCategoryThumb:item.strMealThumb}
                  alt="product-img"
                  width={"50px"}
                  height={"60px"}
                />
                <div className="des md:ml-2 text-start max-w-[30px] break-words">
                  <p className='overflow-hidden	w-[120px]'>{item.strCategory? item.strCategory: item.strMeal}</p>
                  <p>$ <span>{item.price}</span> </p>
                  <p className="text-red-600 cursor-pointer" onClick={()=> handleRemoveItem(item)}>remove</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col-reverse md:flex-row items-center">
                  <button className="btn btn-xs text-white bg-gray-600 my-1" onClick={()=> handleQuantityUpdate(item, false)}>-</button>
                  <p className="px-2 mx-1 font-semibold border my-1">{item.quantity}</p>
                  <button className="btn btn-xs text-white bg-gray-600 my-1" onClick={()=> handleQuantityUpdate(item, true)}>+</button>
                </div>
              </td>
              <td>$ <span>{item.eachTotal}</span></td>
            </tr>
    );
};

export default CartItemList;