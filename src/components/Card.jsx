import { Heart, IndianRupee } from "lucide-react";
import React from "react";

function Card({ product }) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow max-w-70 max-h-80">
      <img
        className="rounded-md w-full h-1/2 object-cover"
        src={product.src}
        alt=""
      />
      <p className="text-gray-100 text-xl font-semibold uppercase mt-2">
        {product.productName}
      </p>
      <p className="text-gray-100 text-sm py-1">{product.desc}</p>
      <p className="text-green-500 font-semibold  mb-3">₹ {product.price}/-</p>

      <button className="bg-orange-600 px-5 py-1 mt-3 rounded-md">Buy</button>
    </div>
  );
}

export default Card;
