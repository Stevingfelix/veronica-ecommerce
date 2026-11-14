import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast?: (msg: string) => void;
}

type TabType = 'login' | 'signup' | 'forgot';

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccessToast,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [newsletterOptIn, setNewsletterOptIn] = useState(true);
  const [forgotSent, setForgotSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'forgot') {
      setForgotSent(true);
      return;
    }

    if (activeTab === 'login') {
      if (onSuccessToast) {
        onSuccessToast('Welcome back to your herbal ritual.');
      }
      onClose();
    } else if (activeTab === 'signup') {
      if (onSuccessToast) {
        onSuccessToast('Account created! Welcome to VERONICA.');
      }
      onClose();
    }
  };

  const handleSocialLogin = (provider: 'Google' | 'Apple') => {
    if (onSuccessToast) {
      onSuccessToast(`Connected via ${provider}. Welcome to your ritual.`);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Frosted Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
          />

          {/* Luxury Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-md bg-[#FAF7F2]/95 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-[2rem] p-6 sm:p-8 my-auto overflow-hidden text-[#1E2420]"
          >
            {/* Close Button - Animated & Goes Green on Hover */}
            <button
              onClick={onClose}
              className="group absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-stone-200/60 hover:bg-[#3D7B52] text-stone-700 hover:text-white flex items-center justify-center shadow-xs hover:shadow-md transition-all duration-300 hover:rotate-90 active:scale-90 cursor-pointer"
              aria-label="Close authentication modal"
            >
              <X className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </button>

            {/* Brand Header */}
            <div className="flex flex-col items-center text-center mb-6 pt-2">
              <div className="w-10 h-10 rounded-full bg-[#3D7B52] flex items-center justify-center text-white shadow-md mb-2.5">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 3a9 9 0 0 0-9 9c0 3.87 2.45 7.17 5.88 8.42.34-.78.78-1.5 1.3-2.14C8.25 17.5 7 15.42 7 13a5 5 0 0 1 10 0c0 2.42-1.25 4.5-3.18 5.28.52.64.96 1.36 1.3 2.14C18.55 19.17 21 15.87 21 12a9 9 0 0 0-9-9zm-1 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm4.5 4.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5h7z" />
                </svg>
              </div>
              <h2 className="font-display font-extrabold text-xl tracking-tight text-[#1E2420] uppercase">
                VERONICA
              </h2>
              <p className="text-xs text-stone-600 font-medium mt-0.5">
                Botanical micro-batch rituals & patient portal
              </p>
            </div>

            {/* Navigation Tabs (Log In / Create Account) */}
            {activeTab !== 'forgot' && (
              <div className="flex items-center p-1 bg-stone-200/60 rounded-full mb-6 border border-stone-300/40">
                <button
                  type="button"
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    activeTab === 'login'
                      ? 'bg-white text-[#1E2420] shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Log In
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('signup')}
                  className={`flex-1 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    activeTab === 'signup'
                      ? 'bg-white text-[#1E2420] shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Create Account
                </button>
              </div>
            )}

            {/* TAB 1: LOG IN */}
            {activeTab === 'login' && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Email Field */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="elena@botanical.com"
                      className="w-full bg-white/90 border border-stone-200/90 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1E2420] placeholder-stone-600 focus:outline-none focus:border-[#3D7B52] focus:ring-2 focus:ring-[#3D7B52]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-stone-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full bg-white/90 border border-stone-200/90 rounded-xl pl-10 pr-10 py-2.5 text-xs text-[#1E2420] placeholder-stone-600 focus:outline-none focus:border-[#3D7B52] focus:ring-2 focus:ring-[#3D7B52]/20 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-600 hover:text-stone-900 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="group flex items-center gap-2.5 cursor-pointer select-none text-stone-600">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-md flex items-center justify-center transition-all duration-200 border ${
                        rememberMe
                          ? 'bg-[#3D7B52] border-[#3D7B52] text-white shadow-xs'
                          : 'bg-white border-stone-300 group-hover:border-stone-400'
                      }`}
                    >
                      {rememberMe && <Check className="w-3 h-3 text-white stroke-[3]" />}
                    </div>
                    <span className="font-medium">Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('forgot');
                      setForgotSent(false);
                    }}
                    className="text-[#3D7B52] hover:text-[#2E5F3F] font-semibold hover:underline cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-2 bg-[#3D7B52] hover:bg-[#326442] active:bg-[#285235] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-full shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Sign In to Ritual</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* TAB 2: CREATE ACCOUNT */}
            {activeTab === 'signup' && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Full name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Elena Rostova"
                      className="w-full bg-white/90 border border-stone-200/90 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1E2420] placeholder-stone-600 focus:outline-none focus:border-[#3D7B52] focus:ring-2 focus:ring-[#3D7B52]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="elena@botanical.com"
                      className="w-full bg-white/90 border border-stone-200/90 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1E2420] placeholder-stone-600 focus:outline-none focus:border-[#3D7B52] focus:ring-2 focus:ring-[#3D7B52]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Create password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-stone-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Min. 8 characters"
                      className="w-full bg-white/90 border border-stone-200/90 rounded-xl pl-10 pr-10 py-2.5 text-xs text-[#1E2420] placeholder-stone-600 focus:outline-none focus:border-[#3D7B52] focus:ring-2 focus:ring-[#3D7B52]/20 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-600 hover:text-stone-900 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Newsletter Opt-In */}
                <label className="group flex items-start gap-2.5 cursor-pointer select-none text-[11px] text-stone-600 pt-1 leading-snug">
                  <input
                    type="checkbox"
                    checked={newsletterOptIn}
                    onChange={(e) => setNewsletterOptIn(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-4 h-4 mt-0.5 rounded-md flex items-center justify-center shrink-0 transition-all duration-200 border ${
                      newsletterOptIn
                        ? 'bg-[#3D7B52] border-[#3D7B52] text-white shadow-xs'
                        : 'bg-white border-stone-300 group-hover:border-stone-400'
                    }`}
                  >
                    {newsletterOptIn && <Check className="w-3 h-3 text-white stroke-[3]" />}
                  </div>
                  <span>
                    Receive monthly Ayurvedic harvest guides, ritual tips & private batch releases.
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-2 bg-[#3D7B52] hover:bg-[#326442] active:bg-[#285235] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-full shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Create Account</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* TAB 3: FORGOT PASSWORD */}
            {activeTab === 'forgot' && (
              <div className="flex flex-col gap-4">
                <div className="text-center mb-1">
                  <h3 className="text-sm font-bold text-[#1E2420]">Reset Your Password</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Enter the email registered with VERONICA to receive recovery instructions.
                  </p>
                </div>

                {forgotSent ? (
                  <div className="bg-[#DCE7DA]/80 border border-[#3D7B52]/30 rounded-2xl p-4 text-center">
                    <p className="text-xs font-semibold text-[#245236]">
                      ✓ Reset link dispatched
                    </p>
                    <p className="text-[11px] text-stone-600 mt-1">
                      Check your inbox at <span className="font-semibold">{email || 'your email'}</span> for the recovery link.
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveTab('login')}
                      className="mt-3 text-xs font-bold text-[#3D7B52] hover:underline cursor-pointer"
                    >
                      Return to Sign In
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Email address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-stone-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="elena@botanical.com"
                          className="w-full bg-white/90 border border-stone-200/90 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1E2420] placeholder-stone-600 focus:outline-none focus:border-[#3D7B52] focus:ring-2 focus:ring-[#3D7B52]/20 transition-all"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#3D7B52] hover:bg-[#326442] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-full shadow-md transition-all cursor-pointer"
                    >
                      Send Reset Instructions
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('login')}
                      className="text-xs text-stone-600 hover:text-stone-900 text-center font-medium cursor-pointer"
                    >
                      Cancel and return to Sign In
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Social Logins (Google / Apple) */}
            {activeTab !== 'forgot' && (
              <div className="mt-6 pt-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px bg-stone-200/80 flex-1" />
                  <span className="text-[10.5px] font-semibold text-stone-500 uppercase tracking-wider">
                    Or continue with
                  </span>
                  <div className="h-px bg-stone-200/80 flex-1" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Google */}
                  <button
                    type="button"
                    onClick={() => handleSocialLogin('Google')}
                    className="flex items-center justify-center gap-2 bg-white hover:bg-stone-50 border border-stone-200 py-2.5 px-3 rounded-full text-xs font-semibold text-[#1E2420] shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.9c2.28-2.1 3.64-5.2 3.64-9.15z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.74-2.1-6.68-4.93H1.26v3.15C3.25 21.35 7.33 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.32 14.27c-.24-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.26C.46 8.17 0 9.97 0 12s.46 3.83 1.26 5.42l4.06-3.15z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.65 1.26 6.58l4.06 3.15c.94-2.83 3.58-4.98 6.68-4.98z"
                      />
                    </svg>
                    <span>Google</span>
                  </button>

                  {/* Apple */}
                  <button
                    type="button"
                    onClick={() => handleSocialLogin('Apple')}
                    className="flex items-center justify-center gap-2 bg-white hover:bg-stone-50 border border-stone-200 py-2.5 px-3 rounded-full text-xs font-semibold text-[#1E2420] shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.65-.8 1.1-1.92.97-3.04-1 .04-2.18.66-2.88 1.48-.61.7-.1.15-2.22.95-3.04 1.05.04 2.19.66 2.86 1.48z" />
                    </svg>
                    <span>Apple</span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

