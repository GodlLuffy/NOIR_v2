import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full border border-white/10 bg-neutral-900/50 backdrop-blur-xl flex justify-between items-center px-10 py-4 z-50 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      <div className="text-2xl font-serif italic text-amber-200 tracking-widest uppercase">
        <Link to="/">NOIR</Link>
      </div>
      <div className="hidden md:flex items-center space-x-12">
        <Link 
          className="text-neutral-400 hover:text-amber-200 transition-all duration-500 font-serif italic tracking-tight hover:scale-105 hover:bg-white/5 px-2 py-1 rounded" 
          to="/"
        >
          Home
        </Link>
        <Link 
          className="text-neutral-400 hover:text-amber-100 transition-all duration-500 font-serif italic tracking-tight hover:scale-105 hover:bg-white/5 px-2 py-1 rounded" 
          to="/shop"
        >
          Shop
        </Link>
        <Link 
          className="text-neutral-400 hover:text-amber-100 transition-all duration-500 font-serif italic tracking-tight hover:scale-105 hover:bg-white/5 px-2 py-1 rounded" 
          to="/about"
        >
          About
        </Link>
        <Link 
          className="text-neutral-400 hover:text-amber-100 transition-all duration-500 font-serif italic tracking-tight hover:scale-105 hover:bg-white/5 px-2 py-1 rounded" 
          to="/admin"
        >
          Dashboard
        </Link>
      </div>
      <div className="flex items-center space-x-6 text-amber-200">
        <button className="hover:scale-105 transition-transform duration-500">
          <span className="material-symbols-outlined">search</span>
        </button>
        <button className="hover:scale-105 transition-transform duration-500 relative">
          <Link to="/cart">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute -top-2 -right-2 bg-primary text-on-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
          </Link>
        </button>
        <button className="hover:scale-105 transition-transform duration-500">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
