import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Zap, Tag } from "lucide-react"

const highlights = [
  { icon: ShieldCheck, text: "Best price guaranteed — every order" },
  { icon: Zap, text: "48-hour delivery across Ontario" },
  { icon: Tag, text: "IDA, Guardian & Pharmasave labels available" },
]

const stats = [
  { value: "500+", label: "Pharmacies served" },
  { value: "48h", label: "Avg. delivery" },
  { value: "10%", label: "Off this week" },
  { value: "Free", label: "Tech support" },
]

export function Hero() {
  return (
    <section className="relative pt-[100px] overflow-hidden">
      {/* Rich multi-stop gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#3b82f6_0%,_#1e40af_35%,_#1e1b4b_70%,_#0f172a_100%)]" />

      {/* Noise/grain texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-20 right-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24 lg:py-32">

          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold text-white/85 mb-8 tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              Trusted by Ontario Pharmacies
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4.25rem] text-balance leading-[1.05]">
              Pharmacy Thermal{" "}
              <span className="bg-gradient-to-r from-sky-300 to-blue-200 bg-clip-text text-transparent">
                Labels &amp; Receipts
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/65 max-w-lg font-medium">
              Premium quality. Lowest prices. Fast Ontario-wide delivery. Plain and custom-branded thermal supplies for every pharmacy.
            </p>

            <ul className="mt-8 space-y-3.5">
              {highlights.map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm text-white/75 font-medium">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 border border-white/15">
                    <item.icon className="h-3.5 w-3.5 text-sky-300" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-sm font-bold bg-white text-blue-900 hover:bg-blue-50 shadow-xl shadow-blue-900/30 border-0 transition-all">
                <Link href="#products">
                  Shop Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-sm font-bold border-white/20 bg-white/8 text-white hover:bg-white/15 transition-all">
                <Link href="#contact">Get a Quote</Link>
              </Button>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`rounded-2xl border p-6 transition-all ${
                  i === 2
                    ? "bg-gradient-to-br from-sky-400/25 to-blue-500/20 border-sky-400/30 col-span-1"
                    : "bg-white/8 border-white/12 hover:bg-white/12"
                }`}
              >
                <p className="text-4xl font-extrabold text-white tracking-tight">{stat.value}</p>
                <p className="mt-1.5 text-xs font-semibold text-white/55 tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
