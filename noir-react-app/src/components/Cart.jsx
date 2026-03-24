import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const items = [
    {
      id: 1,
      name: "Midnight Velvet Sneaker",
      info: "Handcrafted / Noir Collection",
      price: "$1,240.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXkaCABsxQ2D-G-viIXawoi6yjVARdBOHWDlvAHzTZNkIeuAXxn3VNdfvIG2D4XmUwmoRo75qeXGvsB6LoLOvCQ7kIHLmQAdQbpWr4Ca2mO57o2qLjQyEgAB3_kA9ZbZnJ4f0MuClbSYIxYizPhMLLD-PmR3q2pzXu1qfZL4OFFNUlywh1egvgGkOV3DSvUBjjiWjP0wQPiLpDUOut8G2QU2OXGf1qMrOHBMI-2jVGkUgPN_gTqJtbFrPpoNfU1h_Ezifj9eKqx9U"
    },
    {
      id: 2,
      name: "Obsidian Chronograph",
      info: "Limited Edition / Swiss Movement",
      price: "$4,850.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAanD6qvH_H-Agm7g9Ton6N-89XBnhVXJ1aNnbXk66Xi_bdzbtfhGtu-obazWrN4NtJHUGUBEWzpm-DpOWqOY9KT5hhLaFIVb-QSpu30I7HHPkTi2Gbs6Ifi-9CFb6ZMl2tvOBvUnNa2-ATwyBY_z7wttO0mxPz2Wv5zNFkLP5t7o7l_vhm1FQrAoZkXBsRaP-gqHe1z0oNuL0sSMXoNezS3ytwiBCaFMEsQfH389Z5dUHN1GBxtpM3qD1Tgh7t29MFNFG7jCvE498"
    },
    {
      id: 3,
      name: "Cashmere Shadow Coat",
      info: "Italian Fabric / tailored fit",
      price: "$3,200.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvotiTa-aecLI8gz2fAubgwp13C-tDY6Zk7AX54x2T2tY2NJLprLQFoA70fm3hOtCtVRPqVvAFNi0daC_1iuJKcP9UuENpQ-9sNqcewVbRbh3zZkXwLh8DvukxWBroocl0sdZFHqX69i6sBqOhof8a6w7JAJdHxr0Cg4-jGfP3p3XTxIPhMGqCgXfnsuP1AMcPsOBK3AJFAxw4LLoP5ZtqX-6TKdsxvUryxoHxwvbzABoBcJDSpl2HaDzVjIFAwdTBuCDVYPYZFFs"
    }
  ];

  return (
    <main className="pt-40 pb-32 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Cart Items Container */}
        <div className="flex-1 w-full">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter mb-4">Your Selection</h1>
            <p className="text-neutral-500 font-label tracking-widest uppercase text-xs">3 Masterpieces curated for your collection</p>
          </div>
          <div className="space-y-12">
            {items.map((item) => (
              <div key={item.id} className="group relative flex flex-col md:flex-row items-center gap-8 pb-12 border-b border-outline-variant/10">
                <div className="w-full md:w-48 h-64 overflow-hidden rounded-lg bg-surface-container-low">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                    src={item.image} 
                    alt={item.name}
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-serif font-light text-on-background">{item.name}</h3>
                      <p className="text-outline text-sm uppercase tracking-widest font-body opacity-60">{item.info}</p>
                    </div>
                    <button className="text-outline hover:text-error transition-colors duration-300">
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center border border-outline-variant/20 rounded-full px-4 py-2 gap-6 bg-surface-container-lowest/50">
                      <button className="text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">remove</span></button>
                      <span className="text-on-background font-label text-sm">01</span>
                      <button className="text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">add</span></button>
                    </div>
                    <p className="text-xl font-serif italic text-primary">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checkout Sidebar */}
        <aside className="w-full lg:w-[400px] sticky top-40">
          <div className="glass-panel rounded-2xl p-10 space-y-10 border border-white/5 shadow-2xl">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif italic text-on-background leading-none">Summary</h2>
              <div className="space-y-4 pt-4 border-t border-outline-variant/10">
                <div className="flex justify-between items-center text-sm font-label uppercase tracking-widest text-neutral-500">
                  <span>Subtotal</span>
                  <span className="text-on-background">$9,290.00</span>
                </div>
                <div className="flex justify-between items-center text-sm font-label uppercase tracking-widest text-neutral-500">
                  <span>Shipping</span>
                  <span className="text-on-background text-[10px] tracking-tighter bg-surface-container-high px-2 py-0.5 rounded">Complimentary</span>
                </div>
                <div className="flex justify-between items-center text-sm font-label uppercase tracking-widest text-neutral-500">
                  <span>Tax Estimate</span>
                  <span className="text-on-background">$743.20</span>
                </div>
              </div>
              <div className="flex justify-between items-end pt-8 border-t border-primary/20">
                <span className="text-lg font-serif italic">Total Amount</span>
                <span className="text-3xl font-serif text-primary">$10,033.20</span>
              </div>
            </div>
            <div className="space-y-4">
              <Link 
                to="/checkout"
                className="block w-full text-center py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label uppercase tracking-[0.2em] text-xs font-bold rounded-full transition-all duration-700 hover:scale-[1.02] relative overflow-hidden group shadow-[0_0_30px_rgba(233,193,118,0.2)]"
              >
                <span className="relative z-10">Proceed to Checkout</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
              </Link>
              <p className="text-center text-[10px] text-outline uppercase tracking-widest">Secure payment guaranteed</p>
            </div>
            <div className="pt-6 space-y-4">
              <label className="block text-[10px] font-label uppercase tracking-widest text-outline">Promotion Code</label>
              <div className="relative">
                <input className="w-full bg-transparent border-b border-outline-variant/30 py-2 focus:border-primary focus:ring-0 text-sm font-label tracking-widest uppercase transition-all duration-500 placeholder:text-outline-variant/50" placeholder="ENTER CODE" type="text" />
                <button className="absolute right-0 bottom-2 text-primary text-[10px] font-bold uppercase tracking-widest hover:text-primary-container transition-colors">Apply</button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
