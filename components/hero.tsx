import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const highlights = [
  "Serving Ontario pharmacies since day one",
  "Free remote printer setup & support",
  "Custom branded labels & receipts",
]

export function Hero() {
  return (
    <section className="relative pt-[68px] overflow-hidden bg-white">
      {/* Top accent band */}
      <div className="h-1 w-full bg-primary" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">

          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-1.5 text-sm font-medium text-accent mb-8">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Trusted by pharmacies across Ontario
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-[1.1]">
              Premium Supplies for{" "}
              <span className="text-accent">Modern Pharmacies</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-lg">
              Labels, receipts, thermal printers and accessories — competitively priced, quickly shipped, and backed by hands-on technical support.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-base bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#products">
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-border hover:bg-secondary">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
              <p className="text-4xl font-bold">500+</p>
              <p className="mt-1 text-sm text-primary-foreground/80">Pharmacies served</p>
            </div>
            <div className="rounded-2xl bg-secondary border border-border p-6">
              <p className="text-4xl font-bold text-foreground">100%</p>
              <p className="mt-1 text-sm text-muted-foreground">Free tech support</p>
            </div>
            <div className="rounded-2xl bg-secondary border border-border p-6">
              <p className="text-4xl font-bold text-foreground">48h</p>
              <p className="mt-1 text-sm text-muted-foreground">Avg. delivery time</p>
            </div>
            <div className="rounded-2xl bg-accent p-6 text-accent-foreground">
              <p className="text-4xl font-bold">Custom</p>
              <p className="mt-1 text-sm text-accent-foreground/80">Labels & receipts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />
    </section>
  )
}
