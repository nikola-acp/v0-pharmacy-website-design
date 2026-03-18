"use client"

import Image from "next/image"

const brands = [
  {
    name: "Guardian",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ec4MO0avYFm77YUvKjOd1w4JzK1ruJ.png",
    bg: "bg-[#006b3c]",
  },
  {
    name: "Pharmasave",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y6zvISMWsPMKsOhp32P7CsrtRk1cD7.png",
    bg: "bg-[#d0021b]",
  },
  {
    name: "I.D.A.",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jjRzYx8DmlN4wjrNK3IO5yf4diC2Oi.png",
    bg: "bg-white",
  },
]

export function TrustedBrands() {
  // Duplicate for seamless infinite scroll
  const items = [...brands, ...brands, ...brands]

  return (
    <section className="py-6 bg-white border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 mb-4">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Trusted by pharmacies across Ontario
        </p>
      </div>

      {/* Scrolling logo ticker */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="flex animate-scroll gap-8 w-max px-8">
          {items.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className={`flex items-center justify-center h-14 w-44 rounded-xl shrink-0 overflow-hidden border border-slate-100 ${brand.bg}`}
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={140}
                height={44}
                className="object-contain h-10 w-auto"
              />
            </div>
          ))}
          {/* & More pill */}
          <div className="flex items-center justify-center h-14 w-44 shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 border border-blue-500">
            <span className="text-base font-bold text-white tracking-wide">& More</span>
          </div>
        </div>
      </div>
    </section>
  )
}
