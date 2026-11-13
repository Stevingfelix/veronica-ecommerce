import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS_DATABASE } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: any) => void;
  onSelectProduct?: (product: any) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
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
  }).slice(0, 8);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-16 px-4 sm:px-6">
          {/* Subtle Dim Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-md"
          />

          {/* Lighter Luxury Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-[#FDFBF7] text-[#1E2420] rounded-[2rem] border border-stone-200/90 shadow-[0_25px_70px_rgba(0,0,0,0.18)] overflow-hidden z-10 flex flex-col max-h-[85vh]"
          >
            {/* Search Input Header with Elegant White Embedded Search Bar */}
            <div className="p-4 sm:p-6 pb-4 border-b border-stone-150">
              <div className="relative flex items-center bg-white border border-stone-200 hover:border-stone-300 focus-within:border-[#3D7B52] focus-within:ring-4 focus-within:ring-[#3D7B52]/10 rounded-2xl px-4 py-3 sm:py-3.5 shadow-2xs transition-all">
                <Search className="w-5 h-5 text-[#3D7B52] shrink-0 mr-3" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by symptom, herb, dosha, or benefit..."
                  className="w-full bg-transparent text-base sm:text-lg text-[#1E2420] placeholder-stone-400 border-none outline-none focus:outline-none focus:ring-0 font-sans"
                  style={{ outline: 'none', boxShadow: 'none' }}
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="text-stone-400 hover:text-stone-700 p-1 rounded-full hover:bg-stone-100 transition-colors mr-1 cursor-pointer"
                    aria-label="Clear query"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="group w-8 h-8 rounded-full bg-stone-150 hover:bg-[#3D7B52] flex items-center justify-center text-stone-600 hover:text-white transition-all duration-300 hover:rotate-90 active:scale-90 text-xs cursor-pointer ml-1"
                  aria-label="Close search"
                >
                  <X className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                </button>
              </div>
            </div>

            {/* Quick Filter Tag Pills */}
            <div className="px-5 sm:px-6 py-3 border-b border-stone-150 bg-[#FAF7F2] flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mr-1">
                Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedTag(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-full transition-all shrink-0 cursor-pointer ${
                    selectedTag === cat
                      ? 'bg-[#3D7B52] text-white font-semibold shadow-xs'
                      : 'bg-white hover:bg-stone-100 text-stone-600 border border-stone-200/80 shadow-2xs'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results List */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[50vh] space-y-2.5">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-stone-500 font-medium text-sm">
                    No remedies found matching "{query}".
                  </p>
                  <p className="text-stone-400 text-xs mt-1">
                    Try searching for Moringa, Ashwagandha, Tulsi, or Matcha.
                  </p>
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      if (onSelectProduct) {
                        onSelectProduct(product);
                        onClose();
                      }
                    }}
                    className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-white hover:bg-[#F7F4EC] border border-stone-200/70 hover:border-[#3D7B52]/40 transition-all shadow-2xs hover:shadow-xs group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-stone-50 overflow-hidden shrink-0 border border-stone-200/60 p-0.5">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-sm sm:text-base text-[#1E2420] truncate">
                            {product.name}
                          </h4>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#EAF1EA] text-[#2C623E]">
                            {product.tag}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
                          <span className="font-bold text-[#1E2420]">${product.price}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-amber-500">
                            <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                            {product.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
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
                      className="shrink-0 flex items-center gap-1.5 bg-[#3D7B52] hover:bg-[#2F5E3F] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all active:scale-95 cursor-pointer shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Quick Tip */}
            <div className="p-3.5 sm:p-4 bg-[#FAF7F2] border-t border-stone-150 flex items-center justify-between text-xs text-stone-500 px-6">
              <span>Press <kbd className="px-1.5 py-0.5 rounded-sm bg-white border border-stone-200 text-stone-600 font-mono text-[10px] shadow-2xs">ESC</kbd> to exit</span>
              <a
                href="#shop"
                onClick={onClose}
                className="flex items-center gap-1 text-[#3D7B52] font-semibold hover:underline"
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
