import React from 'react';
import { Leaf, FlaskConical, Sprout, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyThousands: React.FC = () => {
  return (
    <section className="-mx-3 sm:mx-0 w-[calc(100%+1.5rem)] sm:w-full">
      {/* 
        MASTER CONTAINER:
        Full-width edge-to-edge on mobile (rounded-none), luxury framed card on tablet & desktop
      */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-[#242A24] text-white rounded-none sm:rounded-[2.5rem] lg:rounded-[3rem] px-5 sm:px-10 lg:px-12 py-9 sm:py-10 lg:py-12 shadow-2xl border-y sm:border border-white/5 overflow-hidden"
      >
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
              No cluttered 10-pill routines. Just whole-plant extracts tested for maximum cellular absorption and crafted into a daily habit you'll look forward to.
            </p>
            <a
              href="#shop"
              className="inline-flex items-center justify-center bg-[#7CA77B] hover:bg-[#8CB88B] text-[#1C221D] text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm"
            >
              Shop the ritual
            </a>
          </div>
        </div>

        {/* Main Bento Grid: 40% Left Image Card / 60% Right 2x2 Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch w-full">
          {/* 
            Left Column: Full HD Crystal-Clear Studio Photograph (1200x1200px)
            with circular curved SVG vector text overlay. ZERO blurriness.
          */}
          <div className="lg:col-span-5 w-full aspect-[1.12/1] rounded-2xl sm:rounded-3xl bg-[#CCD8C8] relative overflow-hidden flex items-center justify-center shadow-inner group">
            {/* High-definition 1200x1200px local asset */}
            <img
              src="/images/ritual-matcha-square-hd.jpg"
              alt="Hand holding pure botanical herbal matcha elixir in clear glass tumbler"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 rounded-2xl sm:rounded-3xl"
            />
            {/* Subtle soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 pointer-events-none" />

            {/* Circular Curved SVG Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none p-3">
              <svg viewBox="0 0 400 400" className="w-[84%] h-[84%] max-w-[340px] max-h-[340px]">
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

          {/* Right Column: 2x2 Bento Feature Cards with Unique Visual Assets */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 h-full">
            {/* Card 01: Whole-herb sourcing */}
            <div className="group bg-white/[0.04] backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#86B385]/40 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(134,179,133,0.12)]">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[#86B385] bg-white/5">
                    <Leaf className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold text-stone-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                      Kerala · 10.85° N
                    </span>
                    <span className="font-serif italic text-stone-400 text-lg sm:text-xl">
                      01
                    </span>
                  </div>
                </div>

                {/* Macro Botanical Leaf Card Graphic */}
                <div className="relative w-full h-20 sm:h-22 rounded-xl overflow-hidden my-3 border border-white/10">
                  <img
                    src="/images/card3-tulsi-hd.jpg"
                    alt="Kerala Estate Harvest"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                      Single-Origin Estate Crop
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-sans font-bold text-sm sm:text-base text-white mb-1">
                  Whole-herb sourcing
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-normal">
                  We preserve the whole plant matrix—root, resin, and leaf—ensuring active phytocompounds work together in natural biological synergy.
                </p>
              </div>
            </div>

            {/* Card 02: Third-party lab tested */}
            <div className="group bg-white/[0.04] backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#86B385]/40 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(134,179,133,0.12)]">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[#86B385] bg-white/5">
                    <FlaskConical className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold text-[#86B385] bg-[#86B385]/10 px-2.5 py-0.5 rounded-full border border-[#86B385]/20">
                      ISO/IEC Verified
                    </span>
                    <span className="font-serif italic text-stone-400 text-lg sm:text-xl">
                      02
                    </span>
                  </div>
                </div>

                {/* Clinical Lab Purity Badge Graphic */}
                <div className="my-3 p-2.5 rounded-xl bg-black/30 border border-white/10 flex flex-col gap-1.5 text-[10.5px]">
                  <div className="flex items-center justify-between pb-1 border-b border-white/5">
                    <span className="text-stone-400">Bioflavonoid Density</span>
                    <span className="font-bold text-[#86B385]">99.4% Active</span>
                  </div>
                  <div className="flex items-center justify-between pb-1 border-b border-white/5">
                    <span className="text-stone-400">Heavy Metals & Toxins</span>
                    <span className="font-bold text-emerald-400">0.00% Clean</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Chemical Solvents</span>
                    <span className="font-bold text-emerald-400">0.00% Zero</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-sans font-bold text-sm sm:text-base text-white mb-1">
                  Third-party lab tested
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-normal">
                  Tested down to parts-per-billion for heavy metals, micro-contaminants, and active bioflavonoid density.
                </p>
              </div>
            </div>

            {/* Card 03: Single-estate micro-batches */}
            <div className="group bg-white/[0.04] backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#86B385]/40 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(134,179,133,0.12)]">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[#86B385] bg-white/5">
                    <Sprout className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <span className="font-serif italic text-stone-400 text-lg sm:text-xl">
                    03
                  </span>
                </div>

                {/* Apothecary Lunar Batch Stamp Graphic */}
                <div className="my-3 p-3 rounded-xl bg-black/30 border border-white/10 flex items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#86B385]/15 border border-[#86B385]/30 flex items-center justify-center text-[#86B385] shrink-0 font-display font-extrabold text-xs">
                      419
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white uppercase tracking-wider">
                        Batch No. 419
                      </div>
                      <div className="text-[10px] text-stone-400">
                        Cold-Pressed · Lunar Cycle
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-[#86B385]/20 text-[#A3D9A2] px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                    Micro-Press
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-sans font-bold text-sm sm:text-base text-white mb-1">
                  Single-estate micro-batches
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-normal">
                  Blended in limited small batches to safeguard delicate volatile oils and living herbal potency.
                </p>
              </div>
            </div>

            {/* Card 04: Built as a daily ritual */}
            <div className="group bg-white/[0.04] backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#86B385]/40 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(134,179,133,0.12)]">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[#86B385] bg-white/5">
                    <Calendar className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <span className="font-serif italic text-stone-400 text-lg sm:text-xl">
                    04
                  </span>
                </div>

                {/* Circadian Cadence Timeline Graphic */}
                <div className="my-3 p-2.5 rounded-xl bg-black/30 border border-white/10 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[10.5px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shadow-2xs" />
                      <span className="text-stone-300 font-medium">07:30 AM · Morning</span>
                    </div>
                    <span className="text-[10px] text-amber-300 font-bold bg-amber-400/10 px-2 py-0.5 rounded-full">
                      Focus & Energy
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10.5px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#86B385] shadow-2xs" />
                      <span className="text-stone-300 font-medium">09:30 PM · Twilight</span>
                    </div>
                    <span className="text-[10px] text-[#A3D9A2] font-bold bg-[#86B385]/10 px-2 py-0.5 rounded-full">
                      Rest & Repair
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-sans font-bold text-sm sm:text-base text-white mb-1">
                  Built as a daily ritual
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-normal">
                  Designed for effortless circadian alignment: calm mental clarity each morning, deep nervous system stillness every twilight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
