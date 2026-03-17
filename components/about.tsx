import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Building2, ShieldCheck, Star } from "lucide-react"

const pillars = [
  {
    icon: Building2,
    title: "Toronto-Based",
    description: "Locally operated, serving pharmacies all across Ontario with speed and personal care.",
    gradient: "from-blue-500 to-blue-700",
    shadow: "shadow-blue-200",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "Every product is carefully sourced to meet the demands of a busy pharmacy environment. Easy-peel, no residue.",
    gradient: "from-sky-400 to-blue-600",
    shadow: "shadow-sky-200",
  },
  {
    icon: MapPin,
    title: "Ontario-Wide Reach",
    description: "From small independent pharmacies to multi-location chains — IDA, Guardian, Pharmasave and more.",
    gradient: "from-blue-600 to-indigo-700",
    shadow: "shadow-indigo-200",
  },
  {
    icon: Star,
    title: "Wholesale Pricing",
    description: "Volume discounts available for larger orders. Call us to discuss your pharmacy's specific needs.",
    gradient: "from-indigo-500 to-blue-600",
    shadow: "shadow-blue-200",
  },
]

export function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-0.5 w-6 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">About Us</p>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl text-balance leading-[1.06]">
              Your reliable partner for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                pharmacy essentials
              </span>
            </h2>
            <p className="mt-6 text-base text-slate-500 font-medium leading-relaxed">
              At Pharmabest Supplies, we specialize in thermal labels, thermal receipts, thermal printers, and accessories for pharmacies across Ontario. Proudly based in Toronto.
            </p>
            <p className="mt-4 text-base text-slate-500 font-medium leading-relaxed">
              We carry custom and plain thermal labels and receipts for IDA, Guardian, Pharmasave, and independent pharmacies — with the best prices and fastest delivery in the province.
            </p>

            {/* Inline stats */}
            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-3xl font-extrabold text-slate-900">500+</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Pharmacies served</p>
              </div>
              <div className="w-px bg-slate-100" />
              <div>
                <p className="text-3xl font-extrabold text-slate-900">48h</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Avg. delivery</p>
              </div>
              <div className="w-px bg-slate-100" />
              <div>
                <p className="text-3xl font-extrabold text-slate-900">Free</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Tech support</p>
              </div>
            </div>

            <Button asChild className="mt-10 rounded-full px-8 h-11 text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-200 border-0 transition-all">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Right: pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="group flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/80 transition-all duration-300">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.gradient} shadow-md ${pillar.shadow} group-hover:scale-105 transition-transform duration-200`}>
                  <pillar.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 mb-1.5 tracking-tight text-sm">{pillar.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
