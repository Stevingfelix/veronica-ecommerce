import React from 'react';

export const AboutAgency: React.FC = () => {
  const stats = [
    { label: 'Project Done', value: '0.8K' },
    { label: 'Happy Clients', value: '146' },
    { label: 'Total Growth', value: '2K' },
  ];

  const tickerItems = [
    'FEATURE',
    'DESIGN',
    'MARKETING',
    'STRATEGY',
    'BRANDING',
    'DEVELOPMENT',
    'INNOVATION',
    'EXPERIENCE',
  ];

  return (
    <section id="about" className="bg-[#DFE5DA] pt-20 md:pt-28 pb-0 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-16">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-16 md:pb-24 border-b border-black/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-brand-orange rounded-xs"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-700">
                ABOUT
              </span>
            </div>
            <h2 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#161A14]">
              Agency
            </h2>
          </div>

          <div className="max-w-xl md:pt-4">
            <p className="text-base md:text-xl text-gray-800 font-medium leading-relaxed">
              Our services are designed to craft impactful digital solutions while addressing your problems through strategy, innovation, and analysis.
            </p>
          </div>
        </div>

        {/* 3 Circular Stat Badges */}
        <div className="py-16 md:py-24 flex flex-wrap items-center justify-center gap-8 md:gap-14 lg:gap-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-white flex flex-col items-center justify-center p-6 text-center shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-default"
            >
              <span className="text-xs sm:text-sm font-semibold text-gray-500 mb-2 group-hover:text-brand-orange transition-colors">
                {stat.label}
              </span>
              <span className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#161A14] tracking-tight">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Ticker Strip */}
      <div className="w-full bg-[#CFD8C5] py-5 md:py-7 border-y border-black/10 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex items-center">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center font-display font-extrabold text-2xl md:text-4xl text-[#161A14] tracking-widest uppercase select-none mx-6 md:mx-10"
            >
              <span>{item}</span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-orange ml-12 md:ml-20"></span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

