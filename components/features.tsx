import { DollarSign, Paintbrush, Truck, Headphones } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Best Price Guaranteed",
    description: "We work directly with manufacturers so you get the lowest prices — no middleman markup, no compromises on quality.",
    gradient: "from-blue-500 to-blue-700",
    shadow: "shadow-blue-200",
  },
  {
    icon: Paintbrush,
    title: "Custom Branding",
    description: "Labels and receipts featuring your pharmacy's logo, name, and contact info. IDA, Guardian, and Pharmasave branding available.",
    gradient: "from-sky-400 to-blue-600",
    shadow: "shadow-sky-200",
  },
  {
    icon: Truck,
    title: "Fast Ontario-Wide Delivery",
    description: "Dependable shipping across Ontario. Most orders ship within 24 hours and arrive in 48 hours.",
    gradient: "from-blue-600 to-indigo-700",
    shadow: "shadow-indigo-200",
  },
  {
    icon: Headphones,
    title: "Free Tech Support",
    description: "Remote printer setup, troubleshooting, and ongoing help included at no extra cost — for every order.",
    gradient: "from-indigo-500 to-blue-600",
    shadow: "shadow-blue-200",
  },
]

export function Features() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left sticky header */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-0.5 w-6 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Why Pharmabest</p>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl text-balance leading-[1.06]">
              Everything your pharmacy needs,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                all in one place
              </span>
            </h2>
            <p className="mt-5 text-base text-slate-500 font-medium leading-relaxed max-w-md">
              Premium quality labels and rolls, easy-peel no residue, trusted by pharmacies across Ontario.
            </p>
            {/* Branded strip */}
            <div className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl px-5 py-3">
              <span className="text-xs font-bold text-white/80 uppercase tracking-widest">Available for</span>
              <div className="flex items-center gap-2">
                {["IDA", "Guardian", "Pharmasave"].map((brand) => (
                  <span key={brand} className="bg-white/15 rounded-lg px-2.5 py-1 text-[11px] font-extrabold text-white tracking-wide">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: feature cards */}
          <div className="flex flex-col gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex items-start gap-5 rounded-2xl border border-slate-100 bg-white p-6 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/80 transition-all duration-300"
              >
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-md ${feature.shadow} group-hover:scale-105 transition-transform duration-200`}>
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1.5 tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
