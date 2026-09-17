"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-24 px-12 bg-navy text-white overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        className="text-6xl font-bold mb-16 text-center"
      >
        Trusted by <span className="text-[var(--premium-orange)]">Industry Leaders</span>
      </motion.h2>
      
      <div className="flex gap-8 justify-center">
        {[1, 2, 3].map((card) => (
          <motion.div 
            key={card}
            whileHover={{ y: -10 }}
            className="p-8 border border-white/20 w-80 bg-white/5 backdrop-blur-sm"
          >
            <p className="mb-6 italic text-slate-300">"The best repair service I have ever used. Fast, professional, and reliable."</p>
            <h4 className="font-bold text-[var(--premium-orange)]">— Client Name {card}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}