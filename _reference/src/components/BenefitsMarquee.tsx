const benefits = [
  "Best Prices Guaranteed",
  "Free Tech Support",
  "Fast Ontario Delivery",
  "20% More Per Box",
  "Custom Branding Available",
  "Free Printer with Initial Order",
];

export default function BenefitsMarquee() {
  // Duplicate list so the marquee loops seamlessly
  const items = [...benefits, ...benefits];

  return (
    <section className="bg-[#1F1F1F] text-white py-5 overflow-hidden border-y border-white/10">
      <div className="marquee-track">
        {items.map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-6 text-[14px] font-bold uppercase tracking-[0.15em] whitespace-nowrap"
          >
            <span>{b}</span>
            <span className="text-[#00BA74] text-lg">◆</span>
          </div>
        ))}
      </div>
    </section>
  );
}
