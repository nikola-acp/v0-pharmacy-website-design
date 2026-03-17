import { DollarSign, Paintbrush, Truck, Headphones } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "We work directly with manufacturers to give you the best value — without cutting corners on quality.",
  },
  {
    icon: Paintbrush,
    title: "Custom Branding",
    description: "Labels and receipts featuring your pharmacy's logo, name, and contact info for a polished, professional look.",
  },
  {
    icon: Truck,
    title: "Fast Reliable Shipping",
    description: "Affordable, dependable delivery across Ontario. Most orders arrive within 48 hours.",
  },
  {
    icon: Headphones,
    title: "Free Tech Support",
    description: "Remote printer setup, troubleshooting, and ongoing help — at no extra cost.",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px flex-1 max-w-8 bg-accent" />
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why Choose Us</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything your pharmacy needs, all in one place
          </h2>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pt-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary mb-4">
                  <feature.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
