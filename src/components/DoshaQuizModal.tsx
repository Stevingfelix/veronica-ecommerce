import React, { useState } from 'react';
import { X, Sparkles, ArrowLeft, RefreshCw, ShoppingBag, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS_DATABASE, ProductItem } from '../data/products';

interface DoshaQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: ProductItem) => void;
}

interface Question {
  id: number;
  image: string;
  category: string;
  question: string;
  subtitle: string;
  options: {
    label: string;
    element: string;
    description: string;
    dosha: 'vata' | 'pitta' | 'kapha';
  }[];
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    image: '/images/card1-ayurvedic-hd.jpg',
    category: 'Intention',
    question: 'What is your primary wellness intention right now?',
    subtitle: 'Choose the area of your biological rhythm asking for the most care.',
    options: [
      {
        label: 'Calm Mind & Deep Rest',
        element: 'Vata · Air & Space',
        description: 'Soothing restless evening thoughts, easing tension, restorative sleep.',
        dosha: 'vata',
      },
      {
        label: 'Cooling Balance & Mental Clarity',
        element: 'Pitta · Fire & Water',
        description: 'Dissolving workday heat, irritability, and mental overwhelm.',
        dosha: 'pitta',
      },
      {
        label: 'Invigorating Energy & Awakening',
        element: 'Kapha · Earth & Water',
        description: 'Clearing morning fog, jumpstarting metabolism, shaking sluggishness.',
        dosha: 'kapha',
      },
    ],
  },
  {
    id: 2,
    image: '/images/hero-yoga-hd.jpg',
    category: 'Nervous System',
    question: 'When under stress or heavy demands, your body tends to:',
    subtitle: 'Your natural somatic reaction when pressure mounts.',
    options: [
      {
        label: 'Overthink & feel restless',
        element: 'Vata · Movement',
        description: 'Scattered thoughts, butterflies in stomach, difficulty switching off.',
        dosha: 'vata',
      },
      {
        label: 'Run hot, impatient or irritable',
        element: 'Pitta · Intensity',
        description: 'Intense focus that risks burnout, physical heat, tension in jaw/neck.',
        dosha: 'pitta',
      },
      {
        label: 'Slow down, withdraw or feel heavy',
        element: 'Kapha · Resistance',
        description: 'Procrastination, emotional snacking, feeling weighed down.',
        dosha: 'kapha',
      },
    ],
  },
  {
    id: 3,
    image: '/images/ritual-matcha-hd.jpg',
    category: 'Circadian Cadence',
    question: 'How does your physical energy typically flow during the day?',
    subtitle: 'The natural rhythm and stamina of your daily vitality.',
    options: [
      {
        label: 'Unpredictable bursts followed by sudden dips',
        element: 'Vata · Variable',
        description: 'Spikes of creativity followed by mid-afternoon slumps.',
        dosha: 'vata',
      },
      {
        label: 'Laser-sharp and high, but crashes if meals are missed',
        element: 'Pitta · Fast-Burn',
        description: 'Strong drive, but becomes hangry or depleted quickly.',
        dosha: 'pitta',
      },
      {
        label: 'Slow to wake up, but steady once momentum starts',
        element: 'Kapha · Endurance',
        description: 'Needs warm drinks and motion to get started, then endurance lasts.',
        dosha: 'kapha',
      },
    ],
  },
  {
    id: 4,
    image: '/images/difference-botanical-canisters.jpg',
    category: 'Digestive Fire (Agni)',
    question: 'How would you describe your digestive baseline?',
    subtitle: 'In Ayurveda, gut harmony is the foundation of all well-being.',
    options: [
      {
        label: 'Delicate, prone to bloating or irregular timing',
        element: 'Vata · Sensitive',
        description: 'Appetite fluctuates; dry throat or sensitive digestion.',
        dosha: 'vata',
      },
      {
        label: 'Strong and fast; easily irritated by spicy or acidic food',
        element: 'Pitta · Sharp',
        description: 'Never skips a meal; prone to acidity or internal heat.',
        dosha: 'pitta',
      },
      {
        label: 'Slow and heavy; comfortable fasting or skipping breakfast',
        element: 'Kapha · Heavy',
        description: 'Takes hours to digest; prone to feeling sluggish post-meals.',
        dosha: 'kapha',
      },
    ],
  },
];

