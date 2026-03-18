"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

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
  {
    name: "& More",
    src: null,
    bg: "bg-gradient-to-r from-blue-600 to-indigo-600",
    isMore: true,
  },
]

function useCounter(target: number, duration: number) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let start = 0
    const step = Math.ceil(duration / target)
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= target) {
        setDone(true)
        clearInterval(timer)
      }
    }, step)
    return () => clearInterval(timer)
  }, [target, duration])

  return { count, done }
}

export function TrustedBrands() {
  const { count, done } = useCounter(100, 2000)
  // Duplicate once — the animation moves exactly -50% so the second copy
  // lines up perfectly with where the first started, giving seamless loop.
  const items = [...brands, ...brands]

  return (
    <section className="py-6 bg-white border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 mb-4 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
          Trusted by{" "}
          <span className="text-blue-700 tabular-nums">
            {count}
            {done ? "+" : ""}
          </span>{" "}
          Ontario Pharmacies
        </p>
      </div>

      {/* Scrolling logo ticker */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent" />

        {/* The track is exactly 2× the original set width.
            translateX(-50%) moves it back to the start → seamless. */}
        <div
          className="flex gap-8 px-8"
          style={{
            width: "max-content",
            animation: "ticker-scroll 18s linear infinite",
          }}
        >
          {items.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className={`flex items-center justify-center h-14 w-44 rounded-xl shrink-0 overflow-hidden border ${
                brand.isMore ? "border-blue-500" : "border-slate-100"
              } ${brand.bg}`}
            >
              {brand.isMore ? (
                <span className="text-base font-bold text-white tracking-wide">& More</span>
              ) : (
                <Image
                  src={brand.src!}
                  alt={brand.name}
                  width={140}
                  height={44}
                  className="object-contain h-10 w-auto"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
