"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-md shadow-blue-200">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M11 3v7M11 10L7 7m4 3l4-3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="3" y="12" width="16" height="7" rx="2" stroke="white" strokeWidth="1.8"/>
              <path d="M8 15.5h6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[17px] font-bold tracking-tight text-foreground">Pharmabest</span>
            <span className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">Supplies</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="mailto:supplies@pharmabest.ca"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            supplies@pharmabest.ca
          </a>
          <Button asChild size="sm" className="rounded-full px-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow shadow-blue-200 border-0">
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden -m-2 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800">
                  <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M11 3v7M11 10L7 7m4 3l4-3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="12" width="16" height="7" rx="2" stroke="white" strokeWidth="1.8"/>
                    <path d="M8 15.5h6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-base font-bold tracking-tight text-foreground">Pharmabest</span>
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-accent uppercase">Supplies</span>
                </div>
              </Link>
              <button type="button" className="-m-2 p-2 text-foreground" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-border">
              <Button asChild className="w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
