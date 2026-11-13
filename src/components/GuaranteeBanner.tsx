import React, { useRef } from 'react';
import { Star } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface GuaranteeBannerProps {
  onOpenDoshaQuiz?: () => void;
}

export const GuaranteeBanner: React.FC<GuaranteeBannerProps> = ({ onOpenDoshaQuiz }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-based parallax tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Smooth springs for parallax scroll offsets
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const yLeftTop = useTransform(smoothProgress, [0, 1], [-25, 35]);
  const yLeftBottom = useTransform(smoothProgress, [0, 1], [30, -30]);
  const yRightTop = useTransform(smoothProgress, [0, 1], [-35, 25]);
  const yRightBottom = useTransform(smoothProgress, [0, 1], [25, -35]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-24 lg:py-32 overflow-hidden relative"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* ========================================================= */}
          {/* LEFT COLUMN: 2 Staggered Floating Cards with Cinematic Float */}
          {/* ========================================================= */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-8 items-start select-none">
            {/* Top Left Card: Sunlit glass coffee cups on travertine stone */}
            <motion.div
              style={{ y: yLeftTop }}
              className="w-full max-w-[270px] cursor-grab active:cursor-grabbing"
              drag
              dragConstraints={{ top: -30, bottom: 30, left: -30, right: 30 }}
              dragElastic={0.25}
              whileDrag={{ scale: 1.08, zIndex: 40 }}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <motion.div
                animate={{
                  y: [0, -14, 0],
                  rotate: [0, 1.8, 0],
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 6.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-full aspect-[1.35/1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-black/5 bg-white relative group"
              >
                <img
                  src="/images/difference-coffee-travertine.jpg"
                  alt="Iced botanical brew on sunlit travertine steps"
                  className="w-full h-full object-cover pointer-events-none group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>

            {/* Bottom Left Card: Cylindrical botanical packaging canisters */}
            <motion.div
              style={{ y: yLeftBottom }}
              className="w-full max-w-[230px] ml-10 xl:ml-12 cursor-grab active:cursor-grabbing"
              drag
              dragConstraints={{ top: -30, bottom: 30, left: -30, right: 30 }}
              dragElastic={0.25}
              whileDrag={{ scale: 1.08, zIndex: 40 }}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -2.2, 0],
                  x: [0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.8,
                }}
                className="w-full aspect-[1/1.05] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-black/5 bg-white relative group"
              >
                <img
                  src="/images/difference-botanical-canisters.jpg"
                  alt="Botanical canisters packaging design"
                  className="w-full h-full object-cover pointer-events-none group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* CENTER COLUMN: Core Headline, Copy, Action Buttons & Badges */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-center max-w-xl mx-auto px-2 sm:px-4"
          >
            <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-[3.5rem] text-[#161B16] tracking-tight leading-[1.12] mb-4">
              Feel the <br />
              <span className="font-handwriting text-[1.18em] font-normal text-[#161B16]">
                difference in 30 days
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-[15px] text-gray-600 max-w-md mx-auto leading-relaxed mb-8">
              Whole botanicals take time to gently saturate your cells. If your sleep isn't deeper, your mind clearer, and your digestion more at ease within 30 days, we'll refund your order completely.
            </p>

            {/* Action Buttons with subtle spring tap feedback */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-7">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                href="#shop"
                className="inline-flex items-center justify-center gap-1.5 bg-[#84B281] hover:bg-[#74A371] text-[#162017] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-xs transition-colors duration-200"
              >
                <span>Shop the ritual</span>
                <span className="text-sm font-bold">↗</span>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenDoshaQuiz}
                className="inline-flex items-center justify-center bg-white hover:bg-stone-50 text-[#162017] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full border border-stone-200 shadow-xs transition-colors duration-200 cursor-pointer"
              >
                Take the herb quiz
              </motion.button>
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
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 2 Staggered Floating Cards with Cinematic Float */}
          {/* ========================================================= */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-8 items-end select-none">
            {/* Top Right Card: Ceramic pitcher pouring ceremonial matcha */}
            <motion.div
              style={{ y: yRightTop }}
              className="w-full max-w-[225px] mr-8 xl:mr-10 cursor-grab active:cursor-grabbing"
              drag
              dragConstraints={{ top: -30, bottom: 30, left: -30, right: 30 }}
              dragElastic={0.25}
              whileDrag={{ scale: 1.08, zIndex: 40 }}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <motion.div
                animate={{
                  y: [0, -16, 0],
                  rotate: [0, -1.8, 0],
                  x: [0, -6, 0],
                }}
                transition={{
                  duration: 6.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.4,
                }}
                className="w-full aspect-[1/1.12] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-black/5 bg-white relative group"
              >
                <img
                  src="/images/difference-matcha-pour.jpg"
                  alt="Pouring ceremonial matcha into iced glass"
                  className="w-full h-full object-cover pointer-events-none group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>

            {/* Bottom Right Card: Sage green multivitamin bottle with avocado */}
            <motion.div
              style={{ y: yRightBottom }}
              className="w-full max-w-[270px] cursor-grab active:cursor-grabbing"
              drag
              dragConstraints={{ top: -30, bottom: 30, left: -30, right: 30 }}
              dragElastic={0.25}
              whileDrag={{ scale: 1.08, zIndex: 40 }}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <motion.div
                animate={{
                  y: [0, 14, 0],
                  rotate: [0, 1.9, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 5.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.2,
                }}
                className="w-full aspect-[1.35/1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-black/5 bg-white relative group"
              >
                <img
                  src="/images/difference-supplement-avocado.jpg"
                  alt="Botanical wellness bottle with fresh avocado and capsules"
                  className="w-full h-full object-cover pointer-events-none group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* MOBILE & TABLET: Interactive Floating Cards Grid */}
          {/* ========================================================= */}
          <div className="grid grid-cols-2 gap-4 lg:hidden mt-6">
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 1.2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="aspect-[1.2/1] rounded-2xl overflow-hidden shadow-md border border-black/5"
            >
              <img
                src="/images/difference-coffee-travertine.jpg"
                alt="Iced brew on travertine"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [0, -1.2, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="aspect-[1.2/1] rounded-2xl overflow-hidden shadow-md border border-black/5"
            >
              <img
                src="/images/difference-matcha-pour.jpg"
                alt="Matcha latte pour"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [0, -1.2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="aspect-[1.2/1] rounded-2xl overflow-hidden shadow-md border border-black/5"
            >
              <img
                src="/images/difference-botanical-canisters.jpg"
                alt="Botanical canisters"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 1.2, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="aspect-[1.2/1] rounded-2xl overflow-hidden shadow-md border border-black/5"
            >
              <img
                src="/images/difference-supplement-avocado.jpg"
                alt="Botanical bottle with avocado"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
