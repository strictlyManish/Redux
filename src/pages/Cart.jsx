import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../app/features/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.value);

  const cartPrice = cartItems.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const dispatch = useDispatch();

  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        {/* Main Grid: 1 column on mobile, 3 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Side: Items List (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((obj) => (
                <div
                  key={obj.id}
                  className="bg-gray-700 p-4 rounded-xl shadow-sm flex items-center gap-4 transition-hover hover:shadow-md"
                >
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-100">
                    <img
                      src={obj.src}
                      className="h-full w-full object-contain"
                      alt={obj.productName}
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3 className="text-lg font-semibold text-white">{obj.productName}</h3>
                      <p className="ml-4 text-orange-600">₹{obj.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-300 line-clamp-2">{obj.desc}</p>
                    <div className="flex items-end justify-between flex-1 mt-2">
                      <button onClick={()=>dispatch(removeToCart(obj.id))} className="text-sm font-medium text-orange-500 hover:text-orange-400 transition">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-gray-600 rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500">Your cart is empty.</p>
              </div>
            )}
          </div>

          {/* Right Side: Order Summary (Spans 1 column) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{cartPrice}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <hr className="border-gray-100" />
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold text-gray-900">Grand Total</span>
                  <span className="text-2xl font-bold text-blue-600">₹{cartPrice}</span>
                </div>
                
                <button className="w-full mt-6 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transform active:scale-[0.98] transition-all shadow-lg shadow-blue-200">
                  Proceed to Pay
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  Secure Checkout Guaranteed
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Cart;