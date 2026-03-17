import { Tag, Receipt, Printer, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    title: "Plain Thermal Labels",
    description: "Durable, high-adhesion thermal label rolls for prescription bottles, packages, and general pharmacy use. Available in multiple sizes.",
    icon: Tag,
    tag: null,
    gradient: "from-blue-600 to-blue-700",
    shadow: "shadow-blue-200",
  },
  {
    title: "Plain Thermal Receipts",
    description: "Clean thermal receipt rolls that produce clear, long-lasting transaction records. Compatible with all major POS systems.",
    icon: Receipt,
    tag: null,
    gradient: "from-sky-500 to-blue-600",
    shadow: "shadow-sky-200",
  },
  {
    title: "Custom Thermal Labels",
    description: "Thermal labels printed with your pharmacy's logo, name, address, and phone number. Reinforce your brand with every prescription.",
    icon: Tag,
    tag: "Popular",
    gradient: "from-blue-700 to-indigo-700",
    shadow: "shadow-blue-200",
  },
  {
    title: "Custom Thermal Receipts",
    description: "Branded thermal receipt rolls that double as a marketing touchpoint — your logo and contact details on every transaction.",
    icon: Receipt,
    tag: "Popular",
    gradient: "from-indigo-600 to-blue-700",
    shadow: "shadow-indigo-200",
  },
  {
    title: "Thermal Printers",
    description: "Fast, quiet, and reliable thermal printers built for high-volume pharmacy environments. Includes free remote setup support.",
    icon: Printer,
    tag: "Includes support",
    gradient: "from-blue-500 to-sky-500",
    shadow: "shadow-sky-200",
  },
]

export function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-slate-50 to-blue-50/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block h-1 w-8 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Products</p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl text-balance leading-tight">
              A complete lineup for your pharmacy
            </h2>
          </div>
          <Button asChild variant="outline" className="shrink-0 rounded-full px-6 border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground self-start sm:self-auto transition-colors">
            <Link href="#contact">Request Custom Order</Link>
          </Button>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.title}
              className="group relative rounded-2xl bg-white border border-border p-7 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 flex flex-col"
            >
              {product.tag && (
                <Badge
                  variant="secondary"
                  className="absolute top-5 right-5 bg-blue-50 text-accent border-blue-100 text-xs font-semibold"
                >
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  {product.tag}
                </Badge>
              )}

              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${product.gradient} mb-5 shadow-md ${product.shadow}`}>
                <product.icon className="h-5 w-5 text-white" />
              </div>

              <h3 className="text-base font-bold text-foreground mb-2">{product.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{product.description}</p>

              <div className="mt-5 pt-5 border-t border-border">
                <Link
                  href="#contact"
                  className="text-sm font-semibold text-accent hover:text-primary transition-colors flex items-center gap-1 group-hover:gap-2"
                >
                  Enquire now
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M2.5 7h9m0 0L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
