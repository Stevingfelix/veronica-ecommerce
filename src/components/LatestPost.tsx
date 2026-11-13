import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface BlogPost {
  num: string;
  title: string;
  tags: string[];
  imageUrl: string;
  excerpt: string;
}

export const LatestPost: React.FC = () => {
  const posts: BlogPost[] = [
    {
      num: '01',
      title: 'What Is Content Marketing? How It Works In 2025',
      tags: ['Marketing', 'Design'],
      imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
      excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      num: '02',
      title: 'Can You Trust What AI Tells You About PPC? We Tested It!',
      tags: ['Marketing', 'Strategy'],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      num: '03',
      title: '90+ May Marketing Ideas (A Examples!) For Any Business Or Budget',
      tags: ['Marketing', 'Growth'],
      imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80',
      excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  return (
    <section id="blog" className="bg-[#FAF5EF] py-24 md:py-36">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-brand-orange rounded-xs"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-700">
              BLOG & ARTICLE
            </span>
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#161A14]">
            Latest Post
          </h2>
        </div>

        {/* Blog Post Cards List */}
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <div
              key={post.num}
              className="group bg-[#EFE8DF]/60 hover:bg-[#EFE8DF] border border-black/5 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Left: Number + Title & Tags */}
                <div className="md:col-span-6 flex items-start gap-5">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-xs text-gray-800 shadow-xs flex-shrink-0 mt-1">
                    {post.num}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900 group-hover:text-brand-orange transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <div className="flex gap-2 mt-4">
                      {post.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-semibold text-gray-600 bg-white/80 border border-black/5 px-3 py-1 rounded-full uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: Preview Thumbnail */}
                <div className="md:col-span-3 flex justify-center md:justify-start">
                  <div className="w-full h-32 md:h-28 rounded-2xl overflow-hidden shadow-xs">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Right: Excerpt & Action Button */}
                <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-6">
                  <p className="text-xs text-gray-500 hidden xl:block max-w-[200px] leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="w-12 h-12 rounded-full border border-black/15 group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:text-white transition-all flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Load More Button */}
        <div className="mt-14 flex justify-center">
          <button className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