export const DoshaQuizModal: React.FC<DoshaQuizModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'vata' | 'pitta' | 'kapha'>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (dosha: 'vata' | 'pitta' | 'kapha') => {
    const nextAnswers = { ...answers, [currentStep]: dosha };
    setAnswers(nextAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
  };

  // Calculate dominant dosha
  const calculateResult = () => {
    const counts = { vata: 0, pitta: 0, kapha: 0 };
    Object.values(answers).forEach((d) => {
      counts[d] = (counts[d] || 0) + 1;
    });

    let dominant: 'vata' | 'pitta' | 'kapha' = 'vata';
    if (counts.pitta > counts.vata && counts.pitta >= counts.kapha) dominant = 'pitta';
    else if (counts.kapha > counts.vata && counts.kapha > counts.pitta) dominant = 'kapha';

    if (dominant === 'vata') {
      return {
        name: 'Vata',
        subtitle: 'Air & Space (Ether) · The Energy of Movement',
        description:
          'Your bio-blueprint is creative, intuitive, and quick-thinking. When out of equilibrium, you may experience mental restlessness, cool extremities, and irregular sleep. Your daily ritual calls for warming, deeply grounding adaptogens.',
        recommendedProductId: 'sig-3', // Ashwagandha Gummies
        color: '#D4A373',
        tagline: 'Deep Grounding & Restorative Sleep',
        bannerImage: '/images/hero-yoga-hd.jpg',
      };
    } else if (dominant === 'pitta') {
      return {
        name: 'Pitta',
        subtitle: 'Fire & Water · The Energy of Transformation',
        description:
          'You possess sharp intellect, natural leadership, and dynamic drive. When elevated, Pitta creates internal heat, irritability, and skin reactivity. Your daily ritual calls for cooling, soothing botanicals.',
        recommendedProductId: 'sig-5', // Ceremonial Matcha Tin
        color: '#3D7B52',
        tagline: 'Cooling Vitality & Balanced Clarity',
        bannerImage: '/images/ritual-matcha-hd.jpg',
      };
    } else {
      return {
        name: 'Kapha',
        subtitle: 'Earth & Water · The Energy of Structure & Cohesion',
        description:
          'You are grounded, loyal, calm, and naturally resilient. When out of equilibrium, Kapha manifests as heaviness, morning lethargy, and slow lymphatic circulation. Your daily ritual calls for invigorating, metabolism-activating herbs.',
        recommendedProductId: 'sig-1', // Moringa Greens Powder
        color: '#245236',
        tagline: 'Metabolic Radiance & Whole-Body Lightness',
        bannerImage: '/images/card1-ayurvedic-hd.jpg',
      };
    }
  };

  const result = calculateResult();
  const recommendedProduct =
    PRODUCTS_DATABASE.find((p) => p.id === result.recommendedProductId) || PRODUCTS_DATABASE[0];

  const handleAddRecommendedToCart = () => {
    onAddToCart(recommendedProduct);
    onClose();
  };

  const currentQ = QUIZ_QUESTIONS[currentStep];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Frosted Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card with Rich Editorial Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-xl bg-[#FAF7F2] rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-white/80 overflow-hidden my-auto text-[#1E2420]"
          >
            {!isCompleted ? (
              <div>
                {/* 1. FULL-WIDTH CINEMATIC TOP IMAGE BANNER */}
                <div className="relative w-full h-44 sm:h-52 bg-neutral-900 overflow-hidden">
                  <img
                    src={currentQ.image}
                    alt={currentQ.category}
                    className="w-full h-full object-cover object-center transition-all duration-700"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />

                  {/* Top Close Button */}
                  <div className="absolute top-4 right-4 z-10">
                    <button
                      onClick={onClose}
                      className="group w-9 h-9 rounded-full bg-black/30 hover:bg-[#3D7B52] border border-white/25 text-white flex items-center justify-center transition-all duration-300 hover:rotate-90 active:scale-90 cursor-pointer shadow-sm"
                      aria-label="Close Dosha Quiz"
                    >
                      <X className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    </button>
                  </div>

                  {/* Bottom of Image: Question Headline & Step Tracker */}
                  <div className="absolute bottom-3 left-5 right-5 z-10 text-white">
                    <span className="text-[11px] font-medium text-white/80 uppercase tracking-widest block mb-0.5">
                      Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white leading-tight drop-shadow-sm">
                      {currentQ.question}
                    </h3>
                  </div>

                  {/* Integrated Progress Bar along bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                    <motion.div
                      className="h-full bg-[#7CA77B]"
                      initial={{ width: '25%' }}
                      animate={{
                        width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* 2. QUESTION OPTIONS BODY */}
                <div className="p-5 sm:p-7">
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {currentQ.subtitle}
                  </p>

                  {/* Options List */}
                  <div className="space-y-3 mb-5">
                    {currentQ.options.map((option, idx) => {
                      const isSelected = answers[currentStep] === option.dosha;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelectOption(option.dosha)}
                          className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 group ${
                            isSelected
                              ? 'bg-[#3D7B52]/10 border-[#3D7B52] shadow-xs'
                              : 'bg-white border-stone-200/90 hover:border-[#3D7B52]/60 hover:bg-[#FAF4EB]'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 transition-all ${
                              isSelected
                                ? 'border-[#3D7B52] bg-[#3D7B52] text-white'
                                : 'border-stone-300 group-hover:border-[#3D7B52]'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 mb-0.5">
                              <span className="text-xs sm:text-sm font-bold text-[#161B16] group-hover:text-[#3D7B52] transition-colors">
                                {option.label}
                              </span>
                              <span className="text-[10px] font-semibold text-stone-600 bg-black/5 px-2 py-0.5 rounded-full shrink-0">
                                {option.element}
                              </span>
                            </div>
                            <p className="text-[11px] text-stone-600 leading-snug">
                              {option.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Footer Navigation */}
                  <div className="flex items-center justify-between pt-1">
                    {currentStep > 0 ? (
                      <button
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-black cursor-pointer transition-colors"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Previous Question</span>
                      </button>
                    ) : (
                      <span className="text-[11px] text-stone-600">
                        Select an option to proceed
                      </span>
                    )}

                    <span className="text-[11px] text-stone-600 font-medium">
                      Ayurvedic Dosha Diagnostic
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* RESULTS SCREEN WITH TOP HERO IMAGE BANNER */
              <div>
                <div className="relative w-full h-48 sm:h-56 bg-neutral-900 overflow-hidden">
                  <img
                    src={result.bannerImage}
                    alt={result.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-black/50 to-black/35" />

                  {/* Close Button on Result Banner */}
                  <div className="absolute top-4 right-4 z-10">
                    <button
                      onClick={onClose}
                      className="group w-9 h-9 rounded-full bg-white/20 hover:bg-[#3D7B52] border border-white/25 text-white flex items-center justify-center transition-all duration-300 hover:rotate-90 active:scale-90 cursor-pointer shadow-sm"
                      aria-label="Close Dosha Quiz"
                    >
                      <X className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    </button>
                  </div>

                  {/* Result Badge */}
                  <div className="absolute bottom-2 left-6 right-6 text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3D7B52] text-white text-[11px] font-extrabold uppercase tracking-widest shadow-sm mb-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Your Dominant Bio-Blueprint</span>
                    </div>
                    <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#161B16]">
                      {result.name} Rhythm
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-2 text-center">
                  <p className="text-xs font-semibold text-stone-600 mb-3">
                    {result.subtitle}
                  </p>

                  <p className="text-xs text-stone-700 leading-relaxed max-w-md mx-auto mb-5 bg-white p-4 rounded-2xl border border-stone-200/90 shadow-2xs">
                    {result.description}
                  </p>

                  {/* Recommended Product Box */}
                  <div className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-xs flex items-center gap-4 text-left mb-6">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#F6F2EB] p-1 shrink-0 border border-stone-200/60">
                      <img
                        src={recommendedProduct.image}
                        alt={recommendedProduct.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#3D7B52] block">
                        Recommended Daily Ritual
                      </span>
                      <h4 className="font-bold text-sm text-[#161B16] truncate">
                        {recommendedProduct.name}
                      </h4>
                      <p className="text-[11px] text-stone-600 truncate mb-1">
                        {result.tagline}
                      </p>
                      <div className="font-display font-extrabold text-base text-[#161B16]">
                        ${recommendedProduct.price}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={handleAddRecommendedToCart}
                      className="w-full sm:flex-1 bg-[#3D7B52] hover:bg-[#2E5F3F] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add Ritual to Cart</span>
                    </button>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-xs font-semibold text-stone-600 hover:text-stone-900 border border-stone-300 hover:bg-stone-50 transition-all cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Retake Quiz</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
