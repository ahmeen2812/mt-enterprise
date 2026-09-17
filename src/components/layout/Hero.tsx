"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-center bg-[#f8fafc]"
    >
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
        
        {/* LEFT COLUMN: Headline, Clean Subtext & Clean Button */}
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

          {/* Subtext (Animates from bottom to up) */}
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

        {/* RIGHT COLUMN: 2 Images on Mobile, 3 Images on Desktop */}
        <div className="lg:col-span-7 w-full mt-4 lg:mt-0">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5 h-[280px] sm:h-[360px] md:h-[440px] lg:h-[540px] xl:h-[580px] items-stretch">
            
            {/* IMAGE 1: Visible on all screens (col-span-1 on mobile, col-span-4 on desktop) */}
            <div className="col-span-1 lg:col-span-4 h-full relative overflow-hidden bg-slate-200 border-2 border-slate-300 group">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full h-full relative"
              >
                <img
                  src="/images/hero1.jpg"
                  alt="AC & Chiller Repair"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[9px] uppercase tracking-widest font-mono text-[#ea580c] block">
                    UNIT 01
                  </span>
                  <span className="text-xs font-bold uppercase tracking-tight truncate block">
                    AC Repair 
                  </span>
                </div>
              </motion.div>
            </div>

            {/* IMAGE 2: Visible on all screens (col-span-1 on mobile, col-span-4 on desktop) */}
            <div className="col-span-1 lg:col-span-4 h-full relative overflow-hidden bg-slate-200 border-2 border-slate-300 group">
              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full h-full relative"
              >
                <img
                  src="/images/hero-2.png"
                  alt="Refrigerator Repair"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[9px] uppercase tracking-widest font-mono text-[#ea580c] block">
                    UNIT 02
                  </span>
                  <span className="text-xs font-bold uppercase tracking-tight truncate block">
                    Compressor Repair
                  </span>
                </div>
              </motion.div>
            </div>

            {/* IMAGE 3: Hidden on mobile (hidden lg:block), visible only on desktop (lg:col-span-4) */}
            <div className="hidden lg:block lg:col-span-4 h-full relative overflow-hidden bg-slate-200 border-2 border-slate-300 group">
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{
                  duration: 1.3,
                  delay: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ originY: 0.5 }}
                className="w-full h-full relative"
              >
                <img
                  src="/images/washer-2.png"
                  alt="Industrial Washing Machine Repair"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[9px] uppercase tracking-widest font-mono text-[#ea580c] block">
                    UNIT 03
                  </span>
                  <span className="text-xs font-bold uppercase tracking-tight truncate block">
                    Heavy Systems
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}