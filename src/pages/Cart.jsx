import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.value);

  const cartPrice = cartItems.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  return (
    <div className="h-screen px-15 flex w-fit flex-col gap-2 relative">
      {cartItems.map((obj) => (
        <div
          key={obj.id}
          className="bg-gray-700 flex gap-5 items-center p-5 rounded"
        >
          <div>
            <img
              src={obj.src}
              className="h-full w-20 object-contain rounded"
              alt=""
            />
          </div>
          <div>
            <p>{obj.productName}</p>
            <p>{obj.desc}</p>
            <p className="text-right p-2">₹ {obj.price}</p>
          </div>
        </div>
      ))}

      <hr />

      <div className="flex flex-col gap-2 relative py-2">
        <p className="font-semibold">Grand Total</p>
        <p className="text-lg font-bold absolute right-0">₹ {cartPrice}</p>

        <button className="bg-blue-500 px-10 py-2 rounded">
          Pay
        </button>
      </div>
    </div>
  );
}

export default Cart;
