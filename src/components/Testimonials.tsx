import React, { useState } from 'react';
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

  const testimonials: Testimonial[] = [
    {
      quote:
        'I used to be awake for hours. Two weeks into the evening ritual, I fall asleep easily and wake up actually rested. It’s the new habit I haven’t skipped.',
      name: 'Elizabeth Salim',
      location: 'Los Angeles, CA',
      role: 'Verified Buyer',
      rating: 5.0,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      portrait: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    {
      quote:
        'The Tulsi and Moringa combination has completely replaced my 3 PM coffee crash. My digestion feels balanced and my focus is sustained all afternoon.',
      name: 'Marcus Vance',
      location: 'Austin, TX',
      role: 'Verified Buyer',
      rating: 5.0,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      portrait: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    },
    {
      quote:
        'Simple, clean, and genuinely effective. You can smell the botanical freshness the second you open the amber jar. Veronica has perfected Ayurvedic wellness.',
      name: 'Nadia Chen',
      location: 'San Francisco, CA',
      role: 'Verified Buyer',
      rating: 5.0,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      portrait: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full pt-16 sm:pt-24 lg:pt-32">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-botanix-forest tracking-tight leading-tight mb-3">
          Real vibes, <span className="font-editorial italic font-normal text-botanix-green">real folks</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-600">
          Thousands of everyday folks made their wellness part of their day. Here’s what keeps them here.
        </p>
      </div>

      {/* Main Testimonial Card */}
      <div className="bg-botanix-forest text-white rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-10 lg:p-14 shadow-xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Rating, Quote, Author, Slider Controls */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-300">
                  {current.rating.toFixed(1)}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="font-sans font-medium text-lg sm:text-2xl md:text-3xl text-white leading-relaxed tracking-tight mb-8">
                “{current.quote}”
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 mb-10">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-botanix-green"
                />
                <div>
                  <div className="font-bold text-sm text-white">
                    {current.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {current.role} • {current.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5 ml-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      currentIndex === idx ? 'w-6 bg-botanix-green-accent' : 'w-2 bg-white/25'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Photo with Stacked Depth Effect */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Layered back card */}
              <div className="absolute inset-0 bg-[#2C362E] rounded-3xl transform translate-x-3 translate-y-3 -rotate-1 pointer-events-none" />
              <div className="absolute inset-0 bg-[#252E27] rounded-3xl transform -translate-x-2 -translate-y-2 rotate-1 pointer-events-none" />

              {/* Front Photo Card */}
              <div className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">
                <img
                  src={current.portrait}
                  alt={current.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
