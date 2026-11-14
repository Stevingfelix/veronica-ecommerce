import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { TraditionAndProducts, ProductItem } from './components/TraditionAndProducts';
import { WhyThousands } from './components/WhyThousands';
import { Testimonials } from './components/Testimonials';
import { GuaranteeBanner } from './components/GuaranteeBanner';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { FloatingNav } from './components/FloatingNav';
import { SearchModal } from './components/SearchModal';
import { AuthModal } from './components/AuthModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { DoshaQuizModal } from './components/DoshaQuizModal';
import { ToastNotification, ToastMessage } from './components/ToastNotification';
import { PRODUCTS_DATABASE } from './data/products';

const STORAGE_KEY_CART = 'veronica_cart_v1';
const STORAGE_KEY_WISHLIST = 'veronica_wishlist_v1';

export const App: React.FC = () => {
  // 1. Cart Items with Local Storage Persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CART);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Error reading cart from localStorage', e);
    }
    return [
      {
        product: {
          id: 'sig-1',
          name: 'Moringa Greens Powder',
          category: 'Energy',
          tag: 'Energy',
          price: 32,
          rating: 4.9,
          reviews: 120,
          image: '/images/products/moringa_greens_powder_clean_hd.jpg',
          bgTone: 'bg-[#F5EFE6]',
        },
        quantity: 1,
      },
    ];
  });

  // 2. Wishlist IDs with Local Storage Persistence
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_WISHLIST);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Error reading wishlist from localStorage', e);
    }
    return ['sig-1', 'sig-3'];
  });

  // Modals & Drawers Visibility State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isDoshaQuizOpen, setIsDoshaQuizOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Snappy Toast Notification Queue
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync Cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CART, JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Error saving cart to localStorage', e);
    }
  }, [cartItems]);

  // Sync Wishlist to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_WISHLIST, JSON.stringify(wishlistIds));
    } catch (e) {
      console.warn('Error saving wishlist to localStorage', e);
    }
  }, [wishlistIds]);

  const addToast = (
    toast: Omit<ToastMessage, 'id'> | string,
    type: 'success' | 'wishlist' | 'info' = 'success'
  ) => {
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    if (typeof toast === 'string') {
      setToasts((prev) => [...prev, { id, title: toast, type }]);
    } else {
      setToasts((prev) => [...prev, { id, ...toast }]);
    }
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAddToCart = (product: ProductItem, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          product: {
            ...product,
            rating: typeof product.rating === 'string' ? parseFloat(product.rating) : product.rating || 4.9,
            reviews: 120,
          },
          quantity,
        },
      ];
    });

    // Rich luxury toast with thumbnail, title, price and instant "View Cart" action
    addToast({
      title: product.name,
      subtitle: `${quantity > 1 ? `${quantity}x ` : ''}Added to your ritual`,
      image: product.image,
      price: product.price * quantity,
      type: 'success',
      actionLabel: 'View Cart',
      onAction: () => setIsCartOpen(true),
    });
    // Note: Do NOT automatically open cart drawer per user request
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    const removedItem = cartItems.find((item) => item.product.id === productId);
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    if (removedItem) {
      addToast({
        title: removedItem.product.name,
        subtitle: 'Removed from cart',
        image: removedItem.product.image,
        type: 'info',
      });
    }
  };

  const handleToggleWishlist = (productId: string) => {
    const product = PRODUCTS_DATABASE.find((p) => p.id === productId);
    const prodName = product ? product.name : 'Item';

    setWishlistIds((prev) => {
      const isAlready = prev.includes(productId);
      if (isAlready) {
        addToast({
          title: prodName,
          subtitle: 'Removed from wishlist',
          image: product?.image,
          type: 'info',
        });
        return prev.filter((id) => id !== productId);
      } else {
        addToast({
          title: prodName,
          subtitle: 'Saved to your wishlist',
          image: product?.image,
          price: product?.price,
          type: 'wishlist',
          actionLabel: 'View Wishlist',
          onAction: () => setIsWishlistOpen(true),
        });
        return [...prev, productId];
      }
    });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    const product = PRODUCTS_DATABASE.find((p) => p.id === productId);
    setWishlistIds((prev) => prev.filter((id) => id !== productId));
    if (product) {
      addToast({
        title: product.name,
        subtitle: 'Removed from wishlist',
        image: product.image,
        type: 'info',
      });
    }
  };

  const handleMoveAllToCart = () => {
    const wishlisted = PRODUCTS_DATABASE.filter((p) => wishlistIds.includes(p.id));
    if (wishlisted.length === 0) return;

    setCartItems((prev) => {
      let updated = [...prev];
      wishlisted.forEach((p) => {
        const existIdx = updated.findIndex((item) => item.product.id === p.id);
        if (existIdx >= 0) {
          updated[existIdx] = {
            ...updated[existIdx],
            quantity: updated[existIdx].quantity + 1,
          };
        } else {
          updated.push({
            product: {
              ...p,
              rating: typeof p.rating === 'string' ? parseFloat(p.rating) : p.rating || 4.9,
              reviews: 120,
            },
            quantity: 1,
          });
        }
      });
      return updated;
    });

    setWishlistIds([]);
    setIsWishlistOpen(false);
    addToast({
      title: `${wishlisted.length} remedies moved to cart`,
      subtitle: 'Your saved items are now in your ritual cart',
      type: 'success',
      actionLabel: 'View Cart',
      onAction: () => setIsCartOpen(true),
    });
  };

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1D221E] font-sans selection:bg-[#3D7B52] selection:text-white flex flex-col antialiased">
      {/* Hero: Edge-to-edge on mobile, framed luxury card on tablet & desktop */}
      <div className="w-full sm:max-w-[97vw] 2xl:max-w-[1860px] mx-auto sm:px-3 md:px-4 lg:px-5 sm:pt-6 lg:pt-8">
        <Hero
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          wishlistCount={wishlistIds.length}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenWishlist={() => setIsWishlistOpen(true)}
          onOpenAuth={() => setIsAuthOpen(true)}
          onOpenDoshaQuiz={() => setIsDoshaQuizOpen(true)}
        />
      </div>

      {/* Main Body Content: Preserves clean breathing room and gutters */}
      <main className="w-full max-w-[97vw] 2xl:max-w-[1860px] mx-auto px-3 sm:px-4 lg:px-5 py-8 sm:py-12 lg:py-14 flex flex-col gap-10 sm:gap-14 lg:gap-16">
        {/* Section 2: Rooted in tradition & Section 3: Products */}
        <TraditionAndProducts
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          onSelectProduct={handleSelectProduct}
        />

        {/* Section 4: Why thousands choose a simpler ritual */}
        <WhyThousands />

        {/* Section 5: Real vibes, real folks */}
        <Testimonials />

        {/* Section 6: Feel the difference in 30 days */}
        <GuaranteeBanner onOpenDoshaQuiz={() => setIsDoshaQuizOpen(true)} />
      </main>

      {/* Footer: Edge-to-edge on mobile, framed luxury card on tablet & desktop */}
      <div className="w-full sm:max-w-[97vw] 2xl:max-w-[1860px] mx-auto sm:px-3 md:px-4 lg:px-5 sm:pb-8 lg:pb-12">
        <Footer />
      </div>

      {/* 1. Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* 2. Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={handleAddToCart}
        onMoveAllToCart={handleMoveAllToCart}
      />

      {/* 3. Floating Action Dock: Desktop Bottom-Right & Mobile Bottom-Center */}
      <FloatingNav
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      {/* 4. Live Product Search Modal Overlay */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onAddToCart={handleAddToCart}
        onSelectProduct={handleSelectProduct}
      />

      {/* 5. Frosted Glass Authentication Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccessToast={(msg) => addToast(msg, 'success')}
      />

      {/* 6. Interactive Ayurvedic Dosha Quiz Modal */}
      <DoshaQuizModal
        isOpen={isDoshaQuizOpen}
        onClose={() => setIsDoshaQuizOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* 7. Product Quick View & Details Modal */}
      <ProductQuickViewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* 8. Toast Notifications (Mounted on top of all modals & drawers) */}
      <ToastNotification toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
};

export default App;
