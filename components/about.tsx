import { ShieldCheck, Truck, Sparkles, Package } from "lucide-react"

const whyReasons = [
  {
    icon: Package,
    title: "Wholesale & Custom Orders",
    description: "Volume pricing for high-quantity orders, plus fully custom-branded labels and receipts built to your specifications.",
  },
  {
    icon: ShieldCheck,
    title: "Highest Quality Products",
    description: "High-sensitivity thermal paper and high-adhesion labels — carefully sourced for reliability and long-lasting print quality.",
  },
  {
    icon: Sparkles,
    title: "Easy-Remove Labels",
    description: "Our thermal labels peel cleanly with no residue — designed specifically for prescription bottles and pharmacy packaging.",
  },
  {
    icon: Truck,
    title: "Fast Delivery Ontario-Wide",
    description: "Most orders ship within 24 hours and arrive in 48 hours. Serving independent pharmacies and multi-location chains across Ontario.",
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-0.5 w-6 rounded-full bg-gradient-to-r from-sky-400 to-white/60" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Why Pharmabest Supplies</p>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-balance leading-[1.1]">
            Everything your pharmacy needs,{" "}
            <span className="bg-gradient-to-r from-sky-300 to-white bg-clip-text text-transparent">
              all in one place
            </span>
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
            Proudly based in Toronto, we specialize in thermal labels, thermal receipts, printers, and accessories for pharmacies across Ontario — with the best prices and fastest delivery in the province.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyReasons.map((reason, i) => (
            <div
              key={reason.title}
              className="group flex flex-col gap-5 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-7 hover:bg-white/15 hover:border-sky-300/40 hover:shadow-xl hover:shadow-black/20 transition-all duration-300"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${
                i === 0 ? "from-blue-500 to-blue-700" :
                i === 1 ? "from-sky-400 to-blue-600" :
                i === 2 ? "from-blue-600 to-indigo-700" :
                "from-indigo-500 to-blue-600"
              } shadow-lg ${
                i === 0 ? "shadow-blue-200" :
                i === 1 ? "shadow-sky-200" :
                i === 2 ? "shadow-indigo-200" :
                "shadow-blue-200"
              } group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
