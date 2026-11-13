import React from 'react';
import { Star } from 'lucide-react';

export const GuaranteeBanner: React.FC = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="bg-[#EAE4DC] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-10 lg:p-14 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 2 Staggered Imagery Cards */}
          <div className="hidden lg:grid lg:col-span-3 grid-cols-1 gap-4">
            <div className="h-40 rounded-2xl overflow-hidden shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80"
                alt="Ayurvedic clay cups"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-48 rounded-2xl overflow-hidden shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=400&q=80"
                alt="Botanical elixir bottles"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Column: Core Messaging & Guarantee */}
          <div className="lg:col-span-6 text-center px-2 sm:px-6">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-botanix-forest tracking-tight leading-tight mb-4">
              Feel the <br />
              <span className="font-editorial italic font-normal text-botanix-green">
                difference in 30 days
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-8">
              Pick your ritual. Try for a month. If you don't feel calmer, lighter, and more energized, it's 100% on us. No awkward questions asked.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <a
                href="#shop"
                className="bg-botanix-green hover:bg-botanix-green-dark text-white text-xs sm:text-sm font-bold uppercase tracking-wide px-7 py-3.5 rounded-full shadow-md transition-all"
              >
                Shop the ritual
              </a>
              <a
                href="#quiz"
                className="bg-white hover:bg-gray-50 text-botanix-forest text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full border border-black/10 shadow-xs transition-all"
              >
                Take the dosha quiz
              </a>
            </div>

            {/* Avatars + Guarantee */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex -space-x-1.5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Customer"
                  className="w-6 h-6 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Customer"
                  className="w-6 h-6 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Customer"
                  className="w-6 h-6 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-500 stroke-none" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-700">
                  Free shipping & 30-day guarantee
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Staggered Imagery Cards */}
          <div className="hidden lg:grid lg:col-span-3 grid-cols-1 gap-4">
            <div className="h-48 rounded-2xl overflow-hidden shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80"
                alt="Pouring fresh green herbal tea"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 rounded-2xl overflow-hidden shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1608248597359-009941328014?auto=format&fit=crop&w=400&q=80"
                alt="Avocado and botanical serum"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
