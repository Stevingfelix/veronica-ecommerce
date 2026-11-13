import React from 'react';
import { Instagram, Linkedin, Music, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full overflow-hidden">
      <div className="bg-[#141A15] text-white rounded-t-[2.5rem] rounded-b-none sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-10 lg:p-14 shadow-xl w-full">
        {/* Top 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Explore */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <a href="#home" className="hover:text-botanix-green-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-botanix-green-accent transition-colors">
                  Featured Collections
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-botanix-green-accent transition-colors">
                  Shop All
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-botanix-green-accent transition-colors">
                  Wellness guides
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Company */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <a href="#about" className="hover:text-botanix-green-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-botanix-green-accent transition-colors">
                  Our Ingredients
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-botanix-green-accent transition-colors">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-botanix-green-accent transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <a href="#quiz" className="hover:text-botanix-green-accent transition-colors">
                  Patient portal
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-botanix-green-accent transition-colors">
                  Book a consultation
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-botanix-green-accent transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-botanix-green-accent transition-colors">
                  Posology guide
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Brand Mission & Socials */}
          <div className="col-span-2 md:col-span-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-botanix-green flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M12 3a9 9 0 0 0-9 9c0 3.87 2.45 7.17 5.88 8.42.34-.78.78-1.5 1.3-2.14C8.25 17.5 7 15.42 7 13a5 5 0 0 1 10 0c0 2.42-1.25 4.5-3.18 5.28.52.64.96 1.36 1.3 2.14C18.55 19.17 21 15.87 21 12a9 9 0 0 0-9-9zm-1 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm4.5 4.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5h7z" />
                </svg>
              </div>
              <span className="font-bold text-sm tracking-wide text-white uppercase">
                VERONICA
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Handcrafted micro-batch herbal rituals rooted in ancient Ayurvedic science, guided by nature and compassion.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://spotify.com"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-botanix-green text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Spotify Ritual Playlists"
              >
                <Music className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-botanix-green text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-botanix-green text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-botanix-green text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Big Bottom Wordmark & Logo */}
        <div className="pt-14 pb-10 flex flex-col sm:flex-row items-center sm:items-baseline justify-between gap-6 border-b border-white/10">
          <div className="flex items-center gap-4 group">
            {/* Mortar & Pestle Emblem */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-botanix-green flex items-center justify-center text-white shadow-lg flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12 fill-current">
                <path d="M12 3a9 9 0 0 0-9 9c0 3.87 2.45 7.17 5.88 8.42.34-.78.78-1.5 1.3-2.14C8.25 17.5 7 15.42 7 13a5 5 0 0 1 10 0c0 2.42-1.25 4.5-3.18 5.28.52.64.96 1.36 1.3 2.14C18.55 19.17 21 15.87 21 12a9 9 0 0 0-9-9zm-1 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm4.5 4.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5h7z" />
              </svg>
            </div>
            <span className="font-display font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight text-white select-none uppercase">
              VERONICA
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-gray-400">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Final Copyright Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <p>© 2025 Veronica Botanix. All rights reserved.</p>
          <p>Rooted in Ayurveda. Tested by modern science.</p>
        </div>
      </div>
    </footer>
  );
};
