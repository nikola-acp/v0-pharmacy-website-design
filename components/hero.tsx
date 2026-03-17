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
    <section className="relative pt-[72px] overflow-hidden">
      {/* Hero gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-800 to-sky-600" />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Bottom fade to background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24 lg:py-32">

          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-medium text-white/90 mb-8">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              Trusted by pharmacies across Ontario
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-[1.08]">
              Premium Supplies for{" "}
              <span className="text-sky-300">Modern Pharmacies</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-lg">
              Labels, receipts, thermal printers and accessories — competitively priced, quickly shipped, and backed by hands-on technical support.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-base bg-white text-blue-900 hover:bg-white/90 font-semibold shadow-lg border-0">
                <Link href="#products">
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
              <p className="text-4xl font-extrabold text-white">500+</p>
              <p className="mt-1 text-sm text-white/60">Pharmacies served</p>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
              <p className="text-4xl font-extrabold text-white">100%</p>
              <p className="mt-1 text-sm text-white/60">Free tech support</p>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
              <p className="text-4xl font-extrabold text-white">48h</p>
              <p className="mt-1 text-sm text-white/60">Avg. delivery time</p>
            </div>
            <div className="rounded-2xl bg-sky-400/20 backdrop-blur-sm border border-sky-400/30 p-6">
              <p className="text-2xl font-extrabold text-sky-300 leading-snug">Custom</p>
              <p className="mt-1 text-sm text-white/60">Labels & receipts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
