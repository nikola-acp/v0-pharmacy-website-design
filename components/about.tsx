import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Building2, ShieldCheck } from "lucide-react"

const pillars = [
  {
    icon: Building2,
    title: "Toronto-Based",
    description: "Locally operated, serving pharmacies all across Ontario with speed and care.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "Every product is carefully sourced to meet the demands of a busy pharmacy environment.",
  },
  {
    icon: MapPin,
    title: "Ontario-Wide Reach",
    description: "From small independent pharmacies to multi-location chains, we've got you covered.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">About Us</p>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Your reliable partner for pharmacy essentials
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              At Pharmabest Supplies, we pride ourselves on offering a carefully curated selection of pharmacy products designed to streamline operations and improve customer experience.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Based in Toronto, we specialize in labels, receipts, thermal printers, and accessories for pharmacies across Ontario. Our commitment to quality ensures your pharmacy stays organized and well-equipped.
            </p>
            <Button asChild className="mt-8 rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Right: pillars */}
          <div className="flex flex-col gap-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary">
                  <pillar.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
