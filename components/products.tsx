import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    title: "Plain Thermal Labels",
    description: "High-adhesion durable label rolls for prescription bottles and general pharmacy use.",
    tag: null,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h13ZAChSBAZTEDgIhF5WmK4xE0b9jo.png",
    href: "/order",
  },
  {
    title: "Plain Thermal Receipts",
    description: "Crystal-clear thermal receipt rolls for long-lasting transaction records.",
    tag: null,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cTn9jJ73j4RrgBoyexgVXXchOd3usN.png",
    href: "/order",
  },
  {
    title: "Custom Thermal Labels",
    description: "Branded labels with your pharmacy's logo, name, and contact information.",
    tag: "Most Popular",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1ok9umYv0dUc47R5nG6bjXX1aZ05br.png",
    href: "/order",
  },
  {
    title: "Custom Thermal Receipts",
    description: "Branded receipt rolls featuring your pharmacy logo on every transaction.",
    tag: "Most Popular",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4et2MQ90j1NlsTkPqDeyIm04X2EyhC.png",
    href: "/order",
  },
  {
    title: "Thermal Printers",
    description: "Fast, reliable thermal printers built for high-volume pharmacy environments.",
    tag: "Free setup",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fMiiPtFeIDCq3sEgOYDTyWHgh3In0V.png",
    href: "/order",
  },
]

export function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="group relative rounded-2xl bg-white border-2 border-slate-100 overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 flex flex-col"
            >
              {product.tag && (
                <Badge
                  variant="secondary"
                  className="absolute top-4 right-4 z-10 bg-blue-50 text-blue-700 border border-blue-100 text-[11px] font-bold tracking-wide px-2.5 py-0.5"
                >
                  {product.tag}
                </Badge>
              )}

              {/* Product image */}
              <div className="relative aspect-square bg-slate-100 overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-slate-100" />
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[15px] font-extrabold text-slate-900 mb-2 tracking-tight">{product.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1 font-medium">{product.description}</p>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <Link
                    href={product.href}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold px-5 py-2 shadow-md shadow-blue-200 hover:shadow-blue-300 transition-all duration-200"
                  >
                    Order Now
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7h9m0 0L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* 6th card - Custom Order - Dark blue standout */}
          <div className="group relative rounded-2xl bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 border-2 border-blue-700/50 p-6 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-900/40 transition-all duration-300 flex flex-col overflow-hidden">
            <div className="absolute top-0 right-0 h-28 w-28 rounded-full bg-sky-400/20 blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-20 w-20 rounded-full bg-indigo-400/15 blur-2xl pointer-events-none" />

            <Badge
              variant="secondary"
              className="absolute top-4 right-4 bg-sky-400/20 text-sky-300 border border-sky-400/30 text-[11px] font-bold tracking-wide px-2.5 py-0.5"
            >
              We can help
            </Badge>

            <h3 className="relative text-[15px] font-extrabold text-white mb-2 tracking-tight pr-20">Request Custom Order</h3>
            <p className="relative text-sm text-white/70 leading-relaxed flex-1 font-medium">
              Need a specific size, format, or branded design not listed? We specialize in custom solutions for any pharmacy requirement.
            </p>

            <div className="relative mt-4 pt-4 border-t border-white/10">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-300 hover:text-white transition-colors group/link"
              >
                Talk to us
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
