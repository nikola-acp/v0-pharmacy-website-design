import { DollarSign, Palette, Truck, Headphones } from "lucide-react"

const features = [
  {
    number: "1",
    title: "Competitive Pricing",
    description: "Lowest prices without compromising quality. We work directly with manufacturers to ensure the best value for your pharmacy.",
    icon: DollarSign,
  },
  {
    number: "2",
    title: "Custom Orders",
    description: "Personalized labels and receipts featuring your pharmacy's branding, logo, and contact information for a professional impression.",
    icon: Palette,
  },
  {
    number: "3",
    title: "Reliable Shipping",
    description: "Affordable and fast delivery directly to your pharmacy. We serve pharmacies across Ontario with consistent, dependable service.",
    icon: Truck,
  },
  {
    number: "4",
    title: "Technical Support",
    description: "Free remote support for printer setup and troubleshooting. Our team is here to ensure your equipment runs smoothly.",
    icon: Headphones,
  },
]

export function Features() {
  return (
    <section className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-4">Why Choose Us</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl max-w-xl">
            Everything your pharmacy needs to operate efficiently
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-background border border-border rounded-2xl p-8 hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-start gap-6">
                <span className="text-5xl font-light text-muted-foreground/50">
                  {feature.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
