import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingNavProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenSearch,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal floating actions once scrolled past the hero header (320px)
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* ========================================================= */}
          {/* DESKTOP VIEW: Right-hand side, bottom, vertically aligned */}
          {/* Light Frosted Glassmorphism Container with Dark Icons    */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 25, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 25, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="hidden md:flex fixed bottom-8 right-6 lg:right-8 z-40 flex-col items-center gap-2 select-none"
          >
            {/* Pure Glassmorphic Light Frosted Pill Container (Clean, No Heavy Shadow) */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-2 rounded-full flex flex-col items-center gap-2 shadow-xs">
              {/* Dark Search Icon Button */}
              <button
                onClick={onOpenSearch}
                className="w-10 h-10 rounded-full hover:bg-black/5 active:bg-black/10 text-[#1E2420] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer relative group"
                aria-label="Search remedies"
              >
                <Search className="w-4 h-4 text-[#1E2420] group-hover:text-[#3D7B52] transition-colors" />
                {/* Desktop Tooltip */}
                <span className="absolute right-12 bg-[#1E2420] text-white text-[11px] font-medium px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm">
                  Search
                </span>
              </button>

              {/* Dark Wishlist Icon Button */}
              <a
                href="#shop"
                className="w-10 h-10 rounded-full hover:bg-black/5 active:bg-black/10 text-[#1E2420] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer relative group"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4 text-[#1E2420] group-hover:text-[#3D7B52] transition-colors" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#3D7B52] text-white text-[10px] font-extrabold flex items-center justify-center shadow-xs">
                    {wishlistCount}
                  </span>
                )}
                <span className="absolute right-12 bg-[#1E2420] text-white text-[11px] font-medium px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm">
                  Wishlist ({wishlistCount})
                </span>
              </a>

              {/* Dark Cart Icon Button */}
              <button
                onClick={onOpenCart}
                className="w-10 h-10 rounded-full hover:bg-black/5 active:bg-black/10 text-[#1E2420] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer relative group"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4 text-[#1E2420] group-hover:text-[#3D7B52] transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#3D7B52] text-white text-[10px] font-extrabold flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
                <span className="absolute right-12 bg-[#1E2420] text-white text-[11px] font-medium px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm">
                  Cart ({cartCount})
                </span>
              </button>

              {/* Subtle Divider */}
              <div className="w-5 h-[1px] bg-stone-300/60 my-0.5" />

              {/* Scroll To Top Button */}
              <button
                onClick={scrollToTop}
                className="w-8 h-8 rounded-full hover:bg-black/5 active:bg-black/10 text-stone-600 hover:text-[#1E2420] flex items-center justify-center transition-all active:scale-90 cursor-pointer group relative"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span className="absolute right-12 bg-[#1E2420] text-white text-[11px] font-medium px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm">
                  Top
                </span>
              </button>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* MOBILE VIEW: Floating dock at the bottom center ("Thumb Zone") */}
          {/* Light Frosted Glassmorphism with Dark Icons (NO Heavy Shadow) */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 30, x: '-50%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="md:hidden fixed bottom-5 left-1/2 z-40 select-none"
          >
            {/* Pure Glassmorphic Light Frosted Mobile Dock */}
            <div className="bg-white/80 backdrop-blur-2xl border border-white/80 px-4 py-2 rounded-full flex items-center gap-4 shadow-xs">
              {/* Search */}
              <button
                onClick={onOpenSearch}
                className="w-9 h-9 rounded-full hover:bg-black/5 active:bg-black/10 text-[#1E2420] flex items-center justify-center transition-transform active:scale-90"
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-[#1E2420]" />
              </button>

              {/* Wishlist */}
              <a
                href="#shop"
                className="w-9 h-9 rounded-full hover:bg-black/5 active:bg-black/10 text-[#1E2420] flex items-center justify-center transition-transform active:scale-90 relative"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4 text-[#1E2420]" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#3D7B52] text-white text-[10px] font-extrabold flex items-center justify-center shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </a>

              {/* Cart */}
              <button
                onClick={onOpenCart}
                className="w-9 h-9 rounded-full hover:bg-black/5 active:bg-black/10 text-[#1E2420] flex items-center justify-center transition-transform active:scale-90 relative"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4 text-[#1E2420]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#3D7B52] text-white text-[10px] font-extrabold flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Quick Shop Button */}
              <a
                href="#shop"
                className="bg-[#3D7B52] active:bg-[#306040] text-white text-xs font-bold px-4 py-2 rounded-full shadow-xs transition-transform active:scale-95"
              >
                Shop
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
