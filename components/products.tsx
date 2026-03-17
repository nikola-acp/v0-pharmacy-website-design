import { Tag, Receipt, Printer, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    title: "Plain Labels",
    description: "Durable, high-adhesion label rolls for prescription bottles, packages, and general pharmacy use. Available in multiple sizes.",
    icon: Tag,
    tag: null,
  },
  {
    title: "Plain Receipts",
    description: "Clean thermal receipt rolls that produce clear, long-lasting transaction records. Compatible with all major POS systems.",
    icon: Receipt,
    tag: null,
  },
  {
    title: "Customized Labels",
    description: "Labels printed with your pharmacy's logo, name, address, and phone number. Reinforce your brand with every prescription.",
    icon: Tag,
    tag: "Popular",
  },
  {
    title: "Customized Receipts",
    description: "Branded receipt rolls that double as a marketing touchpoint — your logo and contact details on every transaction.",
    icon: Receipt,
    tag: "Popular",
  },
  {
    title: "Thermal Printers",
    description: "Fast, quiet, and reliable thermal printers built for high-volume pharmacy environments. Includes free remote setup support.",
    icon: Printer,
    tag: "Includes support",
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Products</p>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              A complete lineup for your pharmacy
            </h2>
          </div>
          <Button asChild variant="outline" className="shrink-0 rounded-full px-6 border-border bg-white hover:bg-secondary self-start sm:self-auto">
            <Link href="#contact">Request Custom Order</Link>
          </Button>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.title}
              className="group relative rounded-2xl bg-white border border-border p-7 hover:border-accent/40 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {product.tag && (
                <Badge
                  variant="secondary"
                  className="absolute top-5 right-5 bg-secondary text-accent border-0 text-xs font-medium"
                >
                  <Star className="h-3 w-3 mr-1" />
                  {product.tag}
                </Badge>
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary mb-5">
                <product.icon className="h-5 w-5 text-primary-foreground" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{product.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{product.description}</p>

              <div className="mt-5 pt-5 border-t border-border">
                <Link
                  href="#contact"
                  className="text-sm font-medium text-accent hover:text-primary transition-colors flex items-center gap-1"
                >
                  Enquire now
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
