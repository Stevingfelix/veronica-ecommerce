import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(2); // Default 3rd item open as in screenshot

  const faqs: FAQItem[] = [
    {
      question: 'How do I contact you for inquiries or collaborations?',
      answer:
        'You can reach us directly through our contact form, email at veronicahelp@agency.com, or schedule a quick 15-minute introductory call with our strategy team.',
    },
    {
      question: 'What does your marketing agency do?',
      answer:
        'Veronica is a full-service creative agency specializing in digital product design, custom web development, brand strategy, content architecture, and performance marketing.',
    },
    {
      question: 'What is included in your digital marketing services?',
      answer:
        'Our digital marketing package includes brand positioning, SEO optimization, high-converting PPC campaigns, social media content strategies, conversion rate optimization (CRO), and continuous metric reporting with monthly retrospectives.',
    },
    {
      question: 'Can you create content for our social media accounts?',
      answer:
        'Yes, our content studio produces bespoke graphic assets, 3D animations, motion teasers, photography, and high-impact copy tailored to your brand voice.',
    },
  ];

  return (
    <section className="bg-[#DFE5DA] py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Tag and 4-pointed Star Emblem */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-brand-orange rounded-xs"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-700">
                  FAQ'S
                </span>
              </div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[#161A14] tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            {/* 4-pointed Geometric Star Emblem */}
            <div className="mt-12 lg:mt-24 flex items-center justify-center lg:justify-start">
              <svg
                viewBox="0 0 100 100"
                className="w-32 h-32 md:w-44 md:h-44 text-[#161A14] fill-current animate-[spin_60s_linear_infinite]"
              >
                <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" />
              </svg>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-black/5 overflow-hidden transition-all duration-300 shadow-xs"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-5 px-6 md:py-6 md:px-8 text-left flex items-center justify-between gap-4 font-semibold text-base md:text-lg text-[#161A14] hover:text-brand-orange transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 text-[#161A14]">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 md:px-8 pb-6 pt-1 text-sm md:text-base text-gray-600 leading-relaxed border-t border-black/5 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

