import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Product from "./pages/Product"
import Cart from "./pages/Cart"

function App() {
  return (
    <div className='bg-gray-900 text-white'>
      <Navbar/>
      <Routes>
        <Route path="/products" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App