"use client";

import { motion, TargetAndTransition } from "framer-motion";

// Explicitly typed with TargetAndTransition to satisfy Framer Motion's strict Easing types
const nudgeWhatsApp: TargetAndTransition = {
  rotate: [0, -12, 12, -8, 8, -4, 4, 0],
  scale: [1, 1.1, 1.1, 1.06, 1.06, 1],
  transition: {
    duration: 1.2,
    repeat: Infinity,
    repeatDelay: 8.8,
    ease: "easeInOut",
  },
};

const nudgeCall: TargetAndTransition = {
  rotate: [0, -12, 12, -8, 8, -4, 4, 0],
  scale: [1, 1.1, 1.1, 1.06, 1.06, 1],
  transition: {
    duration: 1.2,
    repeat: Infinity,
    repeatDelay: 8.8,
    delay: 1,
    ease: "easeInOut",
  },
};

const rippleWhatsApp: TargetAndTransition = {
  scale: [1, 1.5, 1.8],
  opacity: [0.7, 0.25, 0],
  transition: {
    duration: 1.4,
    repeat: Infinity,
    repeatDelay: 8.6,
    ease: "easeOut",
  },
};

const rippleCall: TargetAndTransition = {
  scale: [1, 1.5, 1.8],
  opacity: [0.7, 0.25, 0],
  transition: {
    duration: 1.4,
    repeat: Infinity,
    repeatDelay: 8.6,
    delay: 1,
    ease: "easeOut",
  },
};

export default function FloatingContact() {
  return (
    <aside
      aria-label="Direct Dispatch Contact"
      className="fixed bottom-20 right-5 sm:bottom-24 sm:right-8 z-50 flex flex-col items-center gap-4 select-none"
    >
      {/* ================= 1. WHATSAPP FLOATING BUTTON ================= */}
      <div className="relative flex items-center justify-center">
        {/* Periodic 10s Expanding Radar Wave */}
        <motion.span
          animate={rippleWhatsApp}
          className="absolute inset-0 rounded-full bg-emerald-500 pointer-events-none -z-10"
        />

        {/* Attention Badge: "1" Unread indicator */}
        <span className="absolute -top-1 -right-1 z-20 w-5 h-5 rounded-full bg-[#ea580c] text-white text-[10px] font-black flex items-center justify-center shadow-md border-2 border-white pointer-events-none font-mono">
          1
        </span>

        {/* Interactive Floating WhatsApp Button */}
        <motion.a
          href="https://wa.me/60173027306?text=Hello%20MT%20Enterprise,%20I%20need%20urgent%20repair%20service%20in%20Kuala%20Lumpur."
          target="_blank"
          rel="noopener noreferrer"
          animate={nudgeWhatsApp}
          whileHover={{ scale: 1.14 }}
          whileTap={{ scale: 0.92 }}
          className="w-[60px] h-[60px] sm:w-[66px] sm:h-[66px] rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-colors duration-200 border-2 border-white focus:outline-none"
          title="Instant WhatsApp Chat (+60 17-302 7306)"
          aria-label="Instant WhatsApp Chat"
        >
          {/* Official WhatsApp Vector */}
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-sm"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.04-1.08l-.29-.17-3.01.79.8-2.93-.19-.3a8.216 8.216 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.01 2.58c.13.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
          </svg>
        </motion.a>
      </div>

      {/* ================= 2. EMERGENCY PHONE CALL BUTTON ================= */}
      <div className="relative flex items-center justify-center">
        {/* Periodic 10s Radar Wave (Offset by 1s) */}
        <motion.span
          animate={rippleCall}
          className="absolute inset-0 rounded-full bg-[#ea580c] pointer-events-none -z-10"
        />

        {/* Interactive Call Button */}
        <motion.a
          href="tel:+60173027306"
          animate={nudgeCall}
          whileHover={{ scale: 1.14 }}
          whileTap={{ scale: 0.92 }}
          className="w-[60px] h-[60px] sm:w-[66px] sm:h-[66px] rounded-full bg-[#0f172a] hover:bg-[#ea580c] text-white flex items-center justify-center shadow-2xl transition-colors duration-200 border-2 border-white focus:outline-none"
          title="Direct Phone Call (+60 17-302 7306)"
          aria-label="Direct Phone Call"
        >
          {/* Official Phone Handset Vector */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-sm"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </motion.a>
      </div>
    </aside>
  );
}