import React from 'react';
import { Star } from 'lucide-react';

export const GuaranteeBanner: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: 2 Staggered Floating Cards matching sample */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 items-start">
            {/* Top Left Card: Sunlit glass coffee cups on travertine stone */}
            <div className="w-full max-w-[270px] aspect-[1.35/1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-black/5 hover:scale-102 transition-transform duration-500">
              <img
                src="/images/difference-coffee-travertine.jpg"
                alt="Iced botanical brew on sunlit travertine steps"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom Left Card: Cylindrical botanical packaging canisters */}
            <div className="w-full max-w-[230px] aspect-[1/1.05] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-black/5 ml-10 xl:ml-12 hover:scale-102 transition-transform duration-500">
              <img
                src="/images/difference-botanical-canisters.jpg"
                alt="Botanical canisters packaging design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Column: Core Headline, Copy, Action Buttons & Guarantee */}
          <div className="lg:col-span-6 text-center max-w-xl mx-auto px-2 sm:px-4">
            <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-[3.5rem] text-[#161B16] tracking-tight leading-[1.12] mb-4">
              Feel the <br />
              <span className="font-handwriting text-[1.18em] font-normal text-[#161B16]">
                difference in 30 days
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-[15px] text-gray-600 max-w-md mx-auto leading-relaxed mb-8">
              Pick your goal, follow a simple daily ritual, and if you don't feel better in 30 days, we'll refund you.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-7">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-1.5 bg-[#84B281] hover:bg-[#74A371] text-[#162017] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-xs transition-all duration-200 active:scale-95"
              >
                <span>Shop the ritual</span>
                <span className="text-sm font-bold">↗</span>
              </a>
              <a
                href="#quiz"
                className="inline-flex items-center justify-center bg-white hover:bg-stone-50 text-[#162017] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full border border-stone-200 shadow-xs transition-all duration-200 active:scale-95"
              >
                Take the herb quiz
              </a>
            </div>

            {/* Social Proof & Guarantee Badges */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex -space-x-1.5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=85"
                  alt="Reviewer"
                  className="w-6 h-6 rounded-full border-2 border-white object-cover shadow-2xs"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=85"
                  alt="Reviewer"
                  className="w-6 h-6 rounded-full border-2 border-white object-cover shadow-2xs"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&h=80&q=85"
                  alt="Reviewer"
                  className="w-6 h-6 rounded-full border-2 border-white object-cover shadow-2xs"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                  ))}
                </div>
                <span className="text-xs font-normal text-stone-500">
                  Free shipping · 30-day guarantee
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Staggered Floating Cards matching sample */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 items-end">
            {/* Top Right Card: Ceramic pitcher pouring ceremonial matcha */}
            <div className="w-full max-w-[225px] aspect-[1/1.12] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-black/5 mr-8 xl:mr-10 hover:scale-102 transition-transform duration-500">
              <img
                src="/images/difference-matcha-pour.jpg"
                alt="Pouring ceremonial matcha into iced glass"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom Right Card: Sage green multivitamin bottle with avocado */}
            <div className="w-full max-w-[270px] aspect-[1.35/1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-black/5 hover:scale-102 transition-transform duration-500">
              <img
                src="/images/difference-supplement-avocado.jpg"
                alt="Botanical wellness bottle with fresh avocado and capsules"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile & Tablet 2x2 Grid of Floating Cards */}
          <div className="grid grid-cols-2 gap-4 lg:hidden mt-6">
            <div className="aspect-[1.2/1] rounded-2xl overflow-hidden shadow-sm border border-black/5">
              <img
                src="/images/difference-coffee-travertine.jpg"
                alt="Iced brew on travertine"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[1.2/1] rounded-2xl overflow-hidden shadow-sm border border-black/5">
              <img
                src="/images/difference-matcha-pour.jpg"
                alt="Matcha latte pour"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[1.2/1] rounded-2xl overflow-hidden shadow-sm border border-black/5">
              <img
                src="/images/difference-botanical-canisters.jpg"
                alt="Botanical canisters"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[1.2/1] rounded-2xl overflow-hidden shadow-sm border border-black/5">
              <img
                src="/images/difference-supplement-avocado.jpg"
                alt="Botanical bottle with avocado"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
