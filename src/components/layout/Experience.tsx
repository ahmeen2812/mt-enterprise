"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const [experienceCount, setExperienceCount] = useState(0);
  const [reliabilityCount, setReliabilityCount] = useState(0);
  const [restoredCount, setRestoredCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const ctrl1 = animate(0, 20, {
        duration: 2.2,
        ease: "easeOut",
        onUpdate: (val) => setExperienceCount(Math.floor(val)),
      });
      const ctrl2 = animate(0, 100, {
        duration: 2.4,
        ease: "easeOut",
        onUpdate: (val) => setReliabilityCount(Math.floor(val)),
      });
      const ctrl3 = animate(0, 3500, {
        duration: 2.6,
        ease: "easeOut",
        onUpdate: (val) => setRestoredCount(Math.floor(val)),
      });

      return () => {
        ctrl1.stop();
        ctrl2.stop();
        ctrl3.stop();
      };
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-16 sm:py-20 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#0f172a] text-white overflow-hidden border-t-2 border-[#ea580c]"
    >
      <div className="w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          
          {/* STAT 1: 20+ Years Experience */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center pt-6 md:pt-0 md:pr-8"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#ea580c] mb-3 block font-semibold">
              Proven History
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white font-sans">
                {experienceCount}
              </span>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#ea580c]">
                +
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-200 mt-3 uppercase tracking-wider">
              Years Active Experience
            </p>
            <p className="text-xs text-slate-400 mt-1 max-w-xs leading-relaxed font-normal">
              Continuous field precision servicing commercial cooling and refrigeration systems.
            </p>
          </motion.div>

          {/* STAT 2: 100% Reliability Guaranteed */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center pt-8 md:pt-0 md:px-8"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#ea580c] mb-3 block font-semibold">
              Execution Standard
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white font-sans">
                {reliabilityCount}
              </span>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#ea580c]">
                %
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-200 mt-3 uppercase tracking-wider">
              Reliability Guaranteed
            </p>
            <p className="text-xs text-slate-400 mt-1 max-w-xs leading-relaxed font-normal">
              Every unit certified with precision thermal inspection and performance testing.
            </p>
          </motion.div>

          {/* STAT 3: Certified Units Restored */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center pt-8 md:pt-0 md:pl-8"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#ea580c] mb-3 block font-semibold">
              Field Execution
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white font-sans">
                {restoredCount.toLocaleString()}
              </span>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#ea580c]">
                +
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-200 mt-3 uppercase tracking-wider">
              Units Successfully Serviced
            </p>
            <p className="text-xs text-slate-400 mt-1 max-w-xs leading-relaxed font-normal">
              From commercial chillers to industrial-grade cold storage systems.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}