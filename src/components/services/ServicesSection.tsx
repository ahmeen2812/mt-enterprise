"use client";

import { motion } from "framer-motion";

interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  image1: string;
  image2: string;
  image1Label: string;
  image2Label: string;
}

const SERVICES_DATA: ServiceData[] = [
  {
    id: "01",
    title: "Air Conditioning Repair & Overhaul",
    tagline: "Commercial & High-Capacity Residential HVAC",
    description:
      "Complete thermodynamic diagnostics, compressor rebuilding, and circuit calibration. We restore cooling efficiency, resolve refrigerant leaks, and overhaul multi-split and ducted VRF/VRV central units with factory-grade precision.",
    points: [
      "Inverter PCB Circuit Board Diagnostics",
      "Leak Isolation & Certified Gas Charging",
      "Condenser Fan & Coil Chemical Cleaning",
    ],
    image1: "/images/services/ac-1.png",
    image2: "/images/services/ac-2.png",
    image1Label: "Split Unit Service",
    image2Label: "Compressor Overhaul",
  },
  {
    id: "02",
    title: "Commercial Chiller & Industrial Freezer",
    tagline: "Critical Cold-Chain & Plant Refrigeration",
    description:
      "Specialized emergency repair for heavy industrial screw, scroll, and brine chillers. Built for commercial facilities that cannot afford downtime, we ensure stable sub-zero operations and uninterrupted cooling capacity.",
    points: [
      "Industrial Screw & Scroll Overhauls",
      "Oil Contamination & Pressure Tuning",
      "Walk-In Freezer Thermal Calibration",
    ],
    image1: "/images/services/chiller-1.png",
    image2: "/images/services/chiller-2.png",
    image1Label: "Central Chiller Plant",
    image2Label: "Freezer Calibration",
  },
  {
    id: "03",
    title: "Refrigerator & Deep Freezer Service",
    tagline: "Display Chillers, Deep Freezers & Domestic Units",
    description:
      "Precision repairs for commercial supermarket refrigerators, beverage chillers, and domestic double-door cooling systems. We resolve cooling drop-offs, faulty defrost timers, thermostat failures, and seal leaks.",
    points: [
      "Digital Thermostat & Sensor Balancing",
      "Compressor Relay & Motor Replacements",
      "Defrost Element & Airflow Restoration",
    ],
    image1: "/images/services/fridge-1.png",
    image2: "/images/services/fridge-2.png",
    image1Label: "Commercial Refrigerator",
    image2Label: "Thermostat & Motor",
  },
  {
    id: "04",
    title: "Washing Machine & Laundry Systems",
    tagline: "Commercial Laundromat & Domestic Automatic Units",
    description:
      "Expert mechanical and digital repair for front-load, top-load, and high-capacity commercial washers. We resolve severe drum vibration, motor drive failure, drainage blockage, and electronic board malfunction.",
    points: [
      "Heavy-Duty Drum Bearing Replacements",
      "Inverter Direct-Drive Motor Repair",
      "Drain Pump & Suspension Strut Tuning",
    ],
    image1: "/images/services/washer-1.png",
    image2: "/images/services/washer-2.png",
    image1Label: "Drum & Mechanical Core",
    image2Label: "PCB Control Repair",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#f8fafc] text-[#0f172a] overflow-hidden"
    >
      <div className="w-full max-w-[1600px] mx-auto">
        
        {/* ================= SECTION TITLE ================= */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-3 h-3 bg-[#ea580c]" />
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#ea580c] font-bold">
              02 / CORE SERVICES
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-[#0f172a]"
            >
              TECHNICAL REPAIR <br />
              <span className="text-slate-400 font-extrabold">&amp; OVERHAUL SERVICES.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed"
            >
              Engineered troubleshooting and repairs for cooling and mechanical appliances. No temporary fixes—every job is restored to factory operating standard.
            </motion.p>
          </div>

          {/* Animated Header Drawing Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="w-full h-[2px] bg-[#0f172a]"
          />
        </div>

        {/* ================= QUICK SERVICE OVERVIEW BAR ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {SERVICES_DATA.map((srv, idx) => (
            <motion.a
              key={srv.id}
              href={`#service-${srv.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 sm:p-6 bg-white border-2 border-slate-300 hover:border-[#ea580c] transition-all group block"
            >
              <span className="text-2xl sm:text-3xl font-mono font-black text-slate-300 group-hover:text-[#ea580c] transition-colors block mb-2">
                {srv.id}
              </span>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0f172a] group-hover:text-[#ea580c] transition-colors line-clamp-1">
                {srv.title}
              </h3>
            </motion.a>
          ))}
        </div>

        {/* ================= DETAILED SERVICE SHOWCASES ================= */}
        <div className="space-y-24 sm:space-y-36">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="scroll-mt-32"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                    isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* TEXT CONTENT COLUMN */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      isEven ? "lg:col-start-8" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl sm:text-4xl font-mono font-black text-[#ea580c]">
                        {service.id}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-slate-400">
                        // {service.tagline}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] uppercase tracking-tight mb-6 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-3 mb-8 pb-8 border-b border-slate-200">
                      {service.points.map((pt, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#0f172a]">
                          <span className="w-2 h-2 bg-[#ea580c] rounded-xs" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button: DIRECT CALL LINK */}
                    <div className="w-fit">
                      <a
                        href="tel:+60173027306"
                        className="group inline-flex items-center gap-3 bg-[#0f172a] hover:bg-[#ea580c] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300"
                      >
                        <span>Book {service.title.split(" ")[0]} Repair</span>
                        <span className="transform transition-transform group-hover:translate-x-1 font-mono">
                          →
                        </span>
                      </a>
                    </div>
                  </motion.div>

                  {/* IMAGE COLUMN: 1 FULL-WIDTH PHOTO ON MOBILE, 2 PHOTOS ON DESKTOP */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-7 ${
                      isEven ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-[240px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[480px]">
                      
                      {/* Image 1: Full-width on mobile (col-span-1), 7 cols on desktop */}
                      <div className="col-span-1 lg:col-span-7 h-full bg-slate-200 border-2 border-[#0f172a] relative overflow-hidden group">
                        <img
                          src={service.image1}
                          alt={service.image1Label}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent opacity-80" />
                        <span className="absolute bottom-3 left-3 text-white text-xs font-bold uppercase tracking-wider font-mono">
                          {service.image1Label}
                        </span>
                      </div>

                      {/* Image 2: HIDDEN on mobile (hidden lg:block), visible only on desktop */}
                      <div className="hidden lg:block lg:col-span-5 h-full bg-slate-200 border-2 border-[#0f172a] relative overflow-hidden group">
                        <img
                          src={service.image2}
                          alt={service.image2Label}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent opacity-80" />
                        <span className="absolute bottom-3 left-3 text-white text-xs font-bold uppercase tracking-wider font-mono">
                          {service.image2Label}
                        </span>
                      </div>

                    </div>
                  </motion.div>
                </div>

                {/* Animated Divider Line Between Service Blocks */}
                {index < SERVICES_DATA.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ originX: 0 }}
                    className="w-full h-[1px] bg-slate-300 mt-24 sm:mt-36"
                  />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}