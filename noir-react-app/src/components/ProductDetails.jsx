import React from 'react';

const ProductDetails = () => {
  return (
    <main className="pt-0 animate-in fade-in duration-1000">
      {/* Hero Section: Cinematic Product Image */}
      <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
        <img 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBT4rklFKBUpGjMnLcI5od7nKr6Mp2MJe3V51wEu1tk5Hn5FS2QOQLnZtf9J-yrUjI2m7X2562J9I4rAjLZZ_4epoL6c_MCBriZFXgRmT8fAmiZs3rY2-drO_0zoQG6fNntNUSs2mG0s2psYjD7hXpHDs40oyDqJmQi6VE39Nh8_hSSdF78y8HBpP3b_UCcZIC25v1Ys3DlptMaVVkCHYVBd2maU14Y1DpeCG4v7ZuxusJkeawBoaT1fOb8HdXHnGp-L3l2K6Qqpk" 
          alt="Product Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
        <div className="absolute bottom-24 left-12 md:left-24 max-w-2xl">
          <span className="font-label tracking-[0.3em] text-primary text-xs mb-4 block uppercase leading-none">Limited Edition 001</span>
          <h1 className="font-serif italic text-6xl md:text-8xl leading-tight mb-6">Obsidian <br />Luxe</h1>
        </div>
      </section>

      {/* Product Details: Asymmetric Layout */}
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 -mt-32 relative z-10">
        {/* Information Panel */}
        <div className="md:col-span-7 lg:col-span-5">
          <div className="glass-panel border border-outline-variant/20 p-10 md:p-16 rounded-lg shadow-2xl">
            <div className="flex justify-between items-start mb-12">
              <div>
                <p className="font-sans text-on-surface-variant uppercase tracking-widest text-[10px] mb-2">Category: Fragrance</p>
                <h2 className="font-serif text-4xl italic mb-1">Deep Horizon</h2>
                <p className="text-primary font-serif italic text-xl">$450.00</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant">In Stock</span>
              </div>
            </div>
            <p className="font-sans text-on-surface-variant leading-relaxed mb-12 text-sm first-letter:text-2xl first-letter:font-serif first-letter:text-primary">
              A scent designed for the architectural mind. Notes of charred cedarwood merge with the cold metallic essence of midnight rain. Encased in hand-blown obsidian glass.
            </p>
            <div className="space-y-8 mb-12">
              <div className="flex justify-between border-b border-outline-variant/10 pb-4">
                <span className="font-label text-xs tracking-widest uppercase text-neutral-500">Volume</span>
                <span className="font-sans text-sm uppercase">100ml / 3.4 FL OZ</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant/10 pb-4">
                <span className="font-label text-xs tracking-widest uppercase text-neutral-500">Intensity</span>
                <span className="font-sans text-sm italic uppercase tracking-widest text-primary">High Definition</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 font-label tracking-[0.2em] text-sm rounded-full transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(233,193,118,0.3)] active:scale-95 uppercase font-bold">
              Add to Collection
            </button>
          </div>
        </div>

        {/* Visual Secondary Content */}
        <div className="md:col-span-1 lg:col-span-1"></div>
        <div className="md:col-span-4 lg:col-span-6 flex flex-col justify-center space-y-12">
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxp_KZY8Gxf9OzDxIIDprbLO9ioZzoL4dKGPrA4x3kXn65WZ_sUrMG-XFTLyoY1xRMVCvexzKrCnKvwjwUhlrzTXtUUtfEB3bY_-8XcHmjLnXtChSBS4tTTg2Pxm8_YsPJwHnvUDgEXeF6CcMkm-R3w98fdxGfMnPvUZ1TcBGOyaF6InKnxZ7uiFMBBOLjRRJjTxjrkP4acKDpNRXfNbC2Hwgbd-LX6kTJSas9--fO39rRi4NAYCBkfz0cGOP7q7HR-VexoX0tP_U" 
                alt="Product Detail 1"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-lg mt-12">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8kzGoKAP4fPH8GWQZjabkoU-OF7ZkaIx84s9qFU85Prl--KSw-15b8VyfL9j4rZCeRc1smHL73xFU-rrgBmcNr74RcX9YFoBYU7Jh7TZFqlwfw4Djm8Hx_Vktn71CzRaIy5FTD3CS0yjc1QRSZVfgR4as4vIrqtnpL1yS9f2X8uBwRVipeoKd8eez6yIQzM5UYtP9ZbisvksEqoLWsuBGSyxlaVdJf5RvmHYtq7iDaqLhtth1on_IhLT9OsQE9v_MSiOXMIZLxPE" 
                alt="Product Detail 2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 bg-surface-container-low mt-32">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 text-neutral-800 font-serif italic text-[12rem] opacity-10 pointer-events-none">N</div>
            <h3 className="font-serif italic text-4xl md:text-5xl mb-8 leading-tight">The craftsmanship <br />of silence.</h3>
            <p className="font-sans text-on-surface-variant leading-loose mb-10">
              Founded in the heart of cinematic tradition, NOIR represents more than a product—it is a study in the absence of noise. Every component is sourced from sustainable ateliers that prioritize the legacy of slow production.
            </p>
            <button className="font-label text-primary tracking-[0.3em] text-xs inline-flex items-center group uppercase">
              Read the Journal
              <span className="material-symbols-outlined ml-4 group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="aspect-square bg-surface-container relative rounded-lg overflow-hidden">
            <img 
              className="w-full h-full object-cover mix-blend-luminosity opacity-80" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_pl-l3_aWZKz7I6D7mVUSuphJL1HzfpY_OKInSjI0ZqTE3HVppEjNjY8sthS8j3oallwH3K8FgHSMll9By5IebJWegmutypPQmdnMjkwviGkaw4xyWVbUvgJTtNcIpWgVEMns7PW9xKXklTTN7sgRjvxo7n9gS186BKKPi3FiP2H1ZjdCupXabCHUd2hcKK60dmd0t-C00mnvPhqj5De7IQMNn25eRpw8C0DjrMheTYvFoDpm_uhNe93iBylQFJ7Qf783wApjNJI" 
              alt="Artisan"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
