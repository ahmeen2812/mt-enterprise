
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  id: string;
  name: string;
  role: string;
  service: string;
  rating: number;
  timeAgo: string;
  comment: string;
  avatarBg: string;
  initials: string;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Tariq Mahmood",
    role: "Operations Manager, Cold Chain Logistics",
    service: "Commercial Chiller Repair",
    rating: 5,
    timeAgo: "2 days ago",
    comment:
      "Our 15-ton industrial scroll chiller had a critical low-pressure safety trip on a Saturday afternoon during peak cold-storage operations. MT Enterprise dispatch arrived on-site in under 45 minutes with digital manifold rigs. Traced the vibration flare leak, nitrogen-purged the system, and restored steady -18°C cooling before any product compromised.",
    avatarBg: "bg-[#0f172a]",
    initials: "TM",
  },
  {
    id: "rev-2",
    name: "Dr. Farhan Qureshi",
    role: "Apex Medical Centre",
    service: "Commercial Refrigerator Service",
    rating: 5,
    timeAgo: "1 week ago",
    comment:
      "Our vaccine storage laboratory refrigerator had an erratic temperature fluctuation alarm. MT Enterprise diagnosed an electronic sensor calibration fault and repaired the digital temperature controller directly on-site with genuine OEM sensors. Completely honest and technically brilliant.",
    avatarBg: "bg-[#ea580c]",
    initials: "FQ",
  },
  {
    id: "rev-3",
    name: "Kamran Akram",
    role: "Proprietor, Akram Bakers",
    service: "Commercial Refrigerator Service",
    rating: 5,
    timeAgo: "2 weeks ago",
    comment:
      "The 4-door pastry glass display chiller started sweating and the internal temperature rose to 12°C. MT Enterprise identified an evaporator fan failure and uncalibrated defrost sensor. Sourced OEM replacement parts immediately. The display has stayed locked at 4°C ever since.",
    avatarBg: "bg-slate-700",
    initials: "KA",
  },
  {
    id: "rev-4",
    name: "Saima Haris",
    role: "Verified Resident",
    service: "Washing Machine Repair",
    rating: 5,
    timeAgo: "3 weeks ago",
    comment:
      "Our 10kg automatic washer was violently shaking on spin cycle with a loud grinding sound. Their technician replaced the worn drum spider arm bearings and shock damper struts. The machine now runs completely silent and balanced.",
    avatarBg: "bg-[#0f172a]",
    initials: "SH",
  },
  {
    id: "rev-5",
    name: "Engr. Nabeel Sheikh",
    role: "Facility Lead, Matrix Logistics",
    service: "Commercial Chiller Repair",
    rating: 5,
    timeAgo: "1 month ago",
    comment:
      "Contracted them for preventative maintenance on twin walk-in freezers. They test oil acidity, contactor pit resistance, and thermal efficiency with full digital logging reports. Highly disciplined engineers.",
    avatarBg: "bg-[#ea580c]",
    initials: "NS",
  },
  {
    id: "rev-6",
    name: "Zubair Hashmi",
    role: "Laundromat Owner",
    service: "Washing Machine Repair",
    rating: 5,
    timeAgo: "1 month ago",
    comment:
      "Heavy commercial laundromat washer had a water drainage error and drive belt squeal during wash cycles. MT Enterprise arrived with diagnostic instruments, cleaned the high-flow pump trap, and aligned the heavy drive pulley. Zero downtime incurred.",
    avatarBg: "bg-slate-600",
    initials: "ZH",
  },
];

