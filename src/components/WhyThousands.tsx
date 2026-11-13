import React from 'react';
import { Leaf, FlaskConical, Sprout, Calendar } from 'lucide-react';

export const WhyThousands: React.FC = () => {
  return (
    <section className="w-full py-4 sm:py-6">
      {/* 
        Compact, proportional main container matching the reference screenshot:
        Constrained max-width (max-w-[1140px] / max-w-6xl) prevents oversized sprawling
      */}
      <div className="w-full max-w-[1140px] mx-auto bg-[#222823] text-white rounded-[2rem] p-6 sm:p-8 lg:p-9 shadow-xl border border-white/5">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-6 sm:mb-7">
          <div>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-[2.2rem] text-white tracking-tight leading-[1.16]">
              Why thousands <br />
              choose <span className="font-editorial italic font-normal text-white">a simpler ritual</span>
            </h2>
          </div>

          <div className="max-w-xs flex flex-col items-start gap-2.5">
            <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed font-normal">
              Honest herbs, tested in every batch and shaped into a ritual you&apos;ll actually keep.
            </p>
            <a
              href="#shop"
              className="inline-flex items-center justify-center bg-[#7CA77B] hover:bg-[#8CB88B] text-[#1C221D] text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-xs"
            >
              Shop the ritual
            </a>
          </div>
        </div>

        {/* Main Grid: Left Featured Image Card + Right 2x2 Bento Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
          {/* 
            Left Column: Compact card with hand holding green elixir drink 
            and circular curved text matching reference screenshot
          */}
          <div className="lg:col-span-5 rounded-2xl bg-[#C8D5C4] relative overflow-hidden flex items-center justify-center h-[280px] sm:h-[310px] lg:h-[314px] shadow-sm group">
            <img
              src="/images/ritual-drink-exact.jpg"
              alt="Hand holding pure botanical herbal elixir"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
          </div>

          {/* Right Column: 2x2 Bento Feature Cards with tight, compact heights */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {/* Card 01: Whole-herb sourcing */}
            <div className="bg-[#2A312B] rounded-xl p-4 sm:p-4.5 border border-white/5 flex flex-col justify-between h-[135px] sm:h-[148px] hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-stone-300">
                  <Leaf className="w-3.5 h-3.5 stroke-[1.75]" />
                </div>
                <span className="font-serif italic text-stone-400 text-sm sm:text-base">
                  01
                </span>
              </div>
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-sans font-semibold text-xs sm:text-[14px] text-white">
                    Whole-herb sourcing
                  </h3>
                  <div className="w-8 h-8 rounded-lg overflow-hidden bg-white/10 flex-shrink-0 border border-white/10">
                    <img
                      src="/images/card3-tulsi-hd.jpg"
                      alt="Fresh Ayurvedic herbs"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-[10.5px] sm:text-[11.5px] text-stone-400 leading-snug font-normal">
                  Roots and leaves from small Ayurvedic farms, never cheap extracts.
                </p>
              </div>
            </div>

            {/* Card 02: Third-party lab tested */}
            <div className="bg-[#2A312B] rounded-xl p-4 sm:p-4.5 border border-white/5 flex flex-col justify-between h-[135px] sm:h-[148px] hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-stone-300">
                  <FlaskConical className="w-3.5 h-3.5 stroke-[1.75]" />
                </div>
                <span className="font-serif italic text-stone-400 text-sm sm:text-base">
                  02
                </span>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-xs sm:text-[14px] text-white mb-1">
                  Third-party lab tested
                </h3>
                <p className="text-[10.5px] sm:text-[11.5px] text-stone-400 leading-snug font-normal">
                  Every batch is checked for purity, heavy metals and potency.
                </p>
              </div>
            </div>

            {/* Card 03: 100% plant-based */}
            <div className="bg-[#2A312B] rounded-xl p-4 sm:p-4.5 border border-white/5 flex flex-col justify-between h-[135px] sm:h-[148px] hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-stone-300">
                  <Sprout className="w-3.5 h-3.5 stroke-[1.75]" />
                </div>
                <span className="font-serif italic text-stone-400 text-sm sm:text-base">
                  03
                </span>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-xs sm:text-[14px] text-white mb-1">
                  100% plant-based
                </h3>
                <p className="text-[10.5px] sm:text-[11.5px] text-stone-400 leading-snug font-normal">
                  No gelatin, fillers, artificial colors or added sugar.
                </p>
              </div>
            </div>

            {/* Card 04: Built as a ritual */}
            <div className="bg-[#2A312B] rounded-xl p-4 sm:p-4.5 border border-white/5 flex flex-col justify-between h-[135px] sm:h-[148px] hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-stone-300">
                  <Calendar className="w-3.5 h-3.5 stroke-[1.75]" />
                </div>
                <span className="font-serif italic text-stone-400 text-sm sm:text-base">
                  04
                </span>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-xs sm:text-[14px] text-white mb-1">
                  Built as a ritual
                </h3>
                <p className="text-[10.5px] sm:text-[11.5px] text-stone-400 leading-snug font-normal">
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
