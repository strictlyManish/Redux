import { createSlice } from "@reduxjs/toolkit";

const ProductReducer = createSlice({
  name: "product",
  initialState: {
    products: [
      {
        id: 1,
        productName: "HeadPhone",
        desc: "bluetooth & wireless headphone",
        price: 6000,
        src: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=700&auto=format&fit=crop",
      },
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
      {
        id: 4,
        productName: "Smart Watch",
        desc: "Fitness tracking smartwatch",
        price: 8000,
        src: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&auto=format&fit=crop",
      },
      {
        id: 5,
        productName: "Keyboard",
        desc: "Mechanical gaming keyboard",
        price: 3500,
        src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop",
      },
      {
        id: 6,
        productName: "Mouse",
        desc: "Wireless gaming mouse",
        price: 2000,
        src: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&auto=format&fit=crop",
      },
      {
        id: 7,
        productName: "Speaker",
        desc: "Portable bluetooth speaker",
        price: 4500,
        src: "https://images.unsplash.com/photo-1531104985437-603d6490e6d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 8,
        productName: "Tablet",
        desc: "10-inch Android tablet",
        price: 18000,
        src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&auto=format&fit=crop",
      },
    ],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = ProductReducer.actions;
export default ProductReducer.reducer;
