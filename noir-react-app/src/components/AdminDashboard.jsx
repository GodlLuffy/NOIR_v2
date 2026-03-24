import React from 'react';

const AdminDashboard = () => {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
      {/* Header Section */}
      <header className="mb-16">
        <h1 className="font-serif italic text-5xl md:text-7xl text-primary tracking-tight leading-none mb-4">Executive Oversight</h1>
        <p className="font-label uppercase tracking-[0.3em] text-xs text-outline">Merchant ID: NX-9421 // Cinematic Standards Bureau</p>
      </header>

      {/* Analytics Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {/* Card: Total Products */}
        <div className="md:col-span-1 glass-panel p-8 rounded-xl flex flex-col justify-between group hover:bg-surface-variant transition-all duration-500">
          <div>
            <span className="material-symbols-outlined text-primary mb-6">inventory_2</span>
            <h3 className="font-accent text-lg tracking-widest text-on-surface-variant">Total Products</h3>
          </div>
          <div className="mt-8">
            <span className="text-5xl font-serif text-primary">1,248</span>
            <p className="text-[10px] font-label text-outline mt-2">+12 Since last login</p>
          </div>
        </div>

        {/* Card: Revenue Velocity */}
        <div className="md:col-span-2 glass-panel p-8 rounded-xl flex flex-col justify-between relative overflow-hidden">
          <div className="z-10">
            <span className="material-symbols-outlined text-primary mb-6">monitoring</span>
            <h3 className="font-accent text-lg tracking-widest text-on-surface-variant">Revenue Velocity</h3>
            <div className="mt-6 flex items-baseline space-x-4">
              <span className="text-6xl font-serif text-on-surface">€84,200</span>
              <span className="text-primary text-sm font-label flex items-center">
                <span className="material-symbols-outlined text-xs mr-1">trending_up</span> 14%
              </span>
            </div>
          </div>
          {/* Visual Decoration */}
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full stroke-primary fill-none" viewBox="0 0 100 100">
              <path d="M0 80 Q 25 70 40 40 T 80 20 T 100 10" strokeWidth="2"></path>
            </svg>
          </div>
        </div>

        {/* Card: Low Stock Alerts */}
        <div className="md:col-span-1 glass-panel p-8 rounded-xl border-error/20 bg-error-container/5">
          <span className="material-symbols-outlined text-error mb-6">notification_important</span>
          <h3 className="font-accent text-lg tracking-widest text-error uppercase">Stock Alerts</h3>
          <div className="mt-6 space-y-4">
            {[
              { name: "Nocturne Eau", stock: "3 Left" },
              { name: "Shadow Silk Tie", stock: "1 Left" },
              { name: "Onyx Cufflinks", stock: "4 Left" }
            ].map((item) => (
              <div key={item.name} className="flex justify-between items-center border-b border-outline-variant pb-2">
                <span className="text-xs font-label uppercase">{item.name}</span>
                <span className="text-xs font-bold text-error">{item.stock}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area: Asymmetric Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Add New Product Form */}
        <aside className="lg:col-span-1">
          <div className="glass-panel p-10 rounded-xl sticky top-32">
            <h2 className="font-serif italic text-3xl text-on-surface mb-8">Curate New Asset</h2>
            <form className="space-y-8">
              <div className="space-y-1">
                <label className="font-label uppercase tracking-widest text-[10px] text-outline">Asset Designation</label>
                <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface placeholder:text-neutral-700 transition-all py-2" placeholder="e.g. Midnight Cashmere Overcoat" type="text" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-label uppercase tracking-widest text-[10px] text-outline">Valuation (€)</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface placeholder:text-neutral-700 transition-all py-2" placeholder="2,400" type="number" />
                </div>
                <div className="space-y-1">
                  <label className="font-label uppercase tracking-widest text-[10px] text-outline">Initial Supply</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface placeholder:text-neutral-700 transition-all py-2" placeholder="24" type="number" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="font-label uppercase tracking-widest text-[10px] text-outline">Narrative Description</label>
                <textarea className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface placeholder:text-neutral-700 transition-all py-2 resize-none" placeholder="Crafted for the shadows..." rows="3"></textarea>
              </div>
              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 font-accent tracking-[0.2em] uppercase hover:shadow-[0_0_20px_rgba(233,193,118,0.3)] transition-all duration-500 rounded" type="button">
                  Confirm Curated Asset
                </button>
              </div>
            </form>
          </div>
        </aside>

        {/* Order Management */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex justify-between items-end">
            <h2 className="font-serif italic text-4xl text-on-surface">Recent Acquisitions</h2>
            <button className="font-label uppercase text-[10px] tracking-widest text-primary border-b border-primary pb-1">Archive History</button>
          </div>
          <div className="space-y-4">
            {[
              { id: 'ORD-88219', name: 'Obsidian Timepiece No. 4', user: 'Julian Vane • Milan, IT', price: '€4,250', status: 'Dispatched', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6wLsqnFpfIJB3cFnl4YmhG9ApaCGHFLuyzCovRg7_uEsxUHuc-Bbmh7VVpfyaHFwmsBsMGCC0iqPD4P6BXIODKFuOLL1VaGY0eLzS40Aq6hB2zlwd7O2u0PeJGDxCEUQI2dRNGfLiwJmzcONfkVBbXREQCu68UDso0LcPe2dOq-0I8awG02afnNj2fswLyWUgojds7dCDCGrjC6pmHt4_ZThkj3M31BLRbwbP9yQ6lJ47_Jf868f3vXhhMbkXk8AlEWVdWdz_Rp0' },
              { id: 'ORD-88220', name: 'Minimalist Maestra Bag', user: 'Elena Thorne • Paris, FR', price: '€1,800', status: 'Processing', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBeAp0ALHuESpKJzA22Uo6WJ0XJ_WTCnqkDDYkhZLRBvqpd-xubyprrCv_ETixAY3gpRO1ER42IWEm5LUF8H0ERHHlmf3m0cF9CvOsuPDEoHwSbQ4pRPyaarfVrksOOtCaNpnguttFxnci4_0L30v1UBSEvQE-mHg0UNFE2AIASf8lThYGqnZ-dzq8jgOEfhGk5eXOvLLIPAACyKYCgqBxVT7BXjUM4EI4HMhKHeu-40_dkHQ8ZL6wKersNHSw5Zvx35OjkQak0Nw' },
              { id: 'ORD-88221', name: 'Anthracite Peak Lapel Suit', user: 'Marcus Webb • London, UK', price: '€3,100', status: 'Dispatched', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkDFiVdx6iBsl6GJxrSnr0nkl5ufx_KdW2B2_fphe2OEjJ9chx3wSzyia16n76wvT43btJ8EN0Q4SpmRzV1XvjGUyAEHmO7G2yesyRrBimPEEa5fgZLjcHk8JvnmNB3DmZ7p6z324zZ2DWmn8dgkFk8OitulHwS7cUkdr5jOIUBFUkmgWQNUYMvkLmdrf9FZ9vizII-4AjV34XLriyww-enaMndFh3gkgpFrRgFn3kPUfvcHsM-pwYmRSH2g88d0nC7d6oaoNtres' }
            ].map((order) => (
              <div key={order.id} className="glass-panel group p-6 rounded-lg flex items-center justify-between hover:translate-x-2 transition-all duration-500">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-20 bg-neutral-800 rounded overflow-hidden">
                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={order.image} alt={order.name} />
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase text-outline tracking-widest">{order.id}</p>
                    <h4 className="font-serif text-xl text-on-surface">{order.name}</h4>
                    <p className="text-xs text-neutral-500">{order.user}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-serif text-xl text-primary">{order.price}</p>
                  <span className={`inline-block mt-2 px-3 py-1 ${order.status === 'Dispatched' ? 'bg-primary/10 text-primary' : 'bg-surface-variant text-outline'} text-[9px] font-accent tracking-widest uppercase rounded-full`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
