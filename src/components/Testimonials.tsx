import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  role: string;
  rating: number;
  avatar: string;
  portrait: string;
}

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isStackHovered, setIsStackHovered] = useState(false);

  const testimonials: Testimonial[] = [
    {
      quote:
        'I used to lie awake for hours. Two weeks into the evening ritual, I fall asleep easily and wake up actually rested. It’s the one habit I haven’t skipped.',
      name: 'Alejandro Garcia',
      location: 'Austin, TX',
      role: 'CEO · EcomCart',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=85',
      portrait: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
    },
    {
      quote:
        'The Tulsi and Moringa combination has completely replaced my 3 PM coffee crash. My digestion feels balanced and my focus is sustained all afternoon.',
      name: 'Elizabeth Salim',
      location: 'Los Angeles, CA',
      role: 'Founder · Botanica',
      rating: 5.0,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=85',
      portrait: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85',
    },
    {
      quote:
        'Simple, clean, and genuinely effective. You can smell the botanical freshness the second you open the amber jar. Veronica has perfected Ayurvedic wellness.',
      name: 'Marcus Vance',
      location: 'Brooklyn, NY',
      role: 'Creative Director',
      rating: 5.0,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=85',
      portrait: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85',
    },
    {
      quote:
        'As an integrative nutritionist, I review ingredient formulations rigorously. Veronica’s whole-herb sourcing is the cleanest gold standard in modern Ayurveda.',
      name: 'Nadia Chen',
      location: 'San Francisco, CA',
      role: 'Holistic Nutritionist',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=85',
      portrait: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85',
    },
  ];

  const current = testimonials[currentIndex];
  const ROTATION_TIME = 3600; // 3.6s snappy, animated rotation
  const animTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToSlide = (nextIndex: number) => {
    if (nextIndex === currentIndex || isAnimating) return;
    setPrevIndex(currentIndex);
    setIsAnimating(true);
    setCurrentIndex(nextIndex);
    setProgress(0);

    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    animTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
      setPrevIndex(null);
    }, 450);
  };

  const handleNext = () => {
    goToSlide((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Live countdown progress timer with auto-advance
  useEffect(() => {
    if (isPaused) return;

    const intervalStep = 40; // 40ms updates for fluid progress bar
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const nextVal = prev + (intervalStep / ROTATION_TIME) * 100;
        if (nextVal >= 100) {
          handleNext();
          return 0;
        }
        return nextVal;
      });
    }, intervalStep);

    return () => clearInterval(progressTimer);
  }, [isPaused, currentIndex, isAnimating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAnimating]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full pt-16 sm:pt-24 lg:pt-32"
    >
      {/* Dynamic Keyframe style tag for silky smooth quote animation */}
      <style>{`
        @keyframes testimonialEnter {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-quote-enter {
          animation: testimonialEnter 380ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Section Header with generous breathing room */}
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#161B16] tracking-tight leading-tight mb-3">
          Real rhythms,{' '}
          <span className="font-handwriting text-[1.16em] font-normal text-[#161B16]">
            honest transformations
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-600">
          From chronic brain fog and shallow sleep to steady vitality. Notes from our community.
        </p>
      </div>

      {/* 
        MASTER TESTIMONIAL CONTAINER
        Clean, full-width container matching WhyThousands section
        Dark charcoal-forest background with generous rounded corners and crisp padding
      */}
      <div
        className="w-full bg-[#242A24] text-white rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/5 relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setIsStackHovered(false);
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Rating, Animated Quote, Author, Bottom Control Bar */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full min-h-[320px]">
            <div>
              {/* Star Rating: 5 Golden Stars + 4.9/5 text */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-stone-300">
                  {current.rating.toFixed(1)}/5
                </span>
              </div>

              {/* Animated Quote with smooth transition on change */}
              <div className="min-h-[130px] sm:min-h-[115px] flex items-start mb-8">
                <blockquote
                  key={current.quote}
                  className="font-sans font-normal text-lg sm:text-2xl lg:text-[1.65rem] text-white leading-snug sm:leading-relaxed tracking-tight animate-quote-enter"
                >
                  “{current.quote}”
                </blockquote>
              </div>

              {/* Author Info Row + Live Progress Indicator Dots */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <img
                    key={current.avatar}
                    src={current.avatar}
                    alt={current.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/20 shadow-xs animate-quote-enter"
                  />
                  <div>
                    <div className="font-semibold text-sm sm:text-base text-[#86B385]">
                      {current.name}
                    </div>
                    <div className="text-xs text-stone-400 font-normal mt-0.5">
                      {current.role}
                    </div>
                  </div>
                </div>

                {/* Progress Indicator Dots: Active Green Pill with Live Countdown + Inactive Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                      <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`relative h-2 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'w-8 bg-white/20'
                            : 'w-2 bg-white/25 hover:bg-white/40'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      >
                        {isActive && (
                          <div
                            className="absolute inset-y-0 left-0 bg-[#7CA77B] rounded-full"
                            style={{
                              width: `${progress}%`,
                              transition: isPaused ? 'none' : 'width 40ms linear',
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Control Bar: Directional Arrows (Left) + Next Stories Pill (Right) */}
            <div className="flex items-center justify-between pt-5 border-t border-white/10 mt-2">
              {/* Circular Direction Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-xs"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-xs"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Interactive "Next stories" Pill with Avatars Stack */}
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/12 border border-white/15 hover:border-white/25 px-3.5 py-1.5 rounded-full text-xs font-medium text-white transition-all group active:scale-95 cursor-pointer shadow-xs"
              >
                <span className="text-stone-300 group-hover:text-white transition-colors text-[11.5px]">
                  Next stories
                </span>
                <div className="flex -space-x-2">
                  {testimonials.map((t, idx) => (
                    <img
                      key={idx}
                      src={t.avatar}
                      alt={t.name}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToSlide(idx);
                      }}
                      className={`w-5 h-5 rounded-full object-cover border border-[#242A24] transition-all hover:scale-125 hover:z-20 ${
                        idx === (currentIndex + 1) % testimonials.length
                          ? 'ring-1.5 ring-[#7CA77B] scale-110 z-10'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                      title={t.name}
                    />
                  ))}
                </div>
              </button>
            </div>
          </div>

          {/* 
            Right Column: Animated 3D Physical Card Deck Stack
            Smoothly flips and rotates cards with each change!
          */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pr-6 sm:pr-8 xl:pr-14">
            <div
              className="relative w-[260px] sm:w-[290px] lg:w-[310px] h-[330px] sm:h-[360px] lg:h-[390px] cursor-pointer select-none"
              onMouseEnter={() => setIsStackHovered(true)}
              onMouseLeave={() => setIsStackHovered(false)}
              onClick={handleNext}
              title="Click card to view next testimonial"
            >
              {testimonials.map((t, idx) => {
                // If this is the card that just transitioned away
                if (idx === prevIndex && isAnimating) {
                  return (
                    <div
                      key={t.name}
                      className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-[#2C342D] pointer-events-none"
                      style={{
                        transform: 'translateX(-45px) rotate(-5deg) scale(0.95)',
                        opacity: 0,
                        zIndex: 30,
                        transition: 'all 420ms cubic-bezier(0.25, 1, 0.5, 1)',
                      }}
                    >
                      <img
                        src={t.portrait}
                        alt={t.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  );
                }

                // Relative position in deck (0 = front, 1 = behind, 2 = 2nd behind, 3 = deepest)
                const rel = (idx - currentIndex + testimonials.length) % testimonials.length;

                // Card configurations
                let shiftX = 0;
                let scaleY = 1;
                let scaleX = 1;
                let opacity = 1;
                let zIndex = 20;
                let dimOpacity = 0;

                if (rel === 0) {
                  // Active top card
                  shiftX = 0;
                  scaleY = 1;
                  scaleX = 1;
                  opacity = 1;
                  zIndex = 20;
                  dimOpacity = 0;
                } else if (rel === 1) {
                  // 1st layer behind
                  shiftX = isStackHovered ? 20 : 13;
                  scaleY = 0.96;
                  scaleX = 0.98;
                  opacity = 0.88;
                  zIndex = 15;
                  dimOpacity = 0.35;
                } else if (rel === 2) {
                  // 2nd layer behind
                  shiftX = isStackHovered ? 38 : 25;
                  scaleY = 0.92;
                  scaleX = 0.96;
                  opacity = 0.7;
                  zIndex = 10;
                  dimOpacity = 0.55;
                } else {
                  // 3rd layer behind (deepest)
                  shiftX = isStackHovered ? 54 : 36;
                  scaleY = 0.88;
                  scaleX = 0.94;
                  opacity = 0.5;
                  zIndex = 5;
                  dimOpacity = 0.72;
                }

                return (
                  <div
                    key={t.name}
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#2C342D]"
                    style={{
                      transform: `translateX(${shiftX}px) scaleY(${scaleY}) scaleX(${scaleX})`,
                      transformOrigin: 'center left',
                      opacity,
                      zIndex,
                      transition: 'all 450ms cubic-bezier(0.25, 1, 0.5, 1)',
                    }}
                  >
                    <img
                      src={t.portrait}
                      alt={t.name}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Shading overlay for physical card depth */}
                    {dimOpacity > 0 && (
                      <div
                        className="absolute inset-0 bg-[#242A24] pointer-events-none transition-opacity duration-450"
                        style={{ opacity: dimOpacity }}
                      />
                    )}
                    {/* Subtle soft gradient at bottom of front card */}
                    {rel === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
