import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, Plus, Minus, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductItem } from '../data/products';

interface ProductQuickViewModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: ProductItem, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  // Custom botanical story based on product category/tag
  const getBotanicalDetails = (prod: ProductItem) => {
    switch (prod.tag || prod.category) {
      case 'Energy':
        return {
          dosha: 'Balances Kapha & Vata',
          ingredients: ['Cold-Pressed Moringa Leaf', 'Organic Ceremonial Matcha', 'Holy Basil (Tulsi)'],
          ritual: 'Whisk 1 tsp into warm oat milk or your morning matcha bowl. Best consumed before 11 AM.',
          description: 'A pure, jitter-free green vitality blend formulated to sustain clear focus and calm physical stamina without adrenal depletion.',
        };
      case 'Calm':
        return {
          dosha: 'Soothes Vata & Pitta',
          ingredients: ['Wildcrafted KSM-66 Ashwagandha', 'Brahmi Extract', 'Cardamom Pod Essence'],
          ritual: 'Take 2 gummies or 1 tsp with warm chamomile infusion 45 minutes prior to sleep.',
          description: 'Deep nervous system restorative designed to quiet busy mental chatter, dissolve physical tension, and foster restorative REM sleep.',
        };
      case 'Immunity':
        return {
          dosha: 'Tridoshic (Balances all 3)',
          ingredients: ['Sacred Krishna Tulsi', 'Wild Black Elderberry', 'Amla Fruit Vitamin C'],
          ritual: 'Take 1 capsule twice daily with meals during seasonal transitions or travel.',
          description: 'Ancient Ayurvedic cellular shield providing bioavailability-enhanced bioflavonoids to empower innate lymphatic and immune resistance.',
        };
      case 'Gut':
        return {
          dosha: 'Balances Pitta & Kapha',
          ingredients: ['Organic Haritaki', 'Bibhitaki', 'Amalaki (Triphala Triad)'],
          ritual: 'Take 2 capsules each evening with a full glass of room-temperature water.',
          description: 'Traditional multi-century colon cleanse and gentle microbiome tonic that restores regular motility and optimizes nutrient absorption.',
        };
      case 'Glow':
      case 'Skin':
        return {
          dosha: 'Pacifies Pitta',
          ingredients: ['Kashmiri Red Saffron', 'Sandalwood Essence', 'Blue Lotus Petal Oil'],
          ritual: 'Warm 3-4 golden drops between palms and press gently into cleansed face and neck.',
          description: 'Micro-batched royal facial nectar infused with wild red saffron stigmas to brighten hyperpigmentation and impart a radiant glass-skin glow.',
        };
      default:
        return {
          dosha: 'Tridoshic (All Body Types)',
          ingredients: ['Organic Botanical Actives', 'Herbal Synergy Extracts', 'Ayurvedic Micronutrients'],
          ritual: 'Incorporate into your daily morning or twilight wellness ritual.',
          description: 'Pure, micro-batch whole-plant formulation hand-harvested at peak potency to restore equilibrium and physical resilience.',
        };
    }
  };

  const details = getBotanicalDetails(product);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-5xl lg:max-w-[1020px] bg-[#FAF7F2] rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-white/80 overflow-hidden my-auto"
          >
            {/* Close Button - Animated & Goes Green on Hover */}
            <button
              onClick={onClose}
              className="group absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md hover:bg-[#3D7B52] text-stone-700 hover:text-white flex items-center justify-center shadow-md transition-all duration-300 hover:rotate-90 active:scale-90 cursor-pointer"
              aria-label="Close product view"
            >
              <X className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[480px]">
              {/* Left Column: FULL CARD BLEED IMAGE */}
              <div className="relative md:col-span-5 w-full h-[320px] sm:h-[400px] md:h-full min-h-[320px] md:min-h-[500px] bg-[#EDE7DD] overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle soft gradient over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 pointer-events-none" />

                {/* Tag Badge */}
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md border border-white/80 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-[#3D7B52] shadow-sm">
                  {product.tag || product.category}
                </div>

                {/* Wishlist Button on Image */}
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className="absolute bottom-5 left-5 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md hover:bg-white flex items-center justify-center text-stone-700 shadow-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
                  aria-label="Toggle wishlist"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      isWishlisted ? 'fill-red-500 text-red-500' : 'text-stone-700 hover:text-[#3D7B52]'
                    }`}
                  />
                </button>
              </div>

              {/* Right Column: Information, Ritual, and Checkout Actions */}
              <div className="md:col-span-7 p-6 sm:p-9 lg:p-10 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                <div>
                  {/* Category & Dosha */}
                  <div className="flex items-center gap-2.5 mb-2.5 flex-wrap">
                    <span className="text-xs font-bold text-[#3D7B52] bg-[#3D7B52]/10 px-3 py-1 rounded-full">
                      {details.dosha}
                    </span>
                    <span className="text-xs text-stone-500 font-semibold">
                      Micro-batch No. 419
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[2rem] text-[#161B16] leading-tight mb-2.5">
                    {product.name}
                  </h2>

                  {/* Rating & Price */}
                  <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-stone-700">
                        {product.rating} (128 verified reviews)
                      </span>
                    </div>

                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#161B16]">
                      ${product.price}
                    </div>
                  </div>

                  {/* Story Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {details.description}
                  </p>

                  {/* Key Herbal Actives */}
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-2">
                      Key Botanical Actives
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {details.ingredients.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-semibold bg-white border border-stone-200/90 px-3 py-1.5 rounded-full text-stone-800 flex items-center gap-1.5 shadow-2xs"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-[#3D7B52]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Suggested Ritual / Dosage */}
                  <div className="bg-[#FAF4EB] border border-[#ECD9C5] rounded-2xl p-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#A66C38] block mb-1">
                      Daily Ritual Guidance
                    </span>
                    <p className="text-xs sm:text-sm text-[#544131] leading-relaxed">
                      {details.ritual}
                    </p>
                  </div>
                </div>

                {/* Bottom Purchasing Area */}
                <div className="space-y-4 pt-4 border-t border-stone-200">
                  <div className="flex items-center gap-3">
                    {/* Quantity Picker */}
                    <div className="flex items-center border border-stone-300 rounded-full bg-white px-2.5 py-1.5 shadow-2xs">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        disabled={quantity <= 1}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          quantity <= 1 ? 'text-stone-300' : 'text-stone-700 hover:bg-stone-100 cursor-pointer'
                        }`}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-9 text-center text-sm font-bold text-stone-800">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-stone-700 hover:bg-stone-100 transition-all cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Add to Cart CTA */}
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 bg-[#3D7B52] hover:bg-[#2E5F3F] active:bg-[#254F34] text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-4 px-6 rounded-full shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Ritual — ${(product.price * quantity).toFixed(0)}</span>
                    </button>
                  </div>

                  {/* Quality Badges: Perfectly fitted on one line with ZERO scrollbar */}
                  <div className="flex items-center justify-between gap-3 text-xs text-stone-600 pt-3 border-t border-stone-200/80">
                    <span className="flex items-center gap-1.5 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-[#3D7B52] shrink-0" />
                      <span>Organic certified</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#3D7B52] shrink-0" />
                      <span>Third-party lab tested</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-[#3D7B52] shrink-0" />
                      <span>Free carbon-neutral shipping</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
