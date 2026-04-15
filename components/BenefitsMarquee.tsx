const benefits = [
  "Best Prices Guaranteed",
  "Free Lifetime Tech Support",
  "Expedited Ontario Delivery",
  "20% More Product Per Box",
  "Expert Custom Branding",
  "Free Printer Program",
  "Trusted by 70+ Locations",
];

export default function BenefitsMarquee() {
  const items = [...benefits, ...benefits, ...benefits];

  return (
    <section className="bg-slate-900 text-white py-6 overflow-hidden border-y border-white/5 shadow-inner">
      <div className="marquee-track marquee-slow">
        {items.map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-10 px-10 text-[13px] font-black uppercase tracking-[0.2em] whitespace-nowrap"
          >
            <span className="opacity-80 group-hover:opacity-100 transition-opacity">{b}</span>
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          </div>
        ))}
      </div>
    </section>
  );
}
