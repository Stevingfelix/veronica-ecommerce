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
      portrait: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
    },
    {
      quote:
        'Simple, clean, and genuinely effective. You can smell the botanical freshness the second you open the amber jar. Veronica has perfected Ayurvedic wellness.',
      name: 'Marcus Vance',
      location: 'Brooklyn, NY',
      role: 'Creative Director',
      rating: 5.0,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=85',
      portrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
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
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-play interval that pauses on mouse hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6500);
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

  const prevIdx = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIdx = (currentIndex + 1) % testimonials.length;

  return (
    <section className="w-full pt-16 sm:pt-24 lg:pt-32">
      {/* Section Header */}
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
        CAROUSEL WRAPPER WITH PEEKING SIDE CARDS
        Matches the reference screenshot layout on all screen sizes
      */}
      <div
        className="w-full relative overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setIsStackHovered(false);
        }}
      >
        <div className="relative flex items-center justify-center max-w-[1440px] mx-auto px-4 sm:px-6">
          {/* Peeking Left Card Hint (Tablet & Desktop) */}
          <div
            onClick={handlePrev}
            className="hidden lg:block absolute left-0 -translate-x-[72%] xl:-translate-x-[65%] w-[520px] xl:w-[620px] h-[340px] sm:h-[380px] lg:h-[400px] bg-[#242A24] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-8 sm:p-10 border border-white/5 opacity-40 hover:opacity-75 transition-all duration-300 cursor-pointer select-none overflow-hidden shadow-xl group"
            title="Click to view previous story"
          >
            <div className="flex flex-col justify-between h-full text-white/70">
              <div className="flex text-amber-400/60 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400/60 stroke-none" />
                ))}
              </div>
              <p className="text-white/60 group-hover:text-white/80 transition-colors text-base lg:text-xl font-sans line-clamp-3 leading-relaxed">
                “{testimonials[prevIdx].quote}”
              </p>
              <div className="text-sm font-semibold text-[#86B385]/80">
                {testimonials[prevIdx].name} · {testimonials[prevIdx].role}
              </div>
            </div>
          </div>

          {/* MAIN TESTIMONIAL CARD */}
          <div className="w-full max-w-[960px] xl:max-w-[1020px] bg-[#242A24] text-white rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/5 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Rating, Quote, Author, Bottom Control Bar */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full min-h-[300px]">
                <div>
                  {/* Star Rating: 5 Stars + 4.9/5 text */}
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
                    key={current.quote}
                    className="font-sans font-normal text-lg sm:text-2xl lg:text-[1.62rem] text-white leading-snug sm:leading-relaxed tracking-tight mb-8 transition-opacity duration-300"
                  >
                    “{current.quote}”
                  </blockquote>

                  {/* Author Info Row + Indicator Pills */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={current.avatar}
                        alt={current.name}
                        className="w-10 h-10 rounded-full object-cover border border-white/20 shadow-xs"
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
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
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
                      className="w-8 h-8 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-8 h-8 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Interactive "Next stories" Pill with Avatars Stack */}
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-white transition-all group active:scale-95 cursor-pointer shadow-xs"
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
                            setCurrentIndex(idx);
                          }}
                          className={`w-5 h-5 rounded-full object-cover border border-[#242A24] transition-all hover:scale-125 hover:z-20 ${
                            idx === (currentIndex + 1) % testimonials.length
                              ? 'ring-1 ring-[#7CA77B] scale-110 z-10'
                              : 'opacity-70'
                          }`}
                        />
                      ))}
                    </div>
                  </button>
                </div>
              </div>

              {/* Right Column: 3D Layered Card Stack matching reference screenshot */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div
                  className="relative w-[260px] sm:w-[290px] lg:w-[310px] h-[330px] sm:h-[360px] lg:h-[390px] flex items-center justify-center mr-8 lg:mr-10 select-none"
                  onMouseEnter={() => setIsStackHovered(true)}
                  onMouseLeave={() => setIsStackHovered(false)}
                >
                  {testimonials.map((t, idx) => {
                    // Calculate visual card stack offset (0 = front card, 1 = mid card, 2 = back card)
                    const offset = (idx - currentIndex + testimonials.length) % testimonials.length;
                    if (offset > 2) return null; // Only render top 3 layered cards

                    // Fan out slightly on hover for enhanced tactile interactivity
                    const shiftX = isStackHovered ? offset * 22 : offset * 15;
                    const scaleFactor = 1 - offset * 0.04;

                    return (
                      <div
                        key={t.name}
                        onClick={() => offset !== 0 && setCurrentIndex(idx)}
                        className={`absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-out border border-white/10 cursor-pointer ${
                          offset === 0
                            ? 'pointer-events-auto'
                            : 'pointer-events-auto hover:brightness-110 hover:border-white/25'
                        }`}
                        style={{
                          transform: `translateX(${shiftX}px) scaleY(${scaleFactor}) scaleX(${1 - offset * 0.02})`,
                          transformOrigin: 'center left',
                          zIndex: 30 - offset,
                          opacity: offset === 0 ? 1 : offset === 1 ? 0.8 : 0.5,
                          filter: offset === 0 ? 'none' : 'brightness(0.65)',
                        }}
                        title={offset !== 0 ? `Click to view ${t.name}'s story` : undefined}
                      >
                        <img
                          src={t.portrait}
                          alt={t.name}
                          className="w-full h-full object-cover object-top"
                        />
                        {offset > 0 && (
                          <div className="absolute inset-0 bg-[#242A24]/35 backdrop-blur-[0.5px]" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Peeking Right Card Hint (Tablet & Desktop) */}
          <div
            onClick={handleNext}
            className="hidden lg:block absolute right-0 translate-x-[72%] xl:translate-x-[65%] w-[520px] xl:w-[620px] h-[340px] sm:h-[380px] lg:h-[400px] bg-[#242A24] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-8 sm:p-10 border border-white/5 opacity-40 hover:opacity-75 transition-all duration-300 cursor-pointer select-none overflow-hidden shadow-xl group"
            title="Click to view next story"
          >
            <div className="grid grid-cols-12 h-full items-center gap-6">
              <div className="col-span-7">
                <p className="text-white/60 group-hover:text-white/80 transition-colors text-base lg:text-xl font-sans line-clamp-3 leading-relaxed">
                  “{testimonials[nextIdx].quote}”
                </p>
                <div className="text-sm font-semibold text-[#86B385]/80 mt-4">
                  {testimonials[nextIdx].name} · {testimonials[nextIdx].role}
                </div>
              </div>
              <div className="col-span-5 flex justify-end">
                <div className="w-32 h-44 rounded-2xl overflow-hidden border border-white/10 opacity-70 group-hover:opacity-100 transition-opacity">
                  <img
                    src={testimonials[nextIdx].portrait}
                    alt="Next preview"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};