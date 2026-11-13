import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS_DATABASE, ProductItem } from '../data/products';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: ProductItem) => void;
  onMoveAllToCart?: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  onRemoveFromWishlist,
  onAddToCart,
  onMoveAllToCart,
}) => {
  // Retrieve product items matching the wishlist IDs
  const wishlistedProducts = PRODUCTS_DATABASE.filter((p) =>
    wishlistIds.includes(p.id)
  );

  const handleMoveToCart = (product: ProductItem) => {
    onAddToCart(product);
    onRemoveFromWishlist(product.id);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-xs cursor-pointer"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col h-full border-l border-white/60 overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-black/5 flex items-center justify-between bg-white/70 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#3D7B52]/10 text-[#3D7B52] flex items-center justify-center">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg text-[#161B16] leading-none">
                      Saved Rituals
                    </h2>
                    <span className="text-[11px] text-gray-500 font-medium">
                      {wishlistedProducts.length}{' '}
                      {wishlistedProducts.length === 1 ? 'item' : 'items'} in your wishlist
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="group p-2 rounded-full hover:bg-[#3D7B52] text-gray-500 hover:text-white transition-all duration-300 hover:rotate-90 active:scale-90 cursor-pointer"
                  aria-label="Close Wishlist"
                >
                  <X className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </button>
              </div>

              {/* Wishlist Items List */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
                {wishlistedProducts.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-500">
                    <div className="w-16 h-16 rounded-full bg-stone-200/50 flex items-center justify-center mb-4 text-stone-400">
                      <Heart className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#161B16] mb-1">
                      Your wishlist is empty
                    </h3>
                    <p className="text-xs text-stone-600 max-w-xs mb-6">
                      Save favorite remedies, seasonal herbs, and daily rituals here to review or purchase anytime.
                    </p>
                    <button
                      onClick={onClose}
                      className="inline-flex items-center gap-2 bg-[#3D7B52] hover:bg-[#2E5F3F] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <span>Explore Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  wishlistedProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex items-center gap-3.5 p-3.5 bg-white rounded-2xl border border-stone-200/70 shadow-2xs hover:border-[#3D7B52]/40 transition-all"
                    >
                      {/* Product Thumbnail - Fixed compact thumbnail box */}
                      <div className="w-16 h-16 min-w-[4rem] min-h-[4rem] max-w-[4rem] max-h-[4rem] rounded-xl overflow-hidden bg-[#F6F2EB] p-1 shrink-0 flex items-center justify-center border border-stone-200/60">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#3D7B52] block leading-none mb-1">
                          {product.tag || product.category}
                        </span>
                        <h4 className="font-bold text-xs sm:text-sm text-[#161B16] truncate leading-tight">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="font-display font-extrabold text-sm text-[#161B16]">
                            ${product.price}
                          </span>
                          <span className="text-[10px] text-stone-500 font-medium">
                            ★ {product.rating}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <button
                          onClick={() => onRemoveFromWishlist(product.id)}
                          className="group text-stone-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                          title="Remove from wishlist"
                          aria-label={`Remove ${product.name} from wishlist`}
                        >
                          <Trash2 className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                        </button>

                        <button
                          onClick={() => handleMoveToCart(product)}
                          className="flex items-center gap-1.5 bg-[#3D7B52] hover:bg-[#2E5F3F] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer whitespace-nowrap"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Move to Cart</span>
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer */}
              {wishlistedProducts.length > 0 && (
                <div className="p-5 sm:p-6 border-t border-black/5 bg-white/70 backdrop-blur-md space-y-3">
                  {onMoveAllToCart && (
                    <button
                      onClick={onMoveAllToCart}
                      className="w-full bg-[#3D7B52] hover:bg-[#2E5F3F] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-full shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Move All to Cart ({wishlistedProducts.length})</span>
                    </button>
                  )}

                  <p className="text-[11px] text-center text-stone-600">
                    Complimentary herbal consultations with orders over $50.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
