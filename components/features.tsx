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
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block h-1 w-8 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why Choose Us</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl text-balance leading-tight">
            Everything your pharmacy needs,{" "}
            <span className="text-accent">all in one place</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-blue-50 transition-all duration-200"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 mb-4 shadow-sm shadow-blue-200">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1.5">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
