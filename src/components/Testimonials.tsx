import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [isPaused, setIsPaused] = useState(false);
  const [isStackHovered, setIsStackHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleSelect = (idx: number) => {
    if (idx === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(idx);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Auto-play interval that pauses on mouse hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="w-full pt-16 sm:pt-24 lg:pt-32">
      {/* Section Header with generous breathing room */}
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#161B16] tracking-tight leading-tight mb-3">
          Real vibes,{' '}
          <span className="font-handwriting text-[1.16em] font-normal text-[#161B16]">
            real folks
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-600">
          Thousands of everyday folks made their wellness part of their day. Here’s what keeps them here.
        </p>
      </div>

      {/* 
        MASTER TESTIMONIAL CONTAINER
        Clean, full-width container matching WhyThousands section width
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
          {/* Left Column: Rating, Quote, Author, Bottom Control Bar */}
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

              {/* Animated Quote */}
              <blockquote
                key={current.name}
                className={`font-sans font-normal text-lg sm:text-2xl lg:text-[1.65rem] text-white leading-snug sm:leading-relaxed tracking-tight mb-8 transition-all duration-300 ${
                  isTransitioning ? 'opacity-40 translate-y-1' : 'opacity-100 translate-y-0'
                }`}
              >
                “{current.quote}”
              </blockquote>

              {/* Author Info Row + Indicator Pills */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/20 shadow-xs"
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

                {/* Progress Indicator Dots: Active Green Pill + Inactive Dots */}
                <div className="flex items-center gap-1.5">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentIndex
                          ? 'w-6 bg-[#7CA77B]'
                          : 'w-1.5 bg-white/25 hover:bg-white/50'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Control Bar: Directional Arrows (Left) + Next Stories Pill (Right) */}
            <div className="flex items-center justify-between pt-5 border-t border-white/10 mt-2">
              {/* Circular Direction Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-xs"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-xs"
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
                        handleSelect(idx);
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
            Right Column: 3D Physical Card Deck Stack
            Matches the reference sample with layered cards visibly fanning out to the right
          */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pr-6 sm:pr-8 xl:pr-12">
            <div
              className="relative w-[260px] sm:w-[290px] lg:w-[310px] h-[330px] sm:h-[360px] lg:h-[390px] cursor-pointer select-none"
              onMouseEnter={() => setIsStackHovered(true)}
              onMouseLeave={() => setIsStackHovered(false)}
              onClick={handleNext}
              title="Click card stack to view next story"
            >
              {/* 
                CARD 3 (Furthest Back Layer):
                Visible rounded slate card tab peeking out the furthest to the right
              */}
              <div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-[#353D36] border border-white/10 shadow-lg transition-all duration-500 ease-out pointer-events-none"
                style={{
                  transform: `translateX(${isStackHovered ? 48 : 34}px) scaleY(0.90)`,
                  transformOrigin: 'center left',
                  zIndex: 5,
                  opacity: 0.7,
                }}
              />

              {/* 
                CARD 2 (Middle Layer):
                Visible rounded card tab peeking out behind Card 1
              */}
              <div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-[#444E45] border border-white/15 shadow-xl transition-all duration-500 ease-out pointer-events-none"
                style={{
                  transform: `translateX(${isStackHovered ? 32 : 22}px) scaleY(0.95)`,
                  transformOrigin: 'center left',
                  zIndex: 10,
                  opacity: 0.85,
                }}
              />

              {/* 
                CARD 1 (Immediate Next Layer):
                Visible rounded card tab with subtle photo peek right behind top card
              */}
              <div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-[#525E54] border border-white/20 shadow-2xl transition-all duration-500 ease-out overflow-hidden pointer-events-none"
                style={{
                  transform: `translateX(${isStackHovered ? 16 : 11}px) scaleY(0.98)`,
                  transformOrigin: 'center left',
                  zIndex: 15,
                  opacity: 0.95,
                }}
              >
                <img
                  src={testimonials[(currentIndex + 1) % testimonials.length].portrait}
                  alt="Next up"
                  className="w-full h-full object-cover object-top opacity-30 filter brightness-75"
                />
              </div>

              {/* 
                TOP ACTIVE CARD (Front Portrait):
                Full opacity high-definition photograph with crisp rounded corners,
                soft border, and rich drop shadow
              */}
              <div
                className={`relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-neutral-900 transition-all duration-500 ease-out z-20 ${
                  isStackHovered ? 'scale-[1.01]' : 'scale-100'
                }`}
              >
                <img
                  key={current.portrait}
                  src={current.portrait}
                  alt={current.name}
                  className={`w-full h-full object-cover object-top transition-all duration-500 ${
                    isTransitioning ? 'opacity-70 scale-102' : 'opacity-100 scale-100'
                  }`}
                />
                {/* Subtle soft gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
