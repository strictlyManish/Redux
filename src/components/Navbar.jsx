import { Search, ShoppingBag } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.value);






  return (
    <nav className="flex fixed items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 backdrop-blur-xs w-screen transition-all">
      <h1 className="text-2xl bg-gray-700 p-2 rounded">
        Market <span className="text-white bg-orange-500 font-bold rounded px-2">Hub</span>{" "}
      </h1>
      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="/products">Products</a>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <Search />
        </div>

        <Link to={"/cart"} className="relative cursor-pointer">
          <ShoppingBag />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-orange-500 w-4.5 h-4.5 rounded-full">
            {cartItems.length}
          </button>
        </Link>

        <button className="cursor-pointer px-8 py-2 bg-orange-500 hover:bg-orange-600 transition text-white rounded-full">
          Login
        </button>
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${open ? "flex" : "hidden"} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <a href="#" className="block">
          Home
        </a>
        <a href="#" className="block">
          About
        </a>
        <a href="#" className="block">
          Contact
        </a>
        <button className="cursor-pointer px-6 py-2 mt-2 bg-orange-500 hover:bg-orange-600 transition text-white rounded-full text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
