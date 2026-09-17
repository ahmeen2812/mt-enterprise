const services = [
  { id: "01", title: "AC REPAIR", desc: "Full system diagnostics and maintenance." },
  { id: "02", title: "REFRIGERATION SERVICE", desc: "Domestic and industrial cooling units." },
  { id: "03", title: "COMMERCIAL CHILLER & FREEZER", desc: "Critical cooling systems." },
  { id: "04", title: "WASHING MACHINE REPAIR", desc: "Expert motor and circuit troubleshooting." },
];

export default function Services() {
  return (
    <section className="py-20">
      <h2 className="text-sm font-bold uppercase tracking-widest mb-12 text-zinc-500">Our Expertise</h2>
      
      <div className="flex flex-col">
        {services.map((service) => (
          <div key={service.id} className="border-b-[var(--border-weight)] border-[var(--accent-color)] py-8 flex items-center justify-between hover:bg-zinc-100 transition-colors">
            <div className="flex items-center gap-12">
              <span className="text-sm font-mono">{service.id}</span>
              <div>
                <h3 className="text-3xl font-bold">{service.title}</h3>
                <p className="text-zinc-600 mt-1">{service.desc}</p>
              </div>
            </div>
            <span className="text-2xl font-light">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}