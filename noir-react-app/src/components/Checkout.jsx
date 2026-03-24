import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <main className="min-h-screen pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto animate-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col items-center mb-16">
        <h1 className="font-serif italic text-4xl text-primary tracking-widest uppercase mb-4">NOIR</h1>
        <div className="flex items-center space-x-4 text-[10px] font-label tracking-[0.3em] text-neutral-500">
          <span className="text-primary">01 SHIPPING</span>
          <span className="w-8 h-px bg-neutral-800"></span>
          <span>02 PAYMENT</span>
          <span className="w-8 h-px bg-neutral-800"></span>
          <span>03 REVIEW</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Checkout Form Section */}
        <section className="lg:col-span-7 space-y-12">
          <div className="space-y-8">
            <h2 className="font-serif italic text-3xl text-on-background border-b border-outline-variant/20 pb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {['First Name', 'Last Name', 'Delivery Address', 'City', 'Postal Code'].map((label, idx) => (
                <div key={label} className={`space-y-2 ${idx === 2 ? 'md:col-span-2' : ''}`}>
                  <label className="block text-[10px] font-label text-neutral-400 tracking-widest uppercase">{label}</label>
                  <input className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-all duration-500 placeholder:text-neutral-700 font-serif text-lg" placeholder={`Enter ${label}`} type="text" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 pt-8">
            <h2 className="font-serif italic text-3xl text-on-background border-b border-outline-variant/20 pb-4 uppercase">Payment Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="glass-panel p-6 rounded flex flex-col items-center justify-center border-primary/40 group hover:bg-primary/5 transition-all duration-500">
                <span className="material-symbols-outlined text-primary mb-2">credit_card</span>
                <span className="text-[10px] font-label tracking-widest">CREDIT CARD</span>
              </button>
              <button className="glass-panel p-6 rounded flex flex-col items-center justify-center border-transparent opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <span className="material-symbols-outlined text-on-surface mb-2">account_balance_wallet</span>
                <span className="text-[10px] font-label tracking-widest">DIGITAL WALLET</span>
              </button>
              <button className="glass-panel p-6 rounded flex flex-col items-center justify-center border-transparent opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <span className="material-symbols-outlined text-on-surface mb-2">currency_bitcoin</span>
                <span className="text-[10px] font-label tracking-widest uppercase">Crypto</span>
              </button>
            </div>
            <div className="space-y-6 pt-4">
              <div className="space-y-2">
                <label className="block text-[10px] font-label text-neutral-400 tracking-widest uppercase">Card Number</label>
                <div className="relative">
                  <input className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-all duration-500 placeholder:text-neutral-700 font-serif text-lg" placeholder="**** **** **** 8829" type="text" />
                  <span className="absolute right-0 top-3 material-symbols-outlined text-neutral-600">lock</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-label text-neutral-400 tracking-widest uppercase">Expiry Date</label>
                  <input className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-all duration-500 placeholder:text-neutral-700 font-serif text-lg" placeholder="MM / YY" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-label text-neutral-400 tracking-widest uppercase">CVC</label>
                  <input className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-all duration-500 placeholder:text-neutral-700 font-serif text-lg" placeholder="***" type="password" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12">
            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-6 px-12 font-label tracking-[0.4em] text-sm hover:scale-[1.02] active:scale-95 transition-all duration-700 shadow-[0_0_30px_rgba(233,193,118,0.2)] font-bold uppercase">
              Authorize Transaction
            </button>
            <p className="text-center text-[10px] font-sans text-neutral-500 mt-6 tracking-widest">
              SECURE 256-BIT ENCRYPTED CONNECTION
            </p>
          </div>
        </section>

        {/* Order Summary Sidebar */}
        <aside className="lg:col-span-5 sticky top-40">
          <div className="glass-panel p-10 space-y-10 border-outline-variant/10 shadow-2xl rounded-xl">
            <h3 className="font-serif italic text-2xl text-primary-container leading-none">Order Summary</h3>
            <div className="space-y-8">
              {[
                { name: 'OBSIDIAN SILK SHIRT', price: '$1,240.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGPhviknQo9cuq5uIidIP_omGkXPzNcyZ1t27mglzP-Krqp4Of3ZnA796ZC1LrjiyStCI-4PqBkWAXsrQwPkvXbOpwYM2R1mXm7kT0J8JJuKasMSbu7EZQ2Jc6Hln7Ig703J0ovTJ7jGZct_J-Ycjibug-Lstrd_N8NmUHBOxVSVMbNHDRKIOBmjpK9-OMoRVF94Tj9218Wd-A_Swz2UEF-5m4TEkMvV1Vmq8G0bxUoJvVNT_rYG2Ps5nCqD4fKNU9hOFU3XtZPyc' },
                { name: 'MIDNIGHT CLUTCH', price: '$2,850.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL18ee8TRbbdYZ1j55WTUHkJDwM7KsDvFzKYrQyYENzNHBE-001cBQtboCVp08YKdyWeTtn_cBWdwu_gQomeRIK92vS03BoFxI_TY1RedmKeAnVdVDzzbTK3qRXUBYUuVa9waQbtC3Qb69ESLSuQMbAZk6hGrqBEoJu2CDeu7C2XfulKwpXA71UERjfn54tVSnSGmsCIalODUi1l3l52P7C3W1wQK1JoJEvltfNY4LUis7AiIA1Q21t0LYXKDWq2PMf4C_UGZY4sw' }
              ].map((item) => (
                <div key={item.name} className="flex items-center space-x-6">
                  <div className="relative w-20 h-28 overflow-hidden bg-surface-container rounded-lg">
                    <img className="w-full h-full object-cover grayscale opacity-80" src={item.image} alt={item.name} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif text-lg leading-tight mb-2 uppercase">{item.name}</h4>
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-widest">QTY: 01</span>
                      <span className="font-serif text-primary">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4 pt-8 border-t border-outline-variant/10">
              <div className="flex justify-between items-center text-[10px] font-label tracking-widest text-neutral-500 uppercase">
                <span>Subtotal</span>
                <span className="font-serif text-on-background text-lg">$4,090.00</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-label tracking-widest text-neutral-500 uppercase">
                <span>Shipping</span>
                <span className="font-serif text-on-background">COMPLIMENTARY</span>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-primary/20">
                <span className="text-[12px] font-label tracking-[0.2em] text-primary uppercase">Total Due</span>
                <span className="font-serif text-3xl text-primary drop-shadow-[0_0_15px_rgba(233,193,118,0.4)]">$4,090.00</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Checkout;
