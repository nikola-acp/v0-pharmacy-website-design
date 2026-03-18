"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Zap, Truck, Package } from "lucide-react"

const highlights = [
  { icon: Package, text: "Wholesale & Custom Orders" },
  { icon: Zap, text: "Highest Quality Products" },
  { icon: ShieldCheck, text: "Easy-Remove Labels" },
  { icon: Truck, text: "Fast Delivery Ontario-Wide" },
]

export function Hero() {
  return (
    <section className="relative pt-[100px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#3b82f6_0%,_#1e40af_35%,_#1e1b4b_70%,_#0f172a_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
      <div className="absolute top-20 right-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center py-24 lg:py-32 max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold text-white/85 mb-8 tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            Trusted by Ontario Pharmacies
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4.25rem] text-balance leading-[1.05]">
            Your Partner for{" "}
            <span className="bg-gradient-to-r from-sky-300 to-blue-200 bg-clip-text text-transparent">
              Pharmacy Supplies
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/65 max-w-2xl font-medium">
            Premium quality thermal labels, receipt rolls, printers, and accessories. Lowest prices, fast Ontario-wide delivery, and dedicated support for every pharmacy.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="rounded-full px-8 h-12 text-sm font-bold bg-white text-blue-900 hover:bg-blue-50 shadow-xl shadow-blue-900/30 border-0 transition-all">
              <Link href="/order">
                Order Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-sm font-bold border-white/20 bg-white/8 text-white hover:bg-white/15 transition-all">
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>
        </div>

        {/* Highlights bar - horizontal with icons */}
        <div className="relative pb-16">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {highlights.map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 text-sm text-white/70 font-medium">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/15">
                  <item.icon className="h-3.5 w-3.5 text-sky-300" />
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
