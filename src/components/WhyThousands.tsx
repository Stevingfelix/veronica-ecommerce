import React from 'react';
import { Leaf, FlaskConical, Sprout, Calendar } from 'lucide-react';

export const WhyThousands: React.FC = () => {
  return (
    <section className="w-full">
      {/* 
        MASTER CONTAINER: Exactly matches the width, padding, and rounded radius of the Hero section
      */}
      <div className="w-full bg-[#222823] text-white rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden border border-white/5">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[2.65rem] text-white tracking-tight leading-[1.15]">
              Why thousands <br />
              choose <span className="font-editorial italic font-normal text-white">a simpler ritual</span>
            </h2>
          </div>

          <div className="max-w-xs sm:max-w-sm flex flex-col items-start gap-3">
            <p className="text-xs sm:text-[13px] text-stone-300 leading-relaxed font-normal">
              Honest herbs, tested in every batch and shaped into a ritual you&apos;ll actually keep.
            </p>
            <a
              href="#shop"
              className="inline-flex items-center justify-center bg-[#7CA77B] hover:bg-[#8CB88B] text-[#1C221D] text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm"
            >
              Shop the ritual
            </a>
          </div>
        </div>

        {/* Main Grid: Left Featured Image Card + Right 2x2 Bento Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* 
            Left Column: Ultra-HD Crystal-Clear Photograph of Hand Holding Glass of Cold Botanical Matcha Elixir
            with circular curved SVG text overlay matching reference design
          */}
          <div className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-[#CCD8C8] relative overflow-hidden flex items-center justify-center min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] shadow-inner group">
            {/* Pristine Ultra-HD Image: Hand holding clear glass tumbler with vibrant green iced matcha drink */}
            <img
              src="https://images.unsplash.com/photo-1765162007488-077bb985ae4c?auto=format&fit=crop&w=1600&q=95"
              alt="Hand holding pure botanical herbal matcha elixir in clear glass tumbler"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 rounded-2xl sm:rounded-3xl"
              onError={(e) => {
                // Instant high-res fallback
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1779381637059-6c3b578306d5?auto=format&fit=crop&w=1600&q=95';
              }}
            />
            {/* Soft gradient layer to ensure white text overlay is readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

            {/* Circular Curved SVG Text Overlay wrapping organically around the drink */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none p-3">
              <svg viewBox="0 0 400 400" className="w-[88%] h-[88%] max-w-[370px] max-h-[370px]">
                <defs>
                  <path
                    id="ritualCurvePath"
                    d="M 200, 200 m -138, 0 a 138,138 0 1,1 276,0 a 138,138 0 1,1 -276,0"
                    fill="none"
                  />
                </defs>
                <text className="text-[10.5px] font-sans font-medium uppercase tracking-[0.24em] fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                  <textPath href="#ritualCurvePath" startOffset="0%">
                    the l-theanine effect · fiber fuel · powerful antioxidants · food for your microbiome · goodbye bloat ·
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Right Column: 2x2 Bento Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Card 01: Whole-herb sourcing */}
            <div className="bg-[#2B332E] rounded-2xl p-5 sm:p-6 border border-white/5 flex flex-col justify-between min-h-[175px] sm:min-h-[195px] hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-stone-300">
                  <Leaf className="w-4 h-4 stroke-[1.75]" />
                </div>
                <span className="font-serif italic text-stone-400 text-lg sm:text-xl">
                  01
                </span>
              </div>
              <div className="mt-4">
                <div className="flex items-start justify-between gap-2.5 mb-1.5">
                  <h3 className="font-sans font-bold text-sm sm:text-base text-white">
                    Whole-herb sourcing
                  </h3>
                  <div className="w-9 h-9 rounded-xl overflow-hidden bg-white/10 flex-shrink-0 border border-white/10 shadow-xs">
                    <img
                      src="/images/card3-tulsi-hd.jpg"
                      alt="Fresh Ayurvedic herbs"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed font-normal">
                  Roots and leaves from small Ayurvedic farms, never cheap extracts.
                </p>
              </div>
            </div>

            {/* Card 02: Third-party lab tested */}
            <div className="bg-[#2B332E] rounded-2xl p-5 sm:p-6 border border-white/5 flex flex-col justify-between min-h-[175px] sm:min-h-[195px] hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-stone-300">
                  <FlaskConical className="w-4 h-4 stroke-[1.75]" />
                </div>
                <span className="font-serif italic text-stone-400 text-lg sm:text-xl">
                  02
                </span>
              </div>
              <div className="mt-4">
                <h3 className="font-sans font-bold text-sm sm:text-base text-white mb-1.5">
                  Third-party lab tested
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-normal">
                  Every batch is checked for purity, heavy metals and potency.
                </p>
              </div>
            </div>

            {/* Card 03: 100% plant-based */}
            <div className="bg-[#2B332E] rounded-2xl p-5 sm:p-6 border border-white/5 flex flex-col justify-between min-h-[175px] sm:min-h-[195px] hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-stone-300">
                  <Sprout className="w-4 h-4 stroke-[1.75]" />
                </div>
                <span className="font-serif italic text-stone-400 text-lg sm:text-xl">
                  03
                </span>
              </div>
              <div className="mt-4">
                <h3 className="font-sans font-bold text-sm sm:text-base text-white mb-1.5">
                  100% plant-based
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-normal">
                  No gelatin, fillers, artificial colors or added sugar.
                </p>
              </div>
            </div>

            {/* Card 04: Built as a ritual */}
            <div className="bg-[#2B332E] rounded-2xl p-5 sm:p-6 border border-white/5 flex flex-col justify-between min-h-[175px] sm:min-h-[195px] hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-stone-300">
                  <Calendar className="w-4 h-4 stroke-[1.75]" />
                </div>
                <span className="font-serif italic text-stone-400 text-lg sm:text-xl">
                  04
                </span>
              </div>
              <div className="mt-4">
                <h3 className="font-sans font-bold text-sm sm:text-base text-white mb-1.5">
                  Built as a ritual
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-normal">
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
