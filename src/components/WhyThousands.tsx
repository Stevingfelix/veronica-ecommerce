import React from 'react';
import { Leaf, FlaskConical, Sprout, Calendar } from 'lucide-react';

export const WhyThousands: React.FC = () => {
  return (
    <section className="w-full">
      {/* 
        MASTER CONTAINER:
        Reduced to a compact, viewport-fitting container height matching the Hero banner
        (lg:h-[530px] min-h-[480px]) so all 4 cards and image fit comfortably with ZERO cut-off.
      */}
      <div className="w-full bg-[#222823] text-white rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-5 sm:p-7 lg:p-8 shadow-2xl overflow-hidden border border-white/5 flex flex-col justify-between lg:h-[530px]">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 sm:mb-5 flex-shrink-0">
          <div>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-[2.25rem] text-white tracking-tight leading-[1.15]">
              Why thousands <br />
              choose <span className="font-editorial italic font-normal text-white">a simpler ritual</span>
            </h2>
          </div>

          <div className="max-w-xs sm:max-w-sm flex flex-col items-start gap-2.5">
            <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed font-normal">
              Honest herbs, tested in every batch and shaped into a ritual you&apos;ll actually keep.
            </p>
            <a
              href="#shop"
              className="inline-flex items-center justify-center bg-[#7CA77B] hover:bg-[#8CB88B] text-[#1C221D] text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm"
            >
              Shop the ritual
            </a>
          </div>
        </div>

        {/* Main Bento Grid: Compact height that fits all cards cleanly */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-stretch min-h-0">
          {/* 
            Left Column: Full-height crystal-clear photograph of hand holding glass of botanical matcha elixir
            with circular curved SVG text overlay
          */}
          <div className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-[#CCD8C8] relative overflow-hidden flex items-center justify-center min-h-[260px] lg:min-h-0 h-full shadow-inner group">
            {/* Local ultra-HD crystal-clear photograph (1600x2400 verified local asset) */}
            <img
              src="/images/ritual-matcha-hd.jpg"
              alt="Hand holding pure botanical herbal matcha elixir in clear glass tumbler"
              className="w-full h-full object-cover object-[center_35%] group-hover:scale-103 transition-transform duration-700 rounded-2xl sm:rounded-3xl"
            />
            {/* Soft gradient layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15 pointer-events-none" />

            {/* Circular Curved SVG Text Overlay wrapping organically around the drink */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none p-3">
              <svg viewBox="0 0 400 400" className="w-[88%] h-[88%] max-w-[340px] max-h-[340px]">
                <defs>
                  <path
                    id="ritualCurvePath"
                    d="M 200, 200 m -135, 0 a 135,135 0 1,1 270,0 a 135,135 0 1,1 -270,0"
                    fill="none"
                  />
                </defs>
                <text className="text-[10px] font-sans font-medium uppercase tracking-[0.24em] fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  <textPath href="#ritualCurvePath" startOffset="0%">
                    the l-theanine effect · fiber fuel · powerful antioxidants · food for your microbiome · goodbye bloat ·
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Right Column: 2x2 Bento Feature Cards fitting cleanly into grid height */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 h-full min-h-0">
            {/* Card 01: Whole-herb sourcing */}
            <div className="bg-[#2B332E] rounded-2xl p-4 sm:p-5 border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors h-full min-h-0">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-stone-300">
                  <Leaf className="w-3.5 h-3.5 stroke-[1.75]" />
                </div>
                <span className="font-serif italic text-stone-400 text-sm sm:text-base">
                  01
                </span>
              </div>
              <div className="mt-2">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-sans font-bold text-xs sm:text-[14px] text-white">
                    Whole-herb sourcing
                  </h3>
                  <div className="w-8 h-8 rounded-lg overflow-hidden bg-white/10 flex-shrink-0 border border-white/10 shadow-xs">
                    <img
                      src="/images/card3-tulsi-hd.jpg"
                      alt="Fresh Ayurvedic herbs"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-snug font-normal">
                  Roots and leaves from small Ayurvedic farms, never cheap extracts.
                </p>
              </div>
            </div>

            {/* Card 02: Third-party lab tested */}
            <div className="bg-[#2B332E] rounded-2xl p-4 sm:p-5 border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors h-full min-h-0">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-stone-300">
                  <FlaskConical className="w-3.5 h-3.5 stroke-[1.75]" />
                </div>
                <span className="font-serif italic text-stone-400 text-sm sm:text-base">
                  02
                </span>
              </div>
              <div className="mt-2">
                <h3 className="font-sans font-bold text-xs sm:text-[14px] text-white mb-1">
                  Third-party lab tested
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-snug font-normal">
                  Every batch is checked for purity, heavy metals and potency.
                </p>
              </div>
            </div>

            {/* Card 03: 100% plant-based */}
            <div className="bg-[#2B332E] rounded-2xl p-4 sm:p-5 border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors h-full min-h-0">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-stone-300">
                  <Sprout className="w-3.5 h-3.5 stroke-[1.75]" />
                </div>
                <span className="font-serif italic text-stone-400 text-sm sm:text-base">
                  03
                </span>
              </div>
              <div className="mt-2">
                <h3 className="font-sans font-bold text-xs sm:text-[14px] text-white mb-1">
                  100% plant-based
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-snug font-normal">
                  No gelatin, fillers, artificial colors or added sugar.
                </p>
              </div>
            </div>

            {/* Card 04: Built as a ritual */}
            <div className="bg-[#2B332E] rounded-2xl p-4 sm:p-5 border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors h-full min-h-0">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-stone-300">
                  <Calendar className="w-3.5 h-3.5 stroke-[1.75]" />
                </div>
                <span className="font-serif italic text-stone-400 text-lg sm:text-base">
                  04
                </span>
              </div>
              <div className="mt-2">
                <h3 className="font-sans font-bold text-xs sm:text-[14px] text-white mb-1">
                  Built as a ritual
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-snug font-normal">
                  Simple daily routines that fit real life in under a minute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
