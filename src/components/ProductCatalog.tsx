import React, { useState } from 'react';
import { Heart, Plus, Star } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  category: string;
  tag: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  bgTone: string;
}

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistIds: string[];
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
}) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { name: 'All', count: 8 },
    { name: 'Calm', count: 8 },
    { name: 'Immunity', count: 12 },
    { name: 'Energy', count: 6 },
    { name: 'Skin', count: 4 },
    { name: 'Focus', count: 7 },
    { name: 'Gut', count: 9 },
  ];

  const products: Product[] = [
    {
      id: '1',
      name: 'Moringa Greens',
      category: 'Energy',
      tag: 'Energy',
      price: 32,
      rating: 4.9,
      reviews: 120,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      bgTone: 'bg-[#F4ECE2]',
    },
    {
      id: '2',
      name: 'Tulsi Capsules',
      category: 'Immunity',
      tag: 'Immunity',
      price: 24,
      rating: 4.9,
      reviews: 85,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
      bgTone: 'bg-[#EBF0E6]',
    },
    {
      id: '3',
      name: 'Ashwagandha Gummies',
      category: 'Calm',
      tag: 'Calm',
      price: 28,
      rating: 5.0,
      reviews: 210,
      image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=600&q=80',
      bgTone: 'bg-[#F7EFE1]',
    },
    {
      id: '4',
      name: 'Triphala Capsules',
      category: 'Gut',
      tag: 'Gut',
      price: 22,
      rating: 4.8,
      reviews: 94,
      image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=600&q=80',
      bgTone: 'bg-[#ECEAE4]',
    },
    {
      id: '5',
      name: 'Green Superfood Tin',
      category: 'Energy',
      tag: 'Energy',
      price: 22,
      rating: 4.9,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=600&q=80',
      bgTone: 'bg-[#EAEFE8]',
    },
    {
      id: '6',
      name: 'Turmeric Glow Tea',
      category: 'Gut',
      tag: 'Gut',
      price: 18,
      rating: 4.9,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=600&q=80',
      bgTone: 'bg-[#F6EFE7]',
    },
    {
      id: '7',
      name: 'Clear-Skin Tablets',
      category: 'Skin',
      tag: 'Skin',
      price: 20,
      rating: 5.0,
      reviews: 88,
      image: 'https://images.unsplash.com/photo-1608248597359-009941328014?auto=format&fit=crop&w=600&q=80',
      bgTone: 'bg-[#EFEAE2]',
    },
    {
      id: '8',
      name: 'Roasted Porica Drops',
      category: 'Focus',
      tag: 'Focus',
      price: 26,
      rating: 4.8,
      reviews: 115,
      image: 'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=600&q=80',
      bgTone: 'bg-[#EDE5DC]',
    },
  ];

  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section id="shop" className="px-2 sm:px-3.5 md:px-4 my-4 sm:my-5 w-full max-w-[1720px] mx-auto">
      <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-10 lg:p-14 shadow-xs">
        {/* Title & Subheading */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-botanix-forest tracking-tight leading-tight mb-3">
            Shop by how you <span className="font-editorial italic font-normal text-botanix-green">want to feel</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Each blend is carefully crafted to help you quickly find your ideal ritual.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveFilter(cat.name)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-botanix-forest text-white shadow-xs'
                    : 'bg-[#F4EFEA] text-gray-700 hover:bg-gray-200 border border-black/5'
                }`}
              >
                {cat.name}
                {cat.name !== 'All' && (
                  <span className={`ml-1 text-[10px] ${isActive ? 'text-gray-300' : 'text-gray-400'}`}>
                    ({cat.count})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 8 Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);

            return (
              <div
                key={product.id}
                className="group bg-[#FAF7F2] rounded-3xl p-4 border border-black/5 hover:border-black/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Card Container with Heart Favorite Button */}
                  <div
                    className={`relative w-full h-56 rounded-2xl overflow-hidden ${product.bgTone} p-4 flex items-center justify-center`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                    />

                    {/* Heart Button */}
                    <button
                      onClick={() => onToggleWishlist(product.id)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-600 flex items-center justify-center shadow-xs transition-colors"
                      aria-label="Add to Wishlist"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isWishlisted
                            ? 'fill-red-500 text-red-500'
                            : 'hover:text-botanix-green'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Details */}
                  <div className="pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                      {product.tag}
                    </span>
                    <h3 className="font-sans font-bold text-base text-botanix-forest group-hover:text-botanix-green transition-colors">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <div className="flex text-amber-400">
                        <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                      </div>
                      <span className="text-xs font-bold text-gray-800">
                        {product.rating}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price & Add to Cart Button */}
                <div className="pt-4 mt-2 border-t border-black/5 flex items-center justify-between">
                  <span className="font-display font-bold text-lg text-botanix-forest">
                    ${product.price}
                  </span>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-8 h-8 rounded-full bg-botanix-green hover:bg-botanix-green-dark text-white flex items-center justify-center shadow-xs hover:scale-110 transition-all"
                    aria-label={`Add ${product.name} to Cart`}
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
