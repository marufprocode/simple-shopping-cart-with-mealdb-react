import React from "react";
import Navbar from "./Navbar";

const Cart = () => {
  return (
    <div>
      <Navbar />
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
            <tr>
              <th>1</th>
              <td className="flex">
                <img
                  src="https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="product-img"
                  width={"50px"}
                  height={"60px"}
                />
                <div className="des ml-2">
                  <p>Burger</p>
                  <p>$50</p>
                  <p className="text-red-600">remove</p>
                </div>
              </td>
              <td>
                <div className="flex items-center">
                  <button className="btn btn-xs text-white">+</button>
                  <p className="px-2 mx-1 font-semibold border">1</p>
                  <button className="btn btn-xs text-white">-</button>
                </div>
              </td>
              <td>$50</td>
            </tr>
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
                    <p className="py-1">$50</p>
                    <p className="py-1">$5</p>
                    <p className="py-1">$55</p>
                </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
