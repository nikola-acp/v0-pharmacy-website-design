"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    title: "Plain Thermal Labels",
    description: "High-adhesion durable label rolls for prescription bottles and general pharmacy use.",
    tag: "20% more labels!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Plain%20Thermal%20Labels-0zsvg6D5JxzFCpDweqsvd3HswPm4Ct.jpeg",
    href: "https://pharmabest-supplies.myshopify.com",
  },
  {
    title: "Plain Thermal Receipts",
    description: "Crystal-clear thermal receipt rolls for long-lasting transaction records.",
    tag: "20% more for 10% less!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Plain%20Receipts-Cc0kS7gEOCPSbzYbXgt0L4ENyjRmIV.jpg",
    href: "https://pharmabest-supplies.myshopify.com",
  },
  {
    title: "Custom Thermal Labels",
    description: "Branded labels with your pharmacy's logo, name, and contact information.",
    tag: "20% more labels!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Custom%20Thermal%20Labels-IVaFt1dV589Vmiw5TRMwcF15sFS0EN.jpg",
    href: "https://pharmabest-supplies.myshopify.com",
  },
  {
    title: "Custom Thermal Receipts",
    description: "Branded receipt rolls featuring your pharmacy logo on every transaction.",
    tag: "20% more for 10% less!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pharmsave%20IDA-E0xsfz7eVnHGO8DgX0uuLJph6jg1so.jpg",
    href: "https://pharmabest-supplies.myshopify.com",
  },
  {
    title: "Thermal Printers",
    description: "Fast, reliable thermal printers built for high-volume pharmacy environments.",
    tag: "Free with initial purchase!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thermal%20Printer%202-5wrKPwtS9wZBFX8NLxnwGNsqHhXUpD.jpg",
    href: "https://pharmabest-supplies.myshopify.com",
  },
]

export function Products() {
  const [customOrder, setCustomOrder] = useState({ format: "", quantity: "", description: "", email: "", phone: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block h-0.5 w-6 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Our Products</p>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl text-balance leading-[1.06]">
            A complete lineup{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              for your pharmacy
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-500 font-medium leading-relaxed">
            IDA, Guardian, and Pharmasave thermal labels and thermal receipts available. Best price guaranteed.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="group relative rounded-2xl bg-white border-2 border-slate-100 overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 flex flex-col"
            >
              {product.tag && (
                <Badge
                  variant="secondary"
                  className="absolute top-4 right-4 z-10 bg-blue-50 text-blue-700 border border-blue-100 text-sm font-bold tracking-wide px-3 py-2 max-w-20 whitespace-normal text-center leading-snug"
                >
                  {product.tag}
                </Badge>
              )}

              {/* Product image */}
              <div className="relative aspect-square bg-slate-50 overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-slate-100" />
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[15px] font-extrabold text-slate-900 mb-2 tracking-tight">{product.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1 font-medium">{product.description}</p>

                {/* Install Drivers — only for Thermal Printers */}
                {product.title === "Thermal Printers" && (
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Install Drivers</p>
                      <div className="flex items-center gap-3">
                        {/* Windows icon */}
                        <a href="#" className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                          </svg>
                          Windows
                        </a>
                        {/* Mac icon */}
                        <a href="#" className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                          </svg>
                          macOS
                        </a>
                      </div>
                    </div>
                    <Link
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold px-5 py-2 shadow-md shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 h-10"
                    >
                      Order Now
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2.5 7h9m0 0L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                )}

                {/* Regular products — Order Now button */}
                {product.title !== "Thermal Printers" && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <Link
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold px-5 py-2 shadow-md shadow-blue-200 hover:shadow-blue-300 transition-all duration-200"
                    >
                      Order Now
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2.5 7h9m0 0L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* 6th card - Custom Order fillable form */}
          <div className="flex flex-col rounded-2xl border-2 border-blue-700/50 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 overflow-hidden">
            <div className="p-6 flex flex-col gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-1">Custom</p>
                <h3 className="text-base font-extrabold text-white leading-snug">Request Custom Order</h3>
                <p className="text-xs text-white/50 mt-1">Fill in the details below and we will get back to you with a quote.</p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-3 py-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-400/20 border border-sky-400/30">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-300">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold text-white">Request Submitted!</p>
                  <p className="text-xs text-white/50">We will reach out with a quote shortly.</p>
                  <button type="button" onClick={() => { setSubmitted(false); setCustomOrder({ format: "", quantity: "", description: "", email: "", phone: "" }) }} className="text-xs text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors">Submit another</button>
                </div>
              ) : (
                <form onSubmit={handleCustomSubmit} className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Product Type</label>
                    <select
                      value={customOrder.format}
                      onChange={(e) => setCustomOrder({ ...customOrder, format: e.target.value })}
                      required
                      className="w-full rounded-lg bg-white/10 border border-white/15 text-white text-sm font-medium px-3 py-2 focus:outline-none focus:border-sky-400"
                    >
                      <option value="" className="text-slate-900">Select a product...</option>
                      <option value="plain-labels" className="text-slate-900">Plain Thermal Labels</option>
                      <option value="plain-receipts" className="text-slate-900">Plain Thermal Receipts</option>
                      <option value="custom-labels" className="text-slate-900">Custom Thermal Labels</option>
                      <option value="custom-receipts" className="text-slate-900">Custom Thermal Receipts</option>
                      <option value="thermal-printer" className="text-slate-900">Thermal Printer</option>
                      <option value="other" className="text-slate-900">Other (Please specify)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Quantity (rolls)</label>
                    <input
                      type="number"
                      placeholder="e.g. 10"
                      min="1"
                      value={customOrder.quantity}
                      onChange={(e) => setCustomOrder({ ...customOrder, quantity: e.target.value })}
                      required
                      className="w-full rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm font-medium px-3 py-2 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Details</label>
                    <textarea
                      placeholder="Branding, size, logo, special requirements..."
                      rows={2}
                      value={customOrder.description}
                      onChange={(e) => setCustomOrder({ ...customOrder, description: e.target.value })}
                      className="w-full resize-none rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm font-medium px-3 py-2 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  {/* Email — full width */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Email</label>
                    <input
                      type="email"
                      placeholder="you@pharmacy.com"
                      value={customOrder.email}
                      onChange={(e) => setCustomOrder({ ...customOrder, email: e.target.value })}
                      className="w-full rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm font-medium px-3 py-2 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  {/* Phone — full width */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Phone</label>
                    <input
                      type="tel"
                      placeholder="(647) 000-0000"
                      value={customOrder.phone}
                      onChange={(e) => setCustomOrder({ ...customOrder, phone: e.target.value })}
                      className="w-full rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm font-medium px-3 py-2 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  {/* Submit button — aligned with product card buttons */}
                  <button
                    type="submit"
                    className="rounded-full h-10 text-sm font-bold bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:from-sky-500 hover:to-blue-600 transition-all shadow-lg shadow-blue-900/40 inline-flex items-center justify-center px-5"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
