"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
  initialDirection: { x?: number; y?: number };
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home", initialDirection: { y: -20 } },
  { name: "Services", href: "#services", initialDirection: { y: 20 } },
  { name: "Reviews", href: "#reviews", initialDirection: { y: -20 } },
  { name: "Contact", href: "#contact", initialDirection: { x: 25 } },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 h-20 sm:h-24 flex items-center justify-between">
          
          {/* Professional Brand Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3.5 cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* Engineered SVG Turbine Logo */}
          <img 
  src="/images/logo.png" 
  alt="MT Enterprise Logo" 
  className="h-20 w-auto object-contain" 
/>
            <div className="hidden sm:flex flex-col">
  <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0f172a] uppercase">
    MT ENTERPRISE
  </span>
  <span className="text-[10px] uppercase tracking-[0.25em] text-[#ea580c] font-bold">
    Cooling &amp; Repair Systems
  </span>
</div>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {NAV_ITEMS.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, ...item.initialDirection }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.35 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative py-2 text-xs xl:text-sm font-bold uppercase tracking-widest text-[#0f172a] hover:text-[#ea580c] transition-colors duration-200 group"
              >
                {item.name}
                {/* Left-to-right animated hover line */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ea580c] transition-all duration-300 ease-out group-hover:w-full" />
              </motion.a>
            ))}

            {/* 24/7 Dispatch Button */}
            <motion.a
              href="tel:+1234567890"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="px-6 py-2.5 bg-[#0f172a] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#ea580c] transition-all duration-300 flex items-center gap-2.5 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
              24/7 Dispatch
            </motion.a>
          </div>

          {/* Tablet & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded bg-slate-100 text-[#0f172a] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-[#0f172a] transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-2 bg-[#ea580c]" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-[#0f172a] transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-[#0f172a] transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-[#ea580c]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Animated Navbar Bottom Line (Sweeps from left to right) */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="h-[2px] w-full bg-gradient-to-r from-[#ea580c] via-[#0f172a] to-[#ea580c]/40"
        />
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm z-50 bg-[#0f172a] text-white p-8 flex flex-col justify-between shadow-2xl lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-8 border-b border-slate-700">
                  <div className="text-xl font-black text-white">MT Enterprise</div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-400 hover:text-white text-sm uppercase tracking-widest font-mono"
                  >
                    [CLOSE]
                  </button>
                </div>

                <div className="flex flex-col gap-6 mt-10">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + index * 0.08, duration: 0.4 }}
                      className="text-lg uppercase tracking-widest font-bold text-slate-200 hover:text-[#ea580c] transition-colors"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-3.5 bg-[#ea580c] text-white font-bold uppercase tracking-widest text-xs"
                >
                  Contact Us
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}