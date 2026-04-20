import { Package, ShieldCheck, Zap, Scissors } from "lucide-react";

const features = [
  {
    title: "Easy-Remove Labels",
    description:
      "Our thermal labels peel cleanly with no residue — designed specifically for prescription bottles and pharmacy packaging.",
    icon: <Scissors className="w-6 h-6" />,
  },
  {
    title: "Wholesale & Custom Orders",
    description:
      "Volume pricing for high-quantity orders, plus fully custom-branded labels and receipts built to your specifications.",
    icon: <Package className="w-6 h-6" />,
  },
  {
    title: "Highest Quality Products",
    description:
      "Premium-grade pharmacy supplies, selected for consistent quality and dependable everyday performance.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Fast Delivery Ontario-Wide",
    description:
      "Most orders ship within 24 hours and arrive in 48 hours. Serving independent pharmacies and multi-location chains across Ontario.",
    icon: <Zap className="w-6 h-6" />,
  },
];

const stats = [
  { value: "100+", label: "Ontario pharmacies trust Pharmabest Supplies" },
  { value: "24h", label: "Most orders ship within 24 hours" },
  { value: "20%", label: "More product per box than competitors" },
];

export default function WhyUs() {
  return (
    <section id="about" className="relative bg-[#3B6FE6] text-white py-24 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-indigo-500/10 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:sticky lg:top-32 lg:w-1/3">
            <div className="section-label !text-white mb-6">Why Pharmabest Supplies</div>
            <h2 className="!text-white mb-6 !leading-tight">
              Everything your pharmacy needs, <span className="text-white">all in one place</span>
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Based in Toronto, we specialize in high-performance thermal supplies engineered
              specifically for the demanding workflows of Ontario's leading pharmacies.
            </p>
            <div className="flex flex-col gap-8 pt-8 border-t border-white/20">
              {stats.map((s) => (
                <div key={s.value} className="flex items-center gap-6">
                  <div className="text-4xl font-black text-white w-24 shrink-0">{s.value}</div>
                  <p className="text-white/85 text-sm font-bold leading-tight max-w-[160px]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/15 text-white flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="!text-white text-xl font-bold mb-4 leading-tight">
                  {f.title}
                </h3>
                <p className="text-white/85 text-base leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
