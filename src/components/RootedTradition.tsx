import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const RootedTradition: React.FC = () => {
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

  return (
    <section id="about" className="px-2 sm:px-3.5 md:px-4 my-4 sm:my-5 w-full max-w-[1720px] mx-auto">
      {/* Container Card */}
      <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-10 lg:p-14 shadow-xs">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 sm:mb-12">
          {/* Left Title: Rooted in tradition, made for today */}
          <div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-[2.65rem] text-[#161B16] tracking-tight leading-[1.12]">
              Rooted in tradition, <br />
              <span className="font-editorial italic font-normal text-[#161B16]">
                made for today
              </span>
            </h2>
          </div>

          {/* Right Description & Our Story CTA Button */}
          <div className="max-w-xs sm:max-w-sm flex flex-col items-start gap-4">
            <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
              We source whole herbs from small Ayurvedic farms to create simple daily rituals, keeping it pure for your body.
            </p>
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-[#1B211C] hover:bg-black text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors shadow-xs"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* 3 Bento Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* 
            CARD 1 (Left): Full Ayurvedic Product Tray Photo + "Trusted by nature" 68% Segmented Metric Badge
          */}
          <div className="md:col-span-5 relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-4 sm:p-5 shadow-xs group bg-[#EDE6DC]">
            {/* Background Photo */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/card1-upscaled.jpg"
                alt="Ayurvedic herbs with white supplement bottle, fresh lemon and leaves"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating "Trusted by nature" Segmented Progress Card */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-lg border border-black/5 flex flex-col gap-2.5">
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
          <div className="md:col-span-4 bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-black/5 shadow-xs flex flex-col justify-between min-h-[380px] sm:min-h-[420px]">
            <div>
              {/* Light Green Circle with Leaf Line Icon */}
              <div className="w-11 h-11 rounded-full bg-[#E5F2E5] text-[#3D7B52] flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>

              {/* Title with Italic "sourcing" */}
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#1B211C] mb-3 leading-snug">
                Whole-herb{' '}
                <span className="font-editorial italic font-normal text-[#1B211C]">
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

              {/* 2 Side-by-Side Farm Photo Cards */}
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
        </div>
      </div>
    </section>
  );
};
