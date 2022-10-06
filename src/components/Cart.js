import React from "react";
import { useOutletContext } from "react-router-dom";
import CartItemList from "./CartItemList";
// import Navbar from "./Navbar";

const Cart = () => {
  const [, cartItems, handleRemoveItem] =  useOutletContext();
  let subTotal = 0;
  if (cartItems) cartItems.forEach(item => {
    subTotal = subTotal+item.eachTotal;
  });
  if(!cartItems) {
    return (
      <div className="text-center text-3xl text-red-500 py-12 font-semibold">
        No Cart Items Found, Add some foods to your cart 
      </div>
    )
  }
  return (
    <div>
      <div className="overflow-x-auto my-10 px-10">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Product</th>
              <th>Quantity</th>
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
                <th></th>
                <th></th>
                <th>
                    <p className="py-1">Subtotal</p>
                    <p className="py-1">Shipping</p>
                    <p className="py-1">Total</p>
                </th>
                <th>
                    <p className="py-1">$ <span>{subTotal}</span></p>
                    <p className="py-1">$ <span>{subTotal>0? 5:0}</span></p>
                    <p className="py-1">$ {subTotal>0? subTotal+5:0}</p>
                </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