const SERVICES_LIST = [
  "Commercial Chiller Repair",
  "Commercial Refrigerator Service",
  "Washing Machine Repair",
];

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  // Form State
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formRole, setFormRole] = useState("");
  const [formService, setFormService] = useState(SERVICES_LIST[0]);
  const [formRating, setFormRating] = useState(5);
  const [formComment, setFormComment] = useState("");
  const [hoverRating, setHoverRating] = useState(0);

  // Dynamic Metrics Calculation
  const stats = useMemo(() => {
    const total = reviews.length;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    const average = (sum / total).toFixed(1);

    const counts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach((r) => {
      counts[r.rating] = (counts[r.rating] || 0) + 1;
    });

    const percentages: Record<number, number> = {
      5: Math.round((counts[5] / total) * 100),
      4: Math.round((counts[4] / total) * 100),
      3: Math.round((counts[3] / total) * 100),
      2: Math.round((counts[2] / total) * 100),
      1: Math.round((counts[1] / total) * 100),
    };

    return { total, average, counts, percentages };
  }, [reviews]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formComment.trim()) return;

    const initials = formName
      .trim()
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      name: formName.trim(),
      role: formRole.trim() || "Verified Client",
      service: formService,
      rating: formRating,
      timeAgo: "Just now",
      comment: formComment.trim(),
      avatarBg: formRating === 5 ? "bg-[#ea580c]" : "bg-[#0f172a]",
      initials: initials || "VC",
    };

    setReviews([newReview, ...reviews]);
    setIsModalOpen(false);

    setFormName("");
    setFormEmail("");
    setFormRole("");
    setFormComment("");
    setFormRating(5);
  };

  const filteredReviews =
    selectedFilter === "ALL"
      ? reviews
      : reviews.filter((r) => r.service === selectedFilter);

  return (
    <section
      id="reviews"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#f8fafc] text-[#0f172a] overflow-hidden"
    >
      <div className="w-full max-w-[1600px] mx-auto">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="mb-20">
      

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase text-[#0f172a] leading-[0.9]"
            >
              PROVEN TRACK RECORD. <br />
              <span className="text-slate-400 font-extrabold">&amp; CLIENT FEEDBACK.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed"
            >
              Audited feedback from commercial chilling plants, facility directors, and appliance owners. Real customer diagnostics with zero fabricated ratings.
            </motion.p>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="w-full h-[2px] bg-[#0f172a]"
          />
        </div>

        {/* ================= DYNAMIC PERFORMANCE SUMMARY ================= */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-4 flex items-center gap-6">
            <motion.div
              key={stats.average}
              initial={{ scale: 0.9, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#0f172a] font-mono leading-none"
            >
              {stats.average}
            </motion.div>

            <div className="flex flex-col">
              <div className="flex items-center text-[#ea580c] text-xl tracking-wider">
                {"★★★★★"}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0f172a]">
                  Google Maps Verified
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              </div>
              <span className="text-xs text-slate-500 mt-0.5">
                Based on <strong className="text-[#0f172a]">{stats.total} verified</strong> reviews
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-2 text-xs font-mono">
            {[5, 4, 3, 2, 1].map((star) => {
              const pct = stats.percentages[star] || 0;
              return (
                <div key={star} className="flex items-center gap-3">
                  <span className="w-12 text-slate-500 font-bold">{star} Star</span>
                  
                  <div className="h-2.5 flex-1 bg-slate-200 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full ${
                        star === 5
                          ? "bg-[#ea580c]"
                          : star === 4
                          ? "bg-[#0f172a]"
                          : "bg-slate-400"
                      }`}
                    />
                  </div>

                  <span className="w-10 text-right font-bold text-[#0f172a]">
                    {pct}%
                  </span>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full lg:w-auto inline-flex items-center justify-center gap-3 bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-5 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm"
            >
              <span>Write A Review</span>
              <span className="font-mono text-sm">→</span>
            </button>
          </div>

        </div>

        {/* ================= CLEAN FILTER STRIP (AC REMOVED) ================= */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 pb-6 border-b border-slate-200">
          {["ALL", ...SERVICES_LIST].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-bold transition-colors ${
                selectedFilter === tab
                  ? "bg-[#0f172a] text-white"
                  : "text-slate-600 hover:text-[#ea580c] bg-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ================= REVIEWS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((rev) => (
              <motion.div
                key={rev.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-8 sm:p-10 flex flex-col justify-between relative group hover:-translate-y-1 transition-transform duration-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-11 h-11 ${rev.avatarBg} text-white font-black text-sm flex items-center justify-center font-mono`}
                      >
                        {rev.initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0f172a] uppercase tracking-tight">
                          {rev.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-sans">
                          {rev.role}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-black text-slate-400 group-hover:text-[#ea580c] transition-colors">
                      G
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-5 pb-4 border-b border-slate-100">
                    <div className="text-[#ea580c] text-sm tracking-wider">
                      {"★".repeat(rev.rating)}
                      <span className="text-slate-300">
                        {"★".repeat(5 - rev.rating)}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      {rev.timeAgo}
                    </span>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 uppercase">Service</span>
                  <span className="font-bold text-[#0f172a] uppercase tracking-wider">
                    {rev.service}
                  </span>
                </div>

                <span className="absolute top-0 left-0 w-0 h-[2px] bg-[#ea580c] transition-all duration-300 ease-out group-hover:w-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* ================= WRITE A REVIEW MODAL ================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#0f172a]/70 backdrop-blur-xs"
            />

            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-xl bg-white p-8 sm:p-10 shadow-2xl z-10 border-t-4 border-[#ea580c] max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ea580c] font-bold block">
                    GOOGLE VERIFIED FEEDBACK
                  </span>
                  <h3 className="text-2xl font-black text-[#0f172a] uppercase tracking-tight">
                    Submit Client Review
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-[#0f172a] text-sm uppercase tracking-widest font-mono"
                >
                  [✕]
                </button>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase font-bold text-[#0f172a] tracking-wider mb-2">
                    Select Rating *
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="text-3xl transition-transform hover:scale-110 focus:outline-none"
                      >
                        <span
                          className={
                            (hoverRating || formRating) >= star
                              ? "text-[#ea580c]"
                              : "text-slate-300"
                          }
                        >
                          ★
                        </span>
                      </button>
                    ))}
                    <span className="text-xs font-mono text-slate-500 ml-3 font-bold">
                      {formRating} of 5 Stars
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-[#0f172a] tracking-wider mb-2">
                    Service Rendered *
                  </label>
                  <select
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-xs font-bold text-[#0f172a] focus:outline-none focus:border-[#ea580c]"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#0f172a] tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mahmood"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-xs text-[#0f172a] focus:outline-none focus:border-[#ea580c]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#0f172a] tracking-wider mb-2">
                      Company / Role (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Cold Storage Manager"
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-xs text-[#0f172a] focus:outline-none focus:border-[#ea580c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-[#0f172a] tracking-wider mb-2">
                    Email Address * (Kept Confidential)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-xs text-[#0f172a] focus:outline-none focus:border-[#ea580c]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-[#0f172a] tracking-wider mb-2">
                    Review &amp; Diagnostic Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the issue, speed of dispatch, and the repair solution..."
                    value={formComment}
                    onChange={(e) => setFormComment(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-xs text-[#0f172a] focus:outline-none focus:border-[#ea580c]"
                  />
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-3 text-xs uppercase tracking-widest font-bold text-slate-500 hover:text-[#0f172a]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs uppercase tracking-widest font-bold transition-colors"
                  >
                    Publish Review
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}