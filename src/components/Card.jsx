import { useDispatch } from "react-redux";
import { addToCart } from "../app/features/cartSlice";

function Card({ product }) {

  let dispatch = useDispatch();


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

      <button onClick={()=>dispatch(addToCart(product))} className="bg-orange-600 px-5 py-1 mt-3 rounded-md">Add to cart</button>
    </div>
  );
}

export default Card;
