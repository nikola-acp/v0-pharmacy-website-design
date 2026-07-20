"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 text-white text-xs font-medium text-center py-2 px-4 tracking-wide">
        Serving Ontario pharmacies — IDA, Guardian & Pharmasave labels available &nbsp;·&nbsp;{" "}
        <a href="tel:+16474292677" className="underline underline-offset-2 hover:no-underline">+1 (647) 429-2677</a>
      </div>

      {/* Main nav */}
      <nav className="bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm shadow-slate-100/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 shadow-lg shadow-blue-200 group-hover:shadow-blue-300 transition-shadow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 3H6a2 2 0 00-2 2v4a2 2 0 002 2h3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 3v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 7h4a2 2 0 012 2v1a2 2 0 01-2 2H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 18H6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col leading-none gap-0.5">
              <span className="text-[16px] font-extrabold tracking-tight text-slate-900">Pharmabest</span>
              <span className="text-[9.5px] font-bold tracking-[0.22em] text-blue-600 uppercase">Supplies</span>
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

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+16474292677"
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              (647) 429-2677
            </a>
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
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 3H6a2 2 0 00-2 2v4a2 2 0 002 2h3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 3v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 7h4a2 2 0 012 2v1a2 2 0 01-2 2H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M15 18H6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex flex-col leading-none gap-0.5">
                  <span className="text-base font-extrabold tracking-tight text-slate-900">Pharmabest</span>
                  <span className="text-[9px] font-bold tracking-[0.22em] text-blue-600 uppercase">Supplies</span>
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
                <Phone className="h-4 w-4" />
                (647) 429-2677
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
