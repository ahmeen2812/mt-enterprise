"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[85vh] lg:min-h-[90vh] pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-center bg-[#f8fafc]"
    >
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
        
        {/* LEFT COLUMN: Authority Typography & Direct Action (5 cols on Desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          
          {/* Main Headline (Animates from top to down) */}
          <div className="overflow-hidden mb-6 sm:mb-8">
            <motion.h1
              initial={{ y: -180, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.4,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[3.4rem] sm:text-[4.6rem] md:text-[5.6rem] xl:text-[6.8rem] font-black leading-[0.88] tracking-tighter text-[#0f172a]"
            >
              EXPERT
              <br />
              <span className="text-slate-400 font-extrabold tracking-tight">
                CHILLER &amp;
              </span>
              <br />
              <span className="text-[#0f172a]">FRIDGE REPAIR.</span>
            </motion.h1>
          </div>

          {/* Subtext Paragraph (Animates from bottom to up) */}
          <div className="overflow-hidden mb-8 sm:mb-10">
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.0,
                delay: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg"
            >
              Delivering precision engineering, high-efficiency system diagnostics,
              and emergency component restoration for commercial walk-ins, heavy
              chillers, and complex cooling systems.
            </motion.p>
          </div>

          {/* Contact Us Button: DIRECT CALL LINK */}
          <div className="relative overflow-hidden w-fit">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <a
                href="tel:+60173027306"
                className="group inline-flex items-center gap-3 bg-[#ea580c] hover:bg-[#c2410c] text-white px-9 sm:px-12 py-4 sm:py-5 font-bold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Contact Us</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1.5 font-mono text-base">
                  →
                </span>
              </a>
            </motion.div>
          </div>

        </div>

        {/* RIGHT COLUMN: Single Wide-Aspect Photo (7 cols on Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="lg:col-span-7 w-full mt-4 lg:mt-0"
        >
          {/*
            aspect-[2/1] locks the container to the photo's 2x-width-to-height ratio.
            sm:aspect-[16/9] / lg:aspect-[2/1] ensures zero distortion on mobile, tablet, or 4K monitors.
          */}
          <div className="w-full aspect-[2/1] relative overflow-hidden bg-slate-200 border-2 border-[#0f172a] group shadow-sm">
            <img
              src="/images/main.jpge"
              alt="MT Enterprise Commercial Chiller and Refrigerator Repair"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Clean solid architectural accent notch in the corner */}
            <div className="absolute top-0 right-0 w-3 h-3 bg-[#0f172a] group-hover:bg-[#ea580c] transition-colors" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}