import { TrendingDown, Recycle, DollarSign, Printer, ArrowRight } from "lucide-react";

const points = [
  {
    title: "Cut Printing Costs by ~40% Per Year",
    description:
      "Switching from laser to thermal printing reduces annual printing expenses by approximately 40%, saving pharmacies thousands of dollars every year.",
    icon: <TrendingDown className="w-6 h-6" />,
  },
  {
    title: "No Diffusers. No Ink. No Waste.",
    description:
      "Thermal printing eliminates the ongoing costs that make laser expensive — no diffuser replacements, no ink cartridges, and no wasted label sheets. Print only what you need, every time.",
    icon: <Recycle className="w-6 h-6" />,
  },
  {
    title: "A Fraction of the Cost of Laser",
    description:
      "Laser printers cost thousands of dollars to buy and even more to maintain. Thermal printers are proven reliable, far cheaper to acquire, and significantly cheaper to run over their lifetime.",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    title: "Print Only What You Need",
    description:
      "Thermal printing produces labels on demand with zero waste — one prescription, one label. No partial sheets, no discarded stock.",
    icon: <Printer className="w-6 h-6" />,
  },
];

export default function WhyThermal() {
  return (
    <section id="why-thermal" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="section-label mb-4">Thermal vs. Laser</div>
          <h2 className="mb-4 text-slate-900">Why Thermal Printing</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            A smarter, leaner print setup for today&apos;s pharmacy — lower costs, less waste,
            and dependable performance on every prescription.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {points.map((p, i) => (
            <article
              key={p.title}
              className="relative bg-slate-50 rounded-[32px] p-8 lg:p-10 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
            >
              <div className="absolute top-8 right-8 text-[11px] font-black text-blue-600/40 tracking-widest">
                0{i + 1}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-600/20">
                {p.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 leading-tight">
                {p.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {p.description}
              </p>
            </article>
          ))}
        </div>

        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-[#3B6FE6] to-blue-700 text-white p-10 lg:p-14">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-400/20 blur-[120px] rounded-full -translate-y-1/4 translate-x-1/4" />
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-[11px] font-black uppercase tracking-widest text-blue-200 mb-4">
                Make the switch
              </div>
              <h3 className="!text-white text-2xl lg:text-3xl font-black leading-tight mb-3">
                Still using laser? Switch to thermal.
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Save your business. Save on expenses.{" "}
                <span className="font-bold text-white">
                  Get a free thermal printer with minimum order — order today.
                </span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="#custom"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white text-blue-700 font-black text-[14px] uppercase tracking-wider hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95 shadow-xl"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 text-white font-black text-[14px] uppercase tracking-wider hover:bg-white/20 transition-all border border-white/20"
              >
                Shop Printers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
