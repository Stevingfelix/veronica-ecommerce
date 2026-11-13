import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { TraditionAndProducts, ProductItem } from './components/TraditionAndProducts';
import { WhyThousands } from './components/WhyThousands';
import { Testimonials } from './components/Testimonials';
import { GuaranteeBanner } from './components/GuaranteeBanner';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';

export const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: {
        id: '1',
        name: 'Moringa Greens',
        category: 'Energy',
        tag: 'Energy',
        price: 32,
        rating: 4.9,
        reviews: 120,
        image: '/images/products/p1-moringa.jpg',
        bgTone: 'bg-[#F5EFE6]',
      },
      quantity: 1,
    },
  ]);

  const [wishlistIds, setWishlistIds] = useState<string[]>(['1', '3']);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: ProductItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          product: {
            ...product,
            rating: 4.9,
            reviews: 120,
          },
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
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
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1D221E] font-sans selection:bg-[#3D7B52] selection:text-white flex flex-col antialiased">
      {/* 
        MASTER CONTAINER
        Near full-width layout with elegant breathing room at top and slim side gutters
        matching high-end botanical reference layout
      */}
      <div className="w-full max-w-[97vw] 2xl:max-w-[1860px] mx-auto px-2 sm:px-3 md:px-4 lg:px-5 pt-5 sm:pt-7 lg:pt-8 pb-8 sm:pb-12 flex flex-col gap-10 sm:gap-14 lg:gap-16">
        {/* Full Hero Section with HD Yoga image & Integrated Header */}
        <Hero
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          wishlistCount={wishlistIds.length}
        />

        {/* Section 2: Rooted in tradition & Section 3: Products in same container */}
        <TraditionAndProducts
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* Section 4: Why thousands choose a simpler ritual */}
        <WhyThousands />

        {/* Section 5: Real vibes, real folks */}
        <Testimonials />

        {/* Section 6: Feel the difference in 30 days */}
        <GuaranteeBanner />

        {/* Section 7: Footer */}
        <Footer />
      </div>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default App;
