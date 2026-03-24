import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 pt-20 pb-10 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center space-y-12">
        <div className="text-lg font-serif italic text-amber-100 uppercase tracking-[0.3em]">NOIR CINEMATIC</div>
        <div className="flex flex-wrap justify-center gap-12">
          <Link className="font-sans uppercase tracking-[0.2em] text-[10px] text-neutral-500 hover:text-amber-100 transition-colors duration-500" to="/">Instagram</Link>
          <Link className="font-sans uppercase tracking-[0.2em] text-[10px] text-neutral-500 hover:text-amber-100 transition-colors duration-500" to="/">Journal</Link>
          <Link className="font-sans uppercase tracking-[0.2em] text-[10px] text-neutral-500 hover:text-amber-100 transition-colors duration-500" to="/about">Privacy</Link>
          <Link className="font-sans uppercase tracking-[0.2em] text-[10px] text-neutral-500 hover:text-amber-100 transition-colors duration-500" to="/contact">Contact</Link>
        </div>
        <div className="text-center space-y-4">
          <p className="font-sans uppercase tracking-[0.2em] text-[10px] text-neutral-500">© 2024 NOIR CINEMATIC. ALL RIGHTS RESERVED.</p>
          <div className="flex justify-center space-x-4 opacity-30 grayscale contrast-150">
            <img 
              alt="Partner Logo" 
              className="h-6" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0_G9hBzemls1SHeZqpueillRjr6QcvLkuGyBPpt41LSvQVO-aiB7uUitM1KV3nU1EcChwIHAqxTTjks76W53yfA9WMRZJTMxp9mq07QR2LVApwFPtFSm3urTQ9gOsdzsP-tg9xv4ZzliYDtwTPUrWyO6jxzq6Rs5p0Cy4JkZMfFn8r5z-Ma9V0J6dFt8e74egYWfuQXheoKa2fsjJ36S_KH4uAGqn_ZtuMgi3e9WmfxFdJ-YmAZGpwRkD-EZ-aHRFI190Pr5jkv8"
            />
            <img 
              alt="Partner Logo" 
              className="h-6" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTMhVHjC8pf75Swvc0z3OIFTpfDJDrycEpt3aXhAdp_TL9Yjrm_ZWTR7OfRK6YbckeDfkwiWagI3aNYVvWLrEOaxV8JIqh0U67tFXxVkKteJzmxIvjTGgOUwxihPMfRRJjTjokUjc6j2ufqNHnIWR6tD7fu_EgibT-bF2mEMHwLSXFxY_rvHWpHyG_XebKwWUdz6HCy0BexNuOPoTqGxU2HjDul697e5WYaDibbsrLQjlZBC9w5lvDSn_BJcfihPgnW0puxHZRlAQ"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
