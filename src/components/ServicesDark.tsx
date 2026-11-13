import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  highlightImage?: string;
}

export const ServicesDark: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('branding');

  const services: ServiceItem[] = [
    {
      id: 'marketing',
      title: 'Digital Marketing',
      description: 'Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.',
      tags: ['Web Design', 'Design'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.',
      tags: ['Web Design', 'Design'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'branding',
      title: 'Branding',
      description: 'Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.',
      tags: ['Brand Design', 'Strategy'],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      highlightImage: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'design-system',
      title: 'Design System',
      description: 'Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.',
      tags: ['Design System', 'UI Components'],
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="services" className="bg-[#0B0C0E] text-white py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-brand-orange rounded-xs"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              WHAT WE DO
            </span>
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white">
            Our Services
          </h2>
        </div>

        {/* Services List / Stacked Showcase */}
        <div className="flex flex-col gap-6 md:gap-8">
          {services.map((service) => {
            const isActive = activeService === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`relative rounded-3xl md:rounded-[2rem] transition-all duration-500 cursor-pointer p-6 sm:p-8 md:p-12 ${
                  isActive
                    ? 'bg-[#18191D] border border-white/10 shadow-2xl scale-[1.01]'
                    : 'bg-[#121316]/70 hover:bg-[#16171B] border border-white/5'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  {/* Left Thumbnail (Shows preview image) */}
                  <div className="flex items-center gap-6">
                    <div className="relative w-28 h-20 sm:w-36 sm:h-24 md:w-44 md:h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-neutral-800 shadow-md">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                        {service.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {service.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Middle Description */}
                  <div className="max-w-md lg:px-4">
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Action Button */}
                  <div className="flex items-center justify-end">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-white text-black shadow-lg scale-110'
                          : 'bg-white/10 text-white hover:bg-brand-orange hover:text-white'
                      }`}
                    >
                      <ArrowUpRight className="w-6 h-6 stroke-[2.2]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

