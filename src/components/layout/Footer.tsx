"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f172a] text-white pt-24 pb-12 px-6 sm:px-10 lg:px-16 xl:px-20 border-t-4 border-[#ea580c] overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto">
        
        {/* ================= TOP INDUSTRIAL BANNER ================= */}
        <div className="pb-16 mb-16 border-b border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#ea580c] font-bold block mb-3">
              KUALA LUMPUR OPERATIONAL FIELD SERVICE
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              KEEPING CRITICAL CHILLERS, COLD ROOMS <br />
              <span className="text-slate-400">&amp; COMMERCIAL MACHINERY ONLINE.</span>
            </h3>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
            <a
              href="https://wa.me/60173027306"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all"
            >
              <span>Instant WhatsApp (+60)</span>
              <span className="font-mono">→</span>
            </a>
            <a
              href="tel:+60173027306"
              className="inline-flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all"
            >
              <span>Hotline: +60 17-302 7306</span>
            </a>
          </div>
        </div>

        {/* ================= MAIN 4-COLUMN ARCHITECTURE ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* COL 1: Brand & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
                <img 
  src="/images/logo.png" 
  alt="MT Enterprise Logo" 
  className="h-10 w-auto object-contain" 
/>
              <div className="flex flex-col">
                <span className="text-xl font-black uppercase tracking-tight text-white leading-none">
                  MT ENTERPRISE
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#ea580c] font-bold mt-1">
                  Cooling &amp; Repair Systems
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Certified technical contractor for heavy industrial chillers, commercial walk-in freezers, supermarket refrigeration, and laundry systems across Kuala Lumpur.
            </p>

            {/* Live Operational Status */}
            <div className="p-3.5 bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase text-slate-200">
                  KL Field Squad Status
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">
                Active &amp; Ready
              </span>
            </div>
          </div>

          {/* COL 2: Kuala Lumpur Coverage Matrix (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ea580c] font-bold block">
              Kuala Lumpur Coverage
            </span>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#ea580c]" />
                <span>Kuala Lumpur City Centre (KLCC)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#ea580c]" />
                <span>Petaling Jaya &amp; Damansara</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#ea580c]" />
                <span>Shah Alam Industrial Zone</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#ea580c]" />
                <span>Subang Jaya &amp; Sunway</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#ea580c]" />
                <span>Cheras &amp; Ampang Sectors</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#ea580c]" />
                <span>Greater Klang Valley Region</span>
              </li>
            </ul>
          </div>

          {/* COL 3: Specialized Capabilities (AC REMOVED) (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ea580c] font-bold block">
              Core Technical Units
            </span>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>• Industrial Screw &amp; Scroll Chillers</li>
              <li>• Cold Room &amp; Deep Freezer (-35°C)</li>
              <li>• Commercial Supermarket Display Chillers</li>
              <li>• Compressor Relay &amp; Sensor Calibration</li>
              <li>• Automatic Washing Machine Mechanics</li>
              <li>• Drum Bearings &amp; Industrial Laundromat Washers</li>
            </ul>
          </div>

          {/* COL 4: Direct Channels (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ea580c] font-bold block">
              Contact Channels
            </span>
            <div className="text-xs font-mono space-y-3">
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Malaysia Phone</span>
                <a href="tel:+60173027306" className="text-white hover:text-[#ea580c] font-bold text-sm">
                  +60 17-302 7306
                </a>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">WhatsApp Line</span>
                <a
                  href="https://wa.me/60173027306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-bold"
                >
                  +60 17-302 7306
                </a>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Official Email</span>
                <a href="mailto:aisulamin32@gmail.com" className="text-slate-300 hover:text-white break-all">
                  aisulamin32@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM TECHNICAL STRIP ================= */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} MT ENTERPRISE</span>
            <span>//</span>
            <span>REGIONAL HUB: KUALA LUMPUR, MALAYSIA</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">LAT 3.1390° N, LON 101.6869° E</span>
            <a href="#home" className="text-[#ea580c] hover:underline uppercase font-bold">
              Back To Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}