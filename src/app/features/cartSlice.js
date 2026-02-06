import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const CartReducers = createSlice({
  name: "cart",
  initialState: {
    value: [
      {
        id: 2,
        productName: "Laptop",
        desc: "Fully functional laptop",
        price: 70000,
        src: "https://plus.unsplash.com/premium_photo-1681566925827-d1969127dd3d?w=600&auto=format&fit=crop&q=60",
      },
      {
        id: 3,
        productName: "Smartphone",
        desc: "5G Android smartphone",
        price: 25000,
        src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop",
      },
    ],
  },
  reducers: {
    addToCart: (state,action) => {
      state.value.push(action.payload);
      toast.success('Task Added')
    },
  },
});
export const { addToCart } = CartReducers.actions;
export default CartReducers.reducer;
