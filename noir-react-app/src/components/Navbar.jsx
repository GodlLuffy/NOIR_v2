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
        <a 
          href="https://github.com/GodlLuffy/NOIR_v2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-500"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
