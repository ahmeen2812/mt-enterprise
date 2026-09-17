"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "Commercial Chiller & Industrial Freezer",
    urgency: "Emergency Dispatch (< 2 Hours)",
    details: "",
    location: "Kuala Lumpur Area",
  });

  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SUBMITTING");

    try {
      const res = await fetch("https://formspree.io/f/moevakvn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `[KL URGENT DISPATCH] ${formData.service} - ${formData.fullName}`,
        }),
      });

      if (res.ok) {
        setStatus("SUCCESS");
        setShowNotification(true);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          service: "Commercial Chiller & Industrial Freezer",
          urgency: "Emergency Dispatch (< 2 Hours)",
          details: "",
          location: "Kuala Lumpur Area",
        });

        // Auto-dismiss notification after 7 seconds
        setTimeout(() => {
          setShowNotification(false);
          setStatus("IDLE");
        }, 7000);
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#f8fafc] text-[#0f172a] overflow-hidden border-t-2 border-[#0f172a]"
    >
      {/* ================= TRANSMISSION NOTIFICATION TOAST ================= */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -40, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-24 right-4 sm:right-8 z-50 max-w-md w-[calc(100%-2rem)] sm:w-auto bg-[#0f172a] text-white p-6 shadow-2xl border-l-4 border-[#ea580c]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-base shrink-0">
                  ✓
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#ea580c] font-bold block">
                    TRANSMISSION VERIFIED // KL DISPATCH DESK
                  </span>
                  <h4 className="text-sm font-bold uppercase tracking-tight text-white mt-0.5">
                    Service Ticket Dispatched Successfully
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Notification delivered to our lead engineer. A field technician will contact you via Phone/WhatsApp within minutes.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="text-slate-400 hover:text-white text-xs font-mono"
              >
                [✕]
              </button>
            </div>
            {/* Countdown Shrink Bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 7, ease: "linear" }}
              style={{ originX: 0 }}
              className="h-[2px] bg-[#ea580c] w-full mt-4"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-[1600px] mx-auto">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
           
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase text-[#0f172a] leading-[0.9]"
            >
              FIELD DISPATCH. <br />
              <span className="text-slate-400 font-extrabold">&amp; CONTACT DESK.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed"
            >
              Serving Greater Kuala Lumpur &amp; surrounding commercial sectors. Reach our certified technical crew immediately for rapid emergency repairs.
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

        {/* ================= 2-COLUMN BALANCED CONTACT INTERACTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">
          
          {/* LEFT COLUMN: Channels & KL Location Metadata (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            {/* KUALA LUMPUR REGIONAL HUB CARD */}
            <div className="bg-white border-2 border-[#0f172a] p-6 sm:p-8 relative">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#ea580c] animate-ping" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0f172a]">
                    Active Operations Hub
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  3.1390° N, 101.6869° E
                </span>
              </div>

              <h4 className="text-2xl font-black uppercase text-[#0f172a] tracking-tight mb-2">
                Kuala Lumpur, Malaysia
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Direct dispatch covering Kuala Lumpur Central, Petaling Jaya, Shah Alam, Cheras, Kepong, Subang Jaya, and surrounding industrial logistics hubs.
              </p>

              {/* Coverage Micro Tags */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono font-bold">
                {["KL Central", "Petaling Jaya", "Shah Alam", "Subang Jaya", "Cheras", "Klang Valley"].map(
                  (zone) => (
                    <div key={zone} className="px-2.5 py-1.5 bg-slate-100 text-[#0f172a] text-center">
                      {zone}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* CHANNEL 1: WHATSAPP DIRECT ACTION */}
            <a
              href="https://wa.me/60173027306?text=Hello%20MT%20Enterprise,%20I%20need%20urgent%20service%20in%20Kuala%20Lumpur."
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 bg-white border-2 border-[#0f172a] hover:border-[#ea580c] transition-all duration-300 block relative"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                    WA
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 block">
                      WhatsApp Dispatch (KL)
                    </span>
                    <span className="text-xs text-slate-500">Fast Technical Response</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-0.5">
                  Available
                </span>
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0f172a] group-hover:text-[#ea580c] transition-colors font-mono">
                  +60 17-302 7306
                </span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-[#ea580c] transform transition-transform group-hover:translate-x-1">
                  Chat Now →
                </span>
              </div>
              <span className="absolute top-0 left-0 w-0 h-[3px] bg-emerald-600 transition-all duration-300 group-hover:w-full" />
            </a>

            {/* CHANNEL 2: PHONE CALL */}
            <a
              href="tel:+60173027306"
              className="group p-6 sm:p-8 bg-white border-2 border-[#0f172a] hover:border-[#ea580c] transition-all duration-300 block relative"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0f172a] text-[#ea580c] flex items-center justify-center font-bold text-sm font-mono">
                    TEL
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] block">
                      Emergency Hotline
                    </span>
                    <span className="text-xs text-slate-500">Instant Phone Call</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#0f172a] uppercase tracking-widest bg-slate-100 px-2 py-0.5">
                  Malaysia
                </span>
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0f172a] group-hover:text-[#ea580c] transition-colors font-mono">
                  +60 17-302 7306
                </span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-[#ea580c] transform transition-transform group-hover:translate-x-1">
                  Dial Call →
                </span>
              </div>
              <span className="absolute top-0 left-0 w-0 h-[3px] bg-[#ea580c] transition-all duration-300 group-hover:w-full" />
            </a>

            {/* CHANNEL 3: EMAIL */}
            <a
              href="mailto:aisulamin32@gmail.com"
              className="group p-6 sm:p-8 bg-white border-2 border-[#0f172a] hover:border-[#ea580c] transition-all duration-300 block relative"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ea580c] text-white flex items-center justify-center font-bold text-sm font-mono">
                    MAIL
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0f172a] block">
                      Direct Inquiries
                    </span>
                    <span className="text-xs text-slate-500">Commercial Work Orders</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-0.5">
                  Direct Mail
                </span>
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-[#0f172a] group-hover:text-[#ea580c] transition-colors font-mono break-all">
                  aisulamin32@gmail.com
                </span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-[#ea580c] transform transition-transform group-hover:translate-x-1">
                  Send Email →
                </span>
              </div>
              <span className="absolute top-0 left-0 w-0 h-[3px] bg-[#0f172a] transition-all duration-300 group-hover:w-full" />
            </a>

          </motion.div>

          {/* RIGHT COLUMN: Production Dispatch Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white border-2 border-[#0f172a] p-8 sm:p-12 relative"
          >
            <div className="mb-8 pb-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#ea580c] font-bold block">
                  KL DISPATCH WORK ORDER
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-[#0f172a]">
                  Request On-Site Inspection
                </h3>
              </div>
              <span className="text-xs font-mono text-[#ea580c] font-bold">
                AREA: KUALA LUMPUR
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold text-[#0f172a] tracking-wider mb-2">
                    Client / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    placeholder="e.g. Mr. S. Al-Amin"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-[#f8fafc] border-2 border-slate-300 text-xs font-medium text-[#0f172a] focus:outline-none focus:border-[#ea580c] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-[#0f172a] tracking-wider mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    placeholder="e.g. +60 17-XXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-[#f8fafc] border-2 border-slate-300 text-xs font-medium text-[#0f172a] focus:outline-none focus:border-[#ea580c] transition-colors font-mono"
                  />
                </div>
              </div>

              {/* Row 2: Email & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold text-[#0f172a] tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="e.g. name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-[#f8fafc] border-2 border-slate-300 text-xs font-medium text-[#0f172a] focus:outline-none focus:border-[#ea580c] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-[#0f172a] tracking-wider mb-2">
                    Equipment / Service Type *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-[#f8fafc] border-2 border-slate-300 text-xs font-bold text-[#0f172a] focus:outline-none focus:border-[#ea580c] transition-colors"
                  >
                    <option value="Commercial Chiller & Industrial Freezer">
                      Commercial Chiller &amp; Industrial Freezer
                    </option>
                    <option value="Air Conditioning Repair & Overhaul">
                      Air Conditioning Repair &amp; Overhaul
                    </option>
                    <option value="Commercial Refrigerator Service">
                      Commercial Refrigerator Service
                    </option>
                    <option value="Washing Machine & Laundry Systems">
                      Washing Machine &amp; Laundry Systems
                    </option>
                    <option value="Other Emergency Diagnostics">
                      Other Emergency Diagnostics
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 3: Service Priority */}
              <div>
                <label className="block text-xs uppercase font-bold text-[#0f172a] tracking-wider mb-2">
                  Dispatch Priority *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    "Emergency (< 2 Hours)",
                    "Same-Day Priority",
                    "Scheduled Inspection",
                  ].map((priority) => (
                    <button
                      type="button"
                      key={priority}
                      onClick={() => setFormData((prev) => ({ ...prev, urgency: priority }))}
                      className={`px-4 py-3 text-xs font-bold uppercase tracking-wider border-2 transition-all ${
                        formData.urgency === priority
                          ? "bg-[#0f172a] text-white border-[#0f172a]"
                          : "bg-[#f8fafc] text-slate-600 border-slate-300 hover:border-[#ea580c]"
                      }`}
                    >
                      {priority}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Machine Issue Details */}
              <div>
                <label className="block text-xs uppercase font-bold text-[#0f172a] tracking-wider mb-2">
                  Machine Failure Symptoms &amp; Address in KL *
                </label>
                <textarea
                  required
                  name="details"
                  rows={4}
                  placeholder="State your area in Kuala Lumpur (e.g. Cheras, Petaling Jaya, KL Centre), error codes, pressure drops, or strange sounds..."
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-[#f8fafc] border-2 border-slate-300 text-xs font-medium text-[#0f172a] focus:outline-none focus:border-[#ea580c] transition-colors"
                />
              </div>

              {/* Error Alert Fallback */}
              {status === "ERROR" && (
                <div className="p-4 bg-rose-50 border-2 border-rose-600 text-rose-900 text-xs font-bold uppercase tracking-wider">
                  ✕ Transmission error. Please contact directly on WhatsApp or Call at +60 17-302 7306.
                </div>
              )}

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <span className="text-[11px] font-mono text-slate-400 uppercase">
                  Direct Post to Formspree Endpoint
                </span>

                <button
                  type="submit"
                  disabled={status === "SUBMITTING"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ea580c] hover:bg-[#c2410c] text-white px-10 py-5 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm disabled:opacity-50"
                >
                  <span>{status === "SUBMITTING" ? "Transmitting..." : "Send Dispatch Request"}</span>
                  <span className="font-mono text-sm">→</span>
                </button>
              </div>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}