import React, { useEffect } from 'react';
import { Heart, ArrowRight, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'wishlist' | 'info';
  title: string;
  subtitle?: string;
  image?: string;
  price?: number;
  actionLabel?: string;
  onAction?: () => void;
}

interface ToastNotificationProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  toasts,
  onDismiss,
}) => {
  useEffect(() => {
    if (toasts.length === 0) return;
    const latestToast = toasts[toasts.length - 1];
    const timer = setTimeout(() => {
      onDismiss(latestToast.id);
    }, 4000);

    return () => clearTimeout(timer);
  }, [toasts, onDismiss]);

  return (
    <div className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2.5 pointer-events-none max-w-lg w-[94vw] sm:w-auto">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => {
          const hasImage = Boolean(toast.image);

          return (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.94 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="pointer-events-auto bg-[#FAF7F2]/95 backdrop-blur-2xl text-[#1E2420] border border-white/80 shadow-[0_14px_45px_rgba(0,0,0,0.18)] rounded-2xl sm:rounded-full p-2 sm:px-3 sm:py-2.5 flex items-center justify-between gap-3 sm:gap-4 select-none min-w-[310px] sm:min-w-[360px]"
            >
              <div className="flex items-center gap-3 min-w-0">
                {/* 1. Left Thumbnail or Icon */}
                {hasImage ? (
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-full overflow-hidden bg-white shrink-0 p-0.5 border border-stone-200/80 shadow-2xs">
                    <img
                      src={toast.image}
                      alt={toast.title}
                      className="w-full h-full object-cover rounded-lg sm:rounded-full"
                    />
                  </div>
                ) : toast.type === 'wishlist' ? (
                  <div className="w-9 h-9 rounded-full bg-rose-500/15 text-rose-500 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                ) : (
                  <div className="w-9 h-9 rounded-full bg-[#3D7B52]/15 text-[#3D7B52] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}

                {/* 2. Text Details */}
                <div className="min-w-0 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5">
                    <h5 className="font-bold text-xs sm:text-sm text-[#161B16] truncate max-w-[150px] sm:max-w-[210px] leading-tight">
                      {toast.title}
                    </h5>
                    {toast.price !== undefined && (
                      <span className="font-display font-extrabold text-xs text-[#3D7B52]">
                        · ${toast.price}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-stone-500 font-medium truncate leading-snug">
                    {toast.subtitle || 'Updated in your ritual'}
                  </p>
                </div>
              </div>

              {/* 3. Action Button (e.g. "View Cart →") & Dismiss */}
              <div className="flex items-center gap-1.5 shrink-0">
                {toast.onAction && toast.actionLabel && (
                  <button
                    onClick={() => {
                      toast.onAction?.();
                      onDismiss(toast.id);
                    }}
                    className="flex items-center gap-1 bg-[#3D7B52] hover:bg-[#2E5F3F] text-white text-[11px] sm:text-xs font-bold px-3 sm:px-3.5 py-1.5 rounded-full shadow-2xs hover:shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>{toast.actionLabel}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}

                <button
                  onClick={() => onDismiss(toast.id)}
                  className="group w-7 h-7 rounded-full hover:bg-stone-200/80 text-stone-400 hover:text-stone-800 flex items-center justify-center transition-all duration-300 hover:rotate-90 active:scale-90 cursor-pointer"
                  aria-label="Dismiss notification"
                >
                  <X className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
