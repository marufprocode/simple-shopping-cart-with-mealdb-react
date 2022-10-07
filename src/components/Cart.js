import React from "react";
import { useOutletContext } from "react-router-dom";
import CartItemList from "./CartItemList";
import { ArrowRightIcon } from '@heroicons/react/24/solid'
// import Navbar from "./Navbar";

const Cart = () => {
  const [, cartItems, handleRemoveItem] =  useOutletContext();
  let subTotal = 0;
  if (cartItems) cartItems.forEach(item => {
    subTotal = subTotal+item.eachTotal;
  });
  if(!cartItems) {
    return (
      <div className="text-center text-2xl md:text-3xl text-red-500 px-5 lg:px-10 py-12 font-semibold min-h-screen">
        No Cart Items Found, Add some foods to your cart 
      </div>
    )
  }
  return (
    <div>
      <div className="overflow-x-auto my-10 px-3 md:px-10 w-[100%]">
        <table className="table max-w-[98%] w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="hidden md:block">No.</th>
              <th>Product</th>
              <th className="text-center md:text-start">Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 , This Table Row Will Create Dinamically--> */}
            { cartItems &&
              cartItems.map((item, index) => <CartItemList key={index} index={index} item={item} handleRemoveItem={handleRemoveItem}/>)
            }
          </tbody>
          <tfoot>
            <tr>
                <td className="hidden md:table-cell"></td>
                <td className=""></td>
                <td>
                    <p className="py-1">Subtotal</p>
                    <p className="py-1">Shipping</p>
                    <p className="py-1">Total</p>
                </td>
                <td>
                    <p className="py-1">$ <span>{subTotal}</span></p>
                    <p className="py-1">$ <span>{subTotal>0? 5:0}</span></p>
                    <p className="py-1">$ {subTotal>0? subTotal+5:0}</p>
                </td>
            </tr>
          </tfoot>
        </table>
        <div className="flex justify-end mt-3"><button className="btn btn-sm btn-info mr-5 md:mr-12">Proceed to Checkout <ArrowRightIcon className="h-5 w-5 text-black"/></button></div>
      </div>
    </div>
  );
};

export default Cart;
