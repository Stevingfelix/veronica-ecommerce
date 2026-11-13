import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  imageUrl: string;
  span?: string;
  aspect?: string;
}

export const RecentWorks: React.FC = () => {
  const leftColumnProjects: Project[] = [
    {
      title: 'Panda Automap',
      category: '2024 • Development',
      imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
      aspect: 'h-[360px] md:h-[440px]',
    },
    {
      title: 'Tailor Product Branding',
      category: '2024 • Development',
      imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80',
      aspect: 'h-[420px] md:h-[500px]',
    },
    {
      title: 'Web Design',
      category: '2021 • UI/UX',
      imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80',
      aspect: 'h-[340px] md:h-[400px]',
    },
  ];

  const rightColumnProjects: Project[] = [
    {
      title: 'Panda Automap',
      category: '2024 • Development',
      imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
      aspect: 'h-[440px] md:h-[520px]',
    },
    {
      title: 'Panda Automap',
      category: '2024 • Development',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
      aspect: 'h-[360px] md:h-[420px]',
    },
    {
      title: 'Panda Automap',
      category: '2024 • Development',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      aspect: 'h-[420px] md:h-[480px]',
    },
  ];

  return (
    <section id="work" className="bg-[#FAF5EF] py-24 md:py-36 relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-16">
        {/* Soft Watermark Header */}
        <div className="mb-14 md:mb-20">
          <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight text-black/10 select-none">
            Our Recent
            <br />
            Works
          </h2>
        </div>

        {/* 2-Column Staggered Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
          {/* Left Column */}
          <div className="flex flex-col gap-12 md:gap-16">
            {leftColumnProjects.map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div
                  className={`relative w-full ${project.aspect} rounded-3xl overflow-hidden bg-gray-200 shadow-md group-hover:shadow-2xl transition-all duration-500`}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-gray-900 group-hover:text-brand-orange transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm font-medium text-gray-500 mt-0.5">
                      {project.category}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Staggered offset) */}
          <div className="flex flex-col gap-12 md:gap-16 md:pt-20">
            {rightColumnProjects.map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div
                  className={`relative w-full ${project.aspect} rounded-3xl overflow-hidden bg-gray-200 shadow-md group-hover:shadow-2xl transition-all duration-500`}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-gray-900 group-hover:text-brand-orange transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm font-medium text-gray-500 mt-0.5">
                      {project.category}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}

            {/* Distinctive Decorative Bottom Peach Card */}
            <a
              href="#contact"
              className="group bg-[#FFDEC8] p-8 md:p-12 rounded-3xl flex items-center justify-between border border-black/5 hover:bg-[#FFD4B8] transition-colors shadow-sm"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600 block mb-1">
                  Have a Project in Mind?
                </span>
                <span className="font-display font-bold text-2xl md:text-3xl text-gray-900">
                  Let's Work Together
                </span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-orange transition-all duration-300">
                <ArrowUpRight className="w-7 h-7" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

