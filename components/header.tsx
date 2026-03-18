"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Why Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
]

// Mortar & pestle SVG logo matching the provided logo style, in our blue colour scheme
function PharmabestLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      {/* Bowl of mortar */}
      <ellipse cx="40" cy="34" rx="26" ry="10" fill="#2563eb" opacity="0.18" />
      <path d="M14 34 Q14 58 40 58 Q66 58 66 34" fill="#2563eb" />
      <path d="M14 34 Q14 58 40 58 Q66 58 66 34" fill="url(#mortar-grad)" />
      {/* Rim of mortar */}
      <ellipse cx="40" cy="34" rx="26" ry="10" fill="#1d4ed8" />
      <ellipse cx="40" cy="34" rx="22" ry="8" fill="#3b82f6" />
      {/* Base */}
      <rect x="30" y="57" width="20" height="5" rx="2.5" fill="#1d4ed8" />
      <rect x="26" y="61" width="28" height="4" rx="2" fill="#2563eb" />
      {/* Pestle */}
      <path d="M54 14 Q62 26 56 36" stroke="white" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="57.5" cy="35.5" rx="4" ry="3" fill="white" transform="rotate(-20 57.5 35.5)" />
      <defs>
        <linearGradient id="mortar-grad" x1="14" y1="34" x2="66" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 text-white text-xs font-medium text-center py-2 px-4 tracking-wide">
        Serving Ontario pharmacies — IDA, Guardian &amp; Pharmasave labels available &nbsp;·&nbsp;{" "}
        <a href="tel:+16474292677" className="underline underline-offset-2 hover:no-underline">+1 (647) 429-2677</a>
      </div>

      {/* Main nav */}
      <nav className="bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm shadow-slate-100/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <PharmabestLogo size={44} />
            <div className="flex flex-col leading-none gap-0.5">
              <span className="text-[17px] font-extrabold tracking-tight text-slate-900 uppercase">Pharmabest</span>
              <span className="text-[9px] font-bold tracking-[0.28em] text-blue-600 uppercase">Supplies</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop contact + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex flex-col items-end gap-0.5">
              <a
                href="tel:+16474292677"
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-blue-500" />
                (647) 429-2677
              </a>
              <a
                href="mailto:supplies@pharmabest.ca"
                className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-3 w-3 text-blue-400" />
                supplies@pharmabest.ca
              </a>
            </div>
            <Button asChild size="sm" className="rounded-full px-5 h-9 text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-200 hover:shadow-blue-300 border-0 transition-all">
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden -m-2 p-2 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <PharmabestLogo size={38} />
                <div className="flex flex-col leading-none gap-0.5">
                  <span className="text-base font-extrabold tracking-tight text-slate-900 uppercase">Pharmabest</span>
                  <span className="text-[9px] font-bold tracking-[0.28em] text-blue-600 uppercase">Supplies</span>
                </div>
              </Link>
              <button type="button" className="-m-2 p-2 text-slate-700 rounded-lg hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-slate-100 flex flex-col gap-3">
              <a href="tel:+16474292677" className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                <Phone className="h-4 w-4 text-blue-500" /> (647) 429-2677
              </a>
              <a href="mailto:supplies@pharmabest.ca" className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                <Mail className="h-4 w-4 text-blue-500" /> supplies@pharmabest.ca
              </a>
              <Button asChild className="w-full rounded-full font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
