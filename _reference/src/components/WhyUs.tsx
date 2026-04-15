const features = [
  {
    title: "Wholesale & Custom Orders",
    description:
      "Volume pricing for high-quantity orders, plus fully custom-branded labels and receipts built to your specifications.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    ),
  },
  {
    title: "Highest Quality Products",
    description:
      "High-sensitivity thermal paper and high-adhesion labels — carefully sourced for reliability and long-lasting print quality.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Easy-Remove Labels",
    description:
      "Our thermal labels peel cleanly with no residue — designed specifically for prescription bottles and pharmacy packaging.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery Ontario-Wide",
    description:
      "Most orders ship within 24 hours and arrive in 48 hours. Serving independent pharmacies and multi-location chains across Ontario.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
];

const stats = [
  { value: "71+", label: "Ontario pharmacies trust Pharmabest" },
  { value: "24h", label: "Most orders ship within 24 hours" },
  { value: "20%", label: "More product per box than competitors" },
];

export default function WhyUs() {
  return (
    <section id="about" className="relative bg-[#1F1F1F] text-white py-24 lg:py-32 overflow-hidden">
      {/* Subtle green accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#00BA74]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 max-w-[780px] mx-auto">
          <p className="section-label text-[#00BA74] mb-4">
            Why Pharmabest Supplies
          </p>
          <h2 className="!text-white mb-5">
            Everything your pharmacy needs,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">all in one place</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#00BA74]/40 -z-0 rounded" />
            </span>
          </h2>
          <p className="text-white/70 text-[17px] leading-relaxed">
            Proudly based in Toronto, we specialize in thermal labels, thermal
            receipts, printers, and accessories for pharmacies across Ontario —
            with the best prices and fastest delivery in the province.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 border border-white/10 rounded-[20px] p-7 hover:bg-white/10 hover:border-[#00BA74]/40 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#00BA74]/20 text-[#00BA74] flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3 className="!text-white !text-[17px] !font-extrabold mb-2.5 leading-tight">
                {f.title}
              </h3>
              <p className="text-white/65 text-[14px] leading-relaxed font-normal">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/10">
          {stats.map((s) => (
            <div key={s.value} className="text-center md:text-left">
              <div className="text-[56px] font-black text-[#00BA74] leading-none mb-2">
                {s.value}
              </div>
              <p className="text-white/70 text-[14px] font-normal max-w-[240px] mx-auto md:mx-0">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
