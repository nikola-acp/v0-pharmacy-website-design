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
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block h-1 w-8 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">About Us</p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl text-balance leading-tight">
              Your reliable partner for pharmacy essentials
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              At Pharmabest Supplies, we pride ourselves on offering a carefully curated selection of pharmacy products designed to streamline operations and improve customer experience.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Based in Toronto, we specialize in thermal labels, receipts, thermal printers, and accessories for pharmacies across Ontario. Our commitment to quality ensures your pharmacy stays organized and well-equipped.
            </p>
            <Button asChild className="mt-8 rounded-full px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 border-0 shadow shadow-blue-200">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Right: pillars */}
          <div className="flex flex-col gap-4">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-200">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm ${
                  i === 0 ? "from-blue-600 to-blue-700 shadow-blue-200" :
                  i === 1 ? "from-sky-500 to-blue-600 shadow-sky-200" :
                  "from-blue-700 to-indigo-700 shadow-blue-200"
                }`}>
                  <pillar.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{pillar.title}</h3>
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
