import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS_DATABASE } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: any) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSelectedTag('All');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const categories = ['All', 'Energy', 'Immunity', 'Calm', 'Gut'];

  // Filter products based on search query and category tag
  const filteredProducts = PRODUCTS_DATABASE.filter((product) => {
    const matchesTag = selectedTag === 'All' || product.tag === selectedTag;
    const matchesQuery =
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.tag.toLowerCase().includes(query.toLowerCase()) ||
      (product.category && product.category.toLowerCase().includes(query.toLowerCase()));
    return matchesTag && matchesQuery;
  }).slice(0, 8); // Display top 8 matches

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 sm:pt-20 px-4 sm:px-6">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-[#1E2420] text-white rounded-3xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden z-10 flex flex-col max-h-[85vh]"
          >
            {/* Search Input Header */}
            <div className="relative p-5 sm:p-6 border-b border-white/10 flex items-center gap-3">
              <Search className="w-5 h-5 text-stone-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Ayurvedic herbs, blends, doshas..."
                className="w-full bg-transparent text-lg sm:text-xl text-white placeholder-stone-400 focus:outline-hidden font-sans"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="text-stone-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-stone-300 hover:text-white transition-colors text-xs ml-1"
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Filter Tag Pills */}
            <div className="px-5 sm:px-6 py-3 border-b border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-medium text-stone-400 uppercase tracking-wider mr-1">
                Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedTag(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-full transition-all shrink-0 cursor-pointer ${
                    selectedTag === cat
                      ? 'bg-[#84B281] text-[#162017] font-semibold shadow-xs'
                      : 'bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results List */}
            <div className="p-5 sm:p-6 overflow-y-auto max-h-[50vh] space-y-3">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-stone-400 text-sm">
                    No remedies found matching "{query}".
                  </p>
                  <p className="text-stone-500 text-xs mt-1">
                    Try searching for Moringa, Ashwagandha, Tulsi, or Matcha.
                  </p>
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-stone-800 overflow-hidden shrink-0 border border-white/10">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-sm sm:text-base text-white truncate">
                            {product.name}
                          </h4>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-stone-300">
                            {product.tag}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-stone-400 mt-0.5">
                          <span className="font-medium text-white">${product.price}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-amber-400">
                            <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                            {product.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onAddToCart({
                          id: product.id,
                          name: product.name,
                          category: product.category,
                          tag: product.tag,
                          price: product.price,
                          rating: 4.9,
                          reviews: 120,
                          image: product.image,
                          bgTone: product.bgTone,
                        });
                        onClose();
                      }}
                      className="shrink-0 flex items-center gap-1.5 bg-[#84B281] hover:bg-[#74A371] text-[#162017] text-xs font-semibold px-3.5 py-2 rounded-full transition-all active:scale-95 cursor-pointer shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Add</span>
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Quick Tip */}
            <div className="p-3.5 sm:p-4 bg-black/25 border-t border-white/5 flex items-center justify-between text-xs text-stone-400 px-6">
              <span>Press <kbd className="px-1.5 py-0.5 rounded-sm bg-white/10 text-stone-300 font-mono text-[10px]">ESC</kbd> to exit</span>
              <a
                href="#shop"
                onClick={onClose}
                className="flex items-center gap-1 text-[#84B281] hover:underline"
              >
                <span>View all catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
