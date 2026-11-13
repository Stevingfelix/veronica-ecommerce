import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Star, Menu, X } from 'lucide-react';

interface HeroProps {
  cartCount: number;
  onOpenCart: () => void;
  wishlistCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  cartCount,
  onOpenCart,
  wishlistCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Shop', href: '#shop' },
    { name: 'Herbs', href: '#about' },
    { name: 'Ritual', href: '#ritual' },
    { name: 'Journal', href: '#journal' },
  ];

  return (
    <div className="w-full">
      {/* 
        MASTER HERO CARD
        HD Yoga Photo background as requested by user
      */}
      <div className="relative rounded-none sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] flex flex-col justify-between pt-6 sm:pt-9 lg:pt-11 px-5 sm:px-10 lg:px-12 pb-6 sm:pb-10 lg:pb-12 shadow-2xl w-full">
        {/* Background Image: HD Yoga photo at sunset/sunrise */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-yoga-hd.jpg"
            alt="HD Yoga wellness silhouette at sunset"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Subtle gradient vignette to make white typography pop cleanly */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/35" />
        </div>

        {/* 
          INTEGRATED HEADER AT TOP OF HERO
        */}
        <header className="relative z-20 flex items-center justify-between gap-4">
          {/* Brand Logo: Green Leaf Emblem + VERONICA */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-[#3D7B52] flex items-center justify-center text-white shadow-md">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 3a9 9 0 0 0-9 9c0 3.87 2.45 7.17 5.88 8.42.34-.78.78-1.5 1.3-2.14C8.25 17.5 7 15.42 7 13a5 5 0 0 1 10 0c0 2.42-1.25 4.5-3.18 5.28.52.64.96 1.36 1.3 2.14C18.55 19.17 21 15.87 21 12a9 9 0 0 0-9-9zm-1 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm4.5 4.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5h7z" />
              </svg>
            </div>
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white uppercase drop-shadow-sm">
              VERONICA
            </span>
          </a>

          {/* Center Pill Nav: Home, Shop, Herbs, Ritual, Journal */}
          <nav className="hidden md:flex items-center gap-1 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/25 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  link.active
                    ? 'bg-white text-[#1C221D] shadow-xs'
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Search */}
            <button
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all shadow-xs"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist */}
            <button
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all shadow-xs relative"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#3D7B52] text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={onOpenCart}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all shadow-xs relative"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#3D7B52] text-white text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Header Right Pill CTA */}
            <a
              href="#shop"
              className="hidden sm:inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#1C221D] text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-all ml-1.5"
            >
              Shop the ritual
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/20 text-white border border-white/20 backdrop-blur-md"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden relative z-30 mt-4 bg-[#1C221D]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-sm font-semibold py-2 border-b border-white/10"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#shop"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#3D7B52] text-white text-xs font-bold uppercase text-center py-3 rounded-full mt-2"
            >
              Shop the ritual
            </a>
          </div>
        )}

        {/* 
          HERO CONTENT (Rating, Headline with Handwriting Script, Subtitle, CTAs, Floating 92% Card)
        */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-12 sm:mt-16 pb-2">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-8 max-w-xl">
            {/* Rating Badge: 3 avatars + 5 stars + 4.9 · 12k+ daily rituals */}
            <div className="inline-flex items-center gap-2.5 bg-black/40 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full mb-5">
              <div className="flex -space-x-1.5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Reviewer"
                  className="w-5 h-5 rounded-full border border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Reviewer"
                  className="w-5 h-5 rounded-full border border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Reviewer"
                  className="w-5 h-5 rounded-full border border-white object-cover"
                />
              </div>
              <div className="flex items-center gap-1.5 text-white">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 stroke-none" />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-white/95">
                  4.9 · 12k+ daily rituals
                </span>
              </div>
            </div>

            {/* Main Headline with Handwriting Cursive Font for "Inner Rhythm" */}
            <h1 className="text-white font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] tracking-tight leading-[1.1] mb-4 drop-shadow-sm">
              Return to Your <br />
              Natural <span className="font-handwriting text-[1.18em] font-normal text-white">Inner Rhythm</span>
            </h1>

            {/* Subheading */}
            <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mb-7 drop-shadow-xs">
              Four trusty herbs in one easy daily routine, all plant-based and perfect for real life every day!
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Green Pill Button */}
              <a
                href="#shop"
                className="bg-[#488B5B] hover:bg-[#3B734A] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Shop the ritual
              </a>

              {/* White Frosted Glass Pill Button */}
              <a
                href="#quiz"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full border border-white/30 transition-all"
              >
                Take the dosha quiz
              </a>
            </div>
          </div>

          {/* Right Column: Floating 92% Proof Card with Green Progress Bar */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="bg-white rounded-[1.5rem] sm:rounded-[1.75rem] shadow-2xl overflow-hidden w-[205px] sm:w-[225px] transform hover:scale-105 transition-all duration-300">
              {/* Full Card Width Image: Flush with top and sides with zero outer padding */}
              <div className="w-full h-32 sm:h-36 overflow-hidden bg-[#FAF7F2]">
                <img
                  src="/images/card-92-exact-hd.jpg?v=2"
                  alt="Herbal elixir bottle with lavender and botanicals"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text & Progress Section */}
              <div className="p-4 sm:p-5 pt-3 sm:pt-4 bg-white">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#1C221D] leading-none mb-1">
                  92%
                </div>
                <p className="text-[11px] text-gray-500 font-medium leading-snug mb-3">
                  feel calmer in 4 weeks
                </p>
                {/* Green Progress Indicator Line */}
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#3D7B52] rounded-full w-[92%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
