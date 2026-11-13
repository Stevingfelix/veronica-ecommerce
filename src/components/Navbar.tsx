import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  wishlistCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, wishlistCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Shop', href: '#shop' },
    { name: 'About', href: '#about' },
    { name: 'Quiz', href: '#quiz' },
    { name: 'Journal', href: '#journal' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-black/5 transition-all">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo with Botanical Mortar & Pestle */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-botanix-green/10 flex items-center justify-center text-botanix-green group-hover:bg-botanix-green group-hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M12 3a9 9 0 0 0-9 9c0 3.87 2.45 7.17 5.88 8.42.34-.78.78-1.5 1.3-2.14C8.25 17.5 7 15.42 7 13a5 5 0 0 1 10 0c0 2.42-1.25 4.5-3.18 5.28.52.64.96 1.36 1.3 2.14C18.55 19.17 21 15.87 21 12a9 9 0 0 0-9-9zm-1 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm4.5 4.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5h7z" />
            </svg>
          </div>
          <span className="font-display font-extrabold text-xl tracking-tight text-botanix-forest uppercase">
            VERONICA
          </span>
        </a>

        {/* Center Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#EFEAE2]/80 px-4 py-1.5 rounded-full border border-black/5 shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                link.active
                  ? 'bg-white text-botanix-forest shadow-xs'
                  : 'text-gray-600 hover:text-botanix-forest hover:bg-white/50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Icons + CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Icon */}
          <button
            className="w-9 h-9 rounded-full bg-white border border-black/5 flex items-center justify-center text-gray-700 hover:text-botanix-green hover:border-botanix-green transition-colors shadow-xs"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Wishlist Heart Icon */}
          <button
            className="w-9 h-9 rounded-full bg-white border border-black/5 flex items-center justify-center text-gray-700 hover:text-botanix-green hover:border-botanix-green transition-colors shadow-xs relative"
            aria-label="Wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-botanix-green text-white text-[10px] font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            className="w-9 h-9 rounded-full bg-white border border-black/5 flex items-center justify-center text-gray-700 hover:text-botanix-green hover:border-botanix-green transition-colors shadow-xs relative"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-botanix-green text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Green Pill CTA */}
          <a
            href="#shop"
            className="hidden sm:inline-flex items-center justify-center bg-botanix-green hover:bg-botanix-green-dark text-white text-xs font-bold uppercase tracking-wide px-5 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all ml-1"
          >
            Shop the ritual
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white border border-black/5 text-gray-700"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/5 bg-[#FAF7F2] px-6 py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-semibold text-gray-800 hover:text-botanix-green border-b border-black/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#shop"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center bg-botanix-green text-white text-xs font-bold uppercase py-3 rounded-full mt-2"
          >
            Shop the ritual
          </a>
        </div>
      )}
    </header>
  );
};
