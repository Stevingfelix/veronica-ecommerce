import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Plus, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { PRODUCTS_DATABASE, ProductItem } from '../data/products';

export type { ProductItem };

interface TraditionAndProductsProps {
  onAddToCart: (product: ProductItem) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistIds: string[];
  onSelectProduct?: (product: ProductItem) => void;
}

export const TraditionAndProducts: React.FC<TraditionAndProductsProps> = ({
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onSelectProduct,
}) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const CARDS_PER_PAGE = 4;

  const tagsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (!tagsContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = tagsContainerRef.current;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, []);

  const scrollTags = (direction: 'left' | 'right') => {
    if (!tagsContainerRef.current) return;
    const scrollAmount = direction === 'left' ? -200 : 200;
    tagsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const categories = [
    { name: 'All', count: 116 },
    { name: 'Calm', count: 8 },
    { name: 'Immunity', count: 14 },
    { name: 'Energy', count: 23 },
    { name: 'Glow', count: 4 },
    { name: 'Focus', count: 17 },
    { name: 'Gut', count: 6 },
    { name: 'Skin', count: 36 },
  ];

  const farmCards = [
    {
      title: 'Tulsi · Kerala',
      image: '/images/card3-tulsi-hd.jpg',
    },
    {
      title: 'Turmeric · Erode',
      image: '/images/card3-turmeric-hd.jpg',
    },
  ];

  const handleCategorySelect = (catName: string) => {
    setActiveFilter(catName);
    setCurrentPage(1);
  };

  const filteredProducts =
    activeFilter === 'All'
      ? PRODUCTS_DATABASE
      : PRODUCTS_DATABASE.filter((p) => p.category === activeFilter);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / CARDS_PER_PAGE));
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const currentViewProducts = filteredProducts.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE
  );

  // Universal Sliding Window Pagination: Never exceeds 4 numbered buttons
  const getVisiblePages = (current: number, total: number) => {
    if (total <= 4) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    let start = Math.max(1, current - 1);
    let end = start + 3;
    if (end > total) {
      end = total;
      start = Math.max(1, end - 3);
    }
    const pages: number[] = [];
    for (let p = start; p <= end; p++) {
      pages.push(p);
    }
    return pages;
  };
  const visiblePages = getVisiblePages(currentPage, totalPages);
  return (
    <div className="w-full flex flex-col gap-28 sm:gap-36 lg:gap-40">
      {/* ========================================================= */}
      {/* SECTION 2: ROOTED IN TRADITION, MADE FOR TODAY             */}
      {/* ========================================================= */}
      <section id="about" className="w-full pt-14 sm:pt-24 lg:pt-32">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 sm:mb-10"
        >
          {/* Left Title: Rooted in ancient botany, verified by modern science */}
          <div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-[2.65rem] text-[#161B16] tracking-tight leading-[1.15]">
              Rooted in ancient botany, <br />
              <span className="font-handwriting text-[1.16em] font-normal text-[#161B16]">
                verified by modern science
              </span>
            </h2>
          </div>

          {/* Right Description & Our Story CTA Button */}
          <div className="max-w-xs sm:max-w-sm flex flex-col items-start gap-4">
            <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
              Crafted from single-origin botanicals nurtured in the mineral-rich soils of Kerala. We harvest at peak potency to protect delicate plant enzymes that your body recognizes intuitively.
            </p>
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-[#1B211C] hover:bg-black text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors shadow-xs"
            >
              Our Story
            </a>
          </div>
        </motion.div>

        {/* 3 Bento Cards Row */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch"
        >
          {/* 
            CARD 1 (Left): Full-Bleed Card Background Photo + Floating "Trusted by nature" 68% Badge
          */}
          <div className="md:col-span-5 relative rounded-3xl sm:rounded-[2rem] overflow-hidden min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-4 sm:p-5 shadow-xs group">
            {/* Full Card Image as Background */}
            <img
              src="/images/card1-ayurvedic-hd.jpg"
              alt="Ayurvedic herbs with white supplement bottle, fresh lemon and leaves"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0"
            />
            {/* Subtle soft gradient overlay so bottom badge pops crisply */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent z-0 pointer-events-none" />

            {/* ONE SINGLE Floating "Trusted by nature" Segmented Progress Card */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-black/5 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Green Botanical Icon Box */}
                  <div className="w-10 h-10 rounded-xl bg-[#E8F3E5] flex items-center justify-center text-[#3D7B52] shadow-xs flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-[#1B211C] leading-tight">
                      Trusted by nature
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium mt-0.5">
                      Energy boost
                    </div>
                  </div>
                </div>

                {/* 68% Label */}
                <span className="font-display font-extrabold text-xs sm:text-sm text-[#1B211C]">
                  68%
                </span>
              </div>

              {/* Segmented Capsule Meter Bar (28 ticks: 19 filled black, 9 gray) */}
              <div className="flex items-center gap-[3px] pt-1">
                {[...Array(28)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-3 rounded-full flex-1 transition-colors ${
                      i < 19 ? 'bg-[#1B211C]' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 
            CARD 2 (Middle): Whole-herb sourcing White Card with Leaf Icon & 12k+ Social Proof
          */}
          <div className="md:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-xs flex flex-col justify-between min-h-[380px] sm:min-h-[420px]">
            <div>
              {/* Light Green Circle with Leaf Line Icon */}
              <div className="w-11 h-11 rounded-full bg-[#E5F2E5] text-[#3D7B52] flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>

              {/* Title with Handwriting font for "sourcing" */}
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#1B211C] mb-3 leading-snug">
                Whole-herb{' '}
                <span className="font-handwriting text-[1.16em] font-normal text-[#1B211C]">
                  sourcing
                </span>
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-normal">
                Whole roots and leaves from farms we visit every season. Never extracts we can’t trace.
              </p>
            </div>

            {/* Bottom Proof Divider */}
            <div className="pt-6 border-t border-black/5 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                {/* 3 User Avatar Circles */}
                <div className="flex -space-x-1.5">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                    alt="User"
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                    alt="User"
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
                    alt="User"
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                </div>

                {/* 5 Golden Stars */}
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 stroke-none" />
                  ))}
                </div>
              </div>

              {/* Social Proof Line */}
              <p className="text-[11px] text-gray-500 font-medium">
                Trusted by 12k+ people in their daily ritual
              </p>
            </div>
          </div>

          {/* 
            CARD 3 (Right): Dark Charcoal Card with Farm Photos & Qualities Pill Tags
          */}
          <div className="md:col-span-3 bg-[#262B27] text-white rounded-3xl p-5 sm:p-6 shadow-md flex flex-col justify-between min-h-[380px] sm:min-h-[420px]">
            <div>
              {/* Top Header inside card: Qualities from our farms + < > controls */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-gray-200">
                  Qualities from our farms
                </span>
                <div className="flex items-center gap-1 text-gray-400">
                  <button
                    className="w-5 h-5 flex items-center justify-center hover:text-white transition-colors"
                    aria-label="Previous Farm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    className="w-5 h-5 flex items-center justify-center hover:text-white transition-colors"
                    aria-label="Next Farm"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 2 Side-by-Side Farm Photo Cards with Tulsi Kerala & Turmeric Erode */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {farmCards.map((farm, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl overflow-hidden bg-[#333934] p-1.5 flex flex-col gap-1.5 shadow-xs"
                  >
                    <div className="w-full h-24 sm:h-28 rounded-xl overflow-hidden bg-neutral-800">
                      <img
                        src={farm.image}
                        alt={farm.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[10px] text-gray-300 font-medium text-center truncate px-1">
                      {farm.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pill Tags: Hand-harvested, Small-batch, Lab-tested */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full font-medium">
                  Hand-harvested
                </span>
                <span className="text-[10px] text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full font-medium">
                  Small-batch
                </span>
                <span className="text-[10px] text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full font-medium">
                  Lab-tested
                </span>
              </div>
            </div>

            {/* Bottom Farm Counter Note */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-[10px] text-gray-400 font-normal tracking-wide">
                3 partner farms across Bangladesh
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: SHOP BY HOW YOU WANT TO FEEL                   */}
      {/* Generous breathing space & frosted glassmorphism cards    */}
      {/* ========================================================= */}
      <section id="shop" className="w-full text-center pt-12 sm:pt-16 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#161B16] tracking-tight leading-tight mb-3">
            Targeted blends for how you{' '}
            <span className="font-handwriting text-[1.16em] font-normal text-[#161B16]">
              want to feel
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Each single-origin formulation is calibrated to restore equilibrium and support your daily circadian rhythm.
          </p>

          {/* Filter Pill Row Container: Inline Chevrons + Scrollable Tags on the Same Line */}
          <div className="max-w-4xl mx-auto pt-6 pb-2 px-2 sm:px-4 flex items-center justify-center gap-1.5 sm:gap-2">
            {/* Left Inline Scroll Button */}
            <button
              onClick={() => scrollTags('left')}
              disabled={!canScrollLeft}
              className={`w-8 h-8 rounded-full bg-white shadow-xs border border-stone-200/90 flex items-center justify-center text-stone-700 hover:text-[#3D7B52] hover:border-[#3D7B52]/40 transition-all shrink-0 cursor-pointer active:scale-90 ${
                canScrollLeft ? 'opacity-100 hover:bg-stone-50' : 'opacity-20 cursor-not-allowed pointer-events-none'
              }`}
              aria-label="Scroll categories left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Scrollable Filter Row Container */}
            <div className="relative flex-1 overflow-hidden min-w-0">
              {/* Left Edge Gradient Fade */}
              <div
                className={`absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
                  canScrollLeft ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Tags Row */}
              <div
                ref={tagsContainerRef}
                onScroll={checkScrollPosition}
                className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 sm:justify-center"
              >
                {categories.map((cat) => {
                  const isActive = activeFilter === cat.name;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => handleCategorySelect(cat.name)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                        isActive
                          ? 'bg-[#1B211C] text-white shadow-xs'
                          : 'bg-[#F0ECE5] text-gray-700 hover:bg-gray-200 border border-black/5'
                      }`}
                    >
                      {cat.name}
                      <span className={`ml-1 text-[10px] ${isActive ? 'text-gray-300' : 'text-gray-400'}`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Edge Gradient Fade */}
              <div
                className={`absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
                  canScrollRight ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>

            {/* Right Inline Scroll Button */}
            <button
              onClick={() => scrollTags('right')}
              disabled={!canScrollRight}
              className={`w-8 h-8 rounded-full bg-white shadow-xs border border-stone-200/90 flex items-center justify-center text-stone-700 hover:text-[#3D7B52] hover:border-[#3D7B52]/40 transition-all shrink-0 cursor-pointer active:scale-90 ${
                canScrollRight ? 'opacity-100 hover:bg-stone-50' : 'opacity-20 cursor-not-allowed pointer-events-none'
              }`}
              aria-label="Scroll categories right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Product Cards Grid & Pagination with Smooth Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >

        {/* Product Cards Grid: Generous breathing space below category filter tags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mt-8 sm:mt-12 lg:mt-16">
          {currentViewProducts.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);

            return (
              <div
                key={product.id}
                className="group relative rounded-3xl overflow-hidden min-h-[540px] sm:min-h-[580px] lg:min-h-[600px] flex flex-col justify-between p-4 sm:p-5 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1.5 bg-[#F5F2EB]"
              >
                {/* 1. Full Card Background Image with Plain / Studio Background, framed in top portion */}
                <div
                  onClick={() => onSelectProduct && onSelectProduct(product)}
                  className="absolute inset-0 cursor-pointer z-0"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle soft gradient overlay so bottom badge pops crisply without darkening the product */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                </div>

                {/* 2. Top Header Elements: Frosted Category Pill + Heart Wishlist Button */}
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className="glass-pill px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#161B16] border border-white/60 shadow-xs"
                    style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
                  >
                    {product.tag}
                  </span>

                  <button
                    onClick={() => onToggleWishlist(product.id)}
                    className="glass-pill w-9 h-9 rounded-full text-gray-700 flex items-center justify-center border border-white/60 shadow-xs transition-all hover:scale-110 active:scale-95"
                    style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
                    aria-label="Add to Wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isWishlisted
                          ? 'fill-red-500 text-red-500'
                          : 'hover:text-[#3D7B52]'
                      }`}
                    />
                  </button>
                </div>

                {/* 3. Bottom Glassmorphic Parent Container with Generous Breathing Room from Product Photo */}
                <div
                  className="glass-card relative z-10 rounded-2xl p-3.5 sm:p-4 flex flex-col gap-2 mt-auto transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.40) 100%)',
                    backdropFilter: 'blur(28px) saturate(200%)',
                    WebkitBackdropFilter: 'blur(28px) saturate(200%)',
                    border: '1px solid rgba(255, 255, 255, 0.80)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.16), inset 0 1px 1px 0 rgba(255, 255, 255, 0.85)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#245236] drop-shadow-xs">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 stroke-none" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-gray-700">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <h3
                    onClick={() => onSelectProduct && onSelectProduct(product)}
                    className="font-sans font-bold text-base sm:text-lg text-[#161B16] group-hover:text-[#245236] transition-colors leading-tight drop-shadow-xs cursor-pointer"
                  >
                    {product.name}
                  </h3>

                  <div className="pt-2 border-t border-black/5 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wide block leading-none">
                        Ritual
                      </span>
                      <span className="font-display font-extrabold text-xl text-[#161B16]">
                        ${product.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2">
                      {/* View Product Details Button */}
                      <button
                        onClick={() => onSelectProduct && onSelectProduct(product)}
                        className="px-3 py-1.5 sm:py-2 rounded-full bg-white/80 hover:bg-white text-[#161B16] text-xs font-bold border border-black/5 shadow-2xs hover:shadow-xs hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                        aria-label={`View details for ${product.name}`}
                      >
                        <Eye className="w-3.5 h-3.5 text-[#3D7B52]" />
                        <span>View</span>
                      </button>

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => onAddToCart(product)}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#3D7B52] hover:bg-[#2E5F3F] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer"
                        aria-label={`Add ${product.name} to Cart`}
                      >
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Universal Glassmorphism Pagination Control (Sliding window of at most 4 numbers, perfectly centered) */}
        {totalPages > 1 && (
          <div className="w-full flex flex-col items-center justify-center gap-3 mt-12 sm:mt-16 text-center">
            <div
              className="inline-flex items-center gap-2 sm:gap-3 px-5 py-2.5 rounded-full shadow-lg mx-auto"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.45)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.65)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
              }}
            >
              {/* Previous Direction Button */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  currentPage === 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-[#161B16] hover:bg-white/80 shadow-xs hover:scale-105 active:scale-95'
                }`}
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Numbered Page Buttons: strictly capped to at most 4 visible numbers */}
              <div className="flex items-center gap-1.5 px-2">
                {visiblePages.map((pageNum) => {
                  const isCurrent = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`text-xs font-bold rounded-full transition-all flex items-center justify-center ${
                        isCurrent
                          ? 'w-7 h-7 bg-[#161B16] text-white shadow-xs'
                          : 'w-7 h-7 text-gray-700 hover:bg-white/60'
                      }`}
                      aria-label={`Page ${pageNum}`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              {/* Next Direction Button: shifts the sliding window */}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  currentPage === totalPages
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-[#161B16] hover:bg-white/80 shadow-xs hover:scale-105 active:scale-95'
                }`}
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <span className="text-xs text-gray-500 font-medium tracking-wide">
              Showing {startIndex + 1}–{Math.min(filteredProducts.length, startIndex + CARDS_PER_PAGE)} of {filteredProducts.length} blends
            </span>
          </div>
        )}
        </motion.div>
      </section>
    </div>
  );
};
