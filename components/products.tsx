import { Tag, Receipt, Printer, Sparkles } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    title: "Plain Thermal Labels",
    description: "High-adhesion, durable thermal label rolls for prescription bottles, packages, and general pharmacy use. Available in multiple sizes.",
    icon: Tag,
    tag: null,
  },
  {
    title: "Plain Thermal Receipts",
    description: "Crystal-clear thermal receipt rolls that produce long-lasting transaction records. Compatible with all major POS systems.",
    icon: Receipt,
    tag: null,
  },
  {
    title: "Custom Thermal Labels",
    description: "Branded thermal labels printed with your pharmacy's logo, name, address, and phone number. Every prescription reflects your brand.",
    icon: Tag,
    tag: "Most Popular",
  },
  {
    title: "Custom Thermal Receipts",
    description: "Branded thermal receipt rolls featuring your logo and contact info on every transaction — a marketing touchpoint at no extra effort.",
    icon: Receipt,
    tag: "Most Popular",
  },
  {
    title: "Thermal Printers",
    description: "Fast, quiet, reliable thermal printers built for high-volume pharmacy environments. Includes free remote setup and ongoing support.",
    icon: Printer,
    tag: "Free setup",
  },
]

const customOrder = {
  title: "Request Custom Order",
  description: "Need a specific size, format, or branded design not listed? We specialize in custom solutions for any pharmacy requirement.",
  icon: Sparkles,
  tag: "We can help",
  cta: "Talk to us",
}

export function Products() {
  return (
    <section id="products" className="py-28 bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-0.5 w-6 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Our Products</p>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl text-balance leading-[1.06]">
            A complete lineup{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              for your pharmacy
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-500 font-medium leading-relaxed">
            IDA, Guardian, and Pharmasave thermal labels and thermal receipts available. Best price guaranteed.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <div
              key={product.title}
              className="group relative rounded-2xl bg-white border-2 border-slate-100 p-7 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 flex flex-col"
            >
              {product.tag && (
                <Badge
                  variant="secondary"
                  className="absolute top-5 right-5 bg-blue-50 text-blue-700 border border-blue-100 text-[11px] font-bold tracking-wide px-2.5 py-0.5"
                >
                  {product.tag}
                </Badge>
              )}

              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${
                i === 0 ? "from-blue-500 to-blue-700" :
                i === 1 ? "from-sky-400 to-blue-600" :
                i === 2 ? "from-blue-600 to-indigo-700" :
                i === 3 ? "from-indigo-500 to-blue-700" :
                "from-blue-500 to-sky-500"
              } mb-5 shadow-lg ${
                i === 0 ? "shadow-blue-200" :
                i === 1 ? "shadow-sky-200" :
                i === 2 ? "shadow-indigo-200" :
                i === 3 ? "shadow-blue-200" :
                "shadow-sky-200"
              } group-hover:scale-105 transition-transform duration-200`}>
                <product.icon className="h-5 w-5 text-white" />
              </div>

              <h3 className="text-[15px] font-extrabold text-slate-900 mb-2 tracking-tight">{product.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed flex-1 font-medium">{product.description}</p>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group/link"
                >
                  Enquire now
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover/link:translate-x-0.5">
                    <path d="M2.5 7h9m0 0L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}

          {/* 6th card - Custom Order - Dark blue standout */}
          <div className="group relative rounded-2xl bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 border-2 border-blue-700/50 p-7 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-900/40 transition-all duration-300 flex flex-col overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-sky-400/20 blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-indigo-400/15 blur-2xl pointer-events-none" />

            <Badge
              variant="secondary"
              className="absolute top-5 right-5 bg-sky-400/20 text-sky-300 border border-sky-400/30 text-[11px] font-bold tracking-wide px-2.5 py-0.5"
            >
              {customOrder.tag}
            </Badge>

            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 mb-5 shadow-lg shadow-sky-900/40 group-hover:scale-105 transition-transform duration-200">
              <customOrder.icon className="h-5 w-5 text-white" />
            </div>

            <h3 className="relative text-[15px] font-extrabold text-white mb-2 tracking-tight">{customOrder.title}</h3>
            <p className="relative text-sm text-white/70 leading-relaxed flex-1 font-medium">{customOrder.description}</p>

            <div className="relative mt-5 pt-4 border-t border-white/10">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-300 hover:text-white transition-colors group/link"
              >
                {customOrder.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover/link:translate-x-0.5">
                  <path d="M2.5 7h9m0 0L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
