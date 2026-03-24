import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Midnight Amber",
      price: "$285.00",
      category: "Eau de Parfum • 100ml",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX64RupmRrHkXjzoxEhDJ1l8D6ymneiJBXimPKIFG8o03od8YKZczM2ZEW70Ti2bMdsTMRLyV4qgtlVef64hdqdMZvlKYmcyEvYrKEyNuyB61dytWyyprhyeyljbx674elOWMku5ItqurZ-zcMC1orM2ilaEeqQVXLX6VViXQcI5gI0YH_FdafC9U4UhcB9_eCbb01umK3nhwT-r7qzNelDhf2TPOYamfUGg-iLwLMhaw6HIHNGfpgyfk0w17Qf0P_szfCJvnDwLs",
      tag: "ONLY 3 LEFT",
      tagColor: "bg-error/10 text-error border-error/20"
    },
    {
      id: 2,
      name: "Voyager No. 01",
      price: "$840.00",
      category: "Toscana Leather • Midnight Black",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsfyeMKkC-dDOCIyPmy-x9BSsma0k2qy62xg4wamHrWtGbQhzw_5ueHhoo91IWOqmN7v6QmjPh-wT8gbAwTMK1ijgiiMQgGbXNLu0S6eOX_8lcR1uxZv6Yndaq6B49mpXz02zZBCJo3Sjv0WfVNkrPoPYF6IXJaOQLS4__nFvwHiu-axseYWLDvonaEkz81f8kWGI6xrw38btWkC7cho3zWO03ISzA70lDf2W4hBR64ry8Q2CWaFWaYj8k-qX76aMvUinEsoOwg4Y",
      tag: null
    },
    {
      id: 3,
      name: "Eclipse Runner",
      price: "$420.00",
      category: "Full Grain Leather • Limited Edition",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCix2kObctTFhw5RZlLEa5nANUpq5A_8cJCbdp3yT89Fh_AbKVjV_sqOXRh7LVxS_Hh0RuGjcTDfuVpoj0-oMMltYYGetgR9FCysvWGtvoPJ6JYFe0j7FSCrx9GEqYZdsnZ4uXOcRzB6fjyLxZPUa75NGb_mGsrn-0nsWhzQWeu49GA4xGI4WNkKeWSuOGEgviQxrELTwvdfBuPaG0rgpQiI51rn2i2F3HniNIGsv8wagYl0xrUV-xCHe6CDnbHCQfLKKMJHuG6WI8",
      tag: "NEW SEASON",
      tagColor: "bg-primary/10 text-primary border-primary/20"
    },
    {
      id: 4,
      name: "Noir Sanctorum",
      price: "$95.00",
      category: "Scented Candle • 50h Burn Time",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN7nBFCKLTKQXlwZ_xrWu20L_cFMivZOvbgaUDjAyPVUZsM_AIKfVd3y-N-ZpAAX5qGeSvRRbt3s1DoDVGtYB1U0kor_vhtBZglVOXAgVOJfHAbVH5pzhSwyyU_567Iab0xBNiyGclW9k-_0jRefCzhocko46ECSwqUvfrSSFYUWBIqeSDhiC7MCg_IBzMNW0a9sj1wy9KaSka4oUuoEhYRQcLppXCQtqDPzHIHIhMRgmDlSbUOuBi2ba6ZgjzdiqMBsu1G9tw9O4",
      tag: "ONLY 1 LEFT",
      tagColor: "bg-error/10 text-error border-error/20"
    },
    {
      id: 5,
      name: "Carbon Slim",
      price: "$180.00",
      category: "Matte Titanium • Card Holder",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp1k8VdxGLlvneJyD3AAAl8LHXjFWIyo-WLNAtapf3nDDrrMvKlFxjA5AY176-G0KnGen9KuMHVURSRXxKgxGig_h1ewoK0XnOMVKBiinJ11l0J5OQlVn9y4WD5tFe4bPS5_io1IVK0qjqp28leLgtgp0ezMg1xmDNd3h8y7M5iUp8561cwk44FjBYh_ED1s7eyHhnvuMKYvDGdhMSycBSqXjVAWd-gx3N55LFqEwX-rASjMCKf8u-7trF39dE-PTp9Q1k9VjG92I",
      tag: null
    },
    {
      id: 6,
      name: "Shadow Vision",
      price: "$325.00",
      category: "Acetate • UV400 Protection",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpSxKidtwTub4_tl5G1vbJusYE_dOf0dgRuO5HifmYGZ1Uj-hX0WF1k7lSpnAhwgD27xy6BeWHWYb0ubuZPQbI4NJ3A4QvKXXL-H4raZmx7OZD9vGAcV_ngb1wLLYCAmF0e29ymFaAuWBxPPBmiROQyB_IdS_mLrU2NoVyWPtZfsx0vIHkyjWNgAAwKMynKnOci8kjtc6LFJUq4t0gwg-zBv1dtLSC-QUfw1YUjh7kDljDljQ8aAFR6gfA_2IEyQVmZ_RDw34uzFY",
      tag: null
    }
  ];

  return (
    <div className="pt-40 pb-20 px-6 max-w-[1400px] mx-auto min-h-screen animate-in fade-in duration-700">
      {/* Shop Header */}
      <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-outline-variant/10 pb-12">
        <div className="max-w-2xl">
          <h2 className="text-primary font-accent tracking-[0.3em] text-xs mb-4 uppercase">CURATED SELECTION</h2>
          <h1 className="text-6xl md:text-8xl font-serif italic text-on-background leading-none">The Autumn <br /><span className="text-primary/80">Noir Edition</span></h1>
        </div>
        <div className="text-right flex flex-col items-end">
          <p className="text-neutral-500 font-label text-[11px] uppercase tracking-[0.2em] max-w-xs mb-6">Explore our latest drops of artisanal fragrances and bespoke leather goods, crafted for the cinematic soul.</p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-surface-container-high rounded-full text-[9px] font-accent tracking-widest text-primary border border-primary/20">NEW ARRIVALS</span>
            <span className="px-3 py-1 bg-surface-container-high rounded-full text-[9px] font-accent tracking-widest text-neutral-400">BEST SELLERS</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="glass-panel p-8 rounded-xl sticky top-32 noir-shadow">
            <div className="mb-10">
              <h3 className="font-accent tracking-[0.2em] text-xs text-on-background mb-6 border-b border-outline-variant/20 pb-2">CATEGORIES</h3>
              <div className="space-y-4">
                {['ALL COLLECTIONS', 'FRAGRANCES', 'LEATHER GOODS', 'HOME DECOR'].map((cat, idx) => (
                  <label key={cat} className="flex items-center justify-between group cursor-pointer">
                    <span className={`text-[11px] font-label tracking-widest ${idx === 1 ? 'text-on-background' : 'text-neutral-400group-hover:text-primary'} transition-colors uppercase`}>{cat}</span>
                    <span className={`w-2 h-2 rounded-full border border-primary/40 ${idx === 1 ? 'bg-primary shadow-[0_0_8px_rgba(233,193,118,0.5)]' : 'group-hover:bg-primary'} transition-all`}></span>
                  </label>
                ))}
              </div>
            </div>
            {/* Price Range */}
            <div className="mb-10">
              <h3 className="font-accent tracking-[0.2em] text-xs text-on-background mb-6 border-b border-outline-variant/20 pb-2">PRICE RANGE</h3>
              <div className="px-2">
                <div className="h-0.5 bg-outline-variant/30 rounded-full relative mb-6">
                  <div className="absolute inset-y-0 left-1/4 right-1/4 bg-primary"></div>
                  <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full ring-4 ring-primary/10"></div>
                  <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full ring-4 ring-primary/10"></div>
                </div>
                <div className="flex justify-between text-[10px] font-accent tracking-widest text-neutral-500">
                  <span>$150</span>
                  <span>$1,200+</span>
                </div>
              </div>
            </div>
            {/* Availability */}
            <div>
              <h3 className="font-accent tracking-[0.2em] text-xs text-on-background mb-6 border-b border-outline-variant/20 pb-2 uppercase">Availability</h3>
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 rounded-sm border border-outline-variant group-hover:border-primary transition-colors flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-sm opacity-100"></div>
                  </div>
                  <span className="text-[10px] font-label tracking-widest text-on-background uppercase">IN STOCK</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.id} className="group relative flex flex-col bg-surface-container-low rounded-xl overflow-hidden noir-shadow border border-white/5 hover:border-primary/20 transition-all duration-700 hover:-translate-y-2">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <Link to={`/product/${p.id}`}>
                    <img 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                      src={p.image} 
                      alt={p.name}
                    />
                  </Link>
                  {p.tag && (
                    <div className="absolute top-4 left-4">
                      <span className={`${p.tagColor} text-[9px] font-accent tracking-[0.2em] px-3 py-1 rounded-full border backdrop-blur-md uppercase`}>
                        {p.tag}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
                    <Link 
                      to="/cart"
                      className="w-full bg-primary text-on-primary font-accent tracking-widest py-3 text-xs hover:bg-primary-container transition-colors shadow-[0_0_20px_rgba(233,193,118,0.3)] uppercase text-center"
                    >
                      ADD TO CART
                    </Link>
                  </div>
                </div>
                <div className="p-8 space-y-2">
                  <div className="flex justify-between items-start">
                    <Link to={`/product/${p.id}`}>
                      <h3 className="font-serif italic text-2xl text-on-background group-hover:text-primary transition-colors">{p.name}</h3>
                    </Link>
                    <span className="font-accent tracking-widest text-sm text-primary">{p.price}</span>
                  </div>
                  <p className="text-[10px] font-label tracking-widest text-neutral-500 uppercase">{p.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center gap-4">
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-neutral-500 hover:border-primary hover:text-primary transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex gap-2">
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-on-primary font-accent text-xs">01</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-neutral-500 hover:border-primary hover:text-primary transition-all font-accent text-xs">02</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-neutral-500 hover:border-primary hover:text-primary transition-all font-accent text-xs">03</button>
            </div>
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-neutral-500 hover:border-primary hover:text-primary transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
