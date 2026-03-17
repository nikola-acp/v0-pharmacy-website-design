import Link from "next/link"
import { Phone, Mail } from "lucide-react"

const footerNav = {
  company: [
    { label: "Products", href: "/products" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
  support: [
    { label: "Technical Support", href: "/#contact" },
    { label: "Custom Orders", href: "/products" },
    { label: "Shipping Info", href: "/#contact" },
  ],
}

export function Footer() {
  return (
    <footer id="support" className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 shadow-lg shadow-blue-900/40 group-hover:shadow-blue-600/40 transition-shadow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 3H6a2 2 0 00-2 2v4a2 2 0 002 2h3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 3v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 7h4a2 2 0 012 2v1a2 2 0 01-2 2H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M15 18H6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none gap-0.5">
                <span className="text-[17px] font-extrabold tracking-tight">Pharmabest</span>
                <span className="text-[9.5px] font-bold tracking-[0.22em] text-sky-400 uppercase">Supplies</span>
              </div>
            </Link>
            <p className="text-sm text-white/45 max-w-sm leading-relaxed font-medium">
              Your trusted partner for pharmacy thermal labels, thermal receipts, thermal printers, and accessories. Based in Toronto, serving pharmacies across Ontario.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a href="tel:+16474292677" className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-white transition-colors font-semibold">
                <Phone className="h-3.5 w-3.5" />
                +1 (647) 429-2677
              </a>
              <a href="mailto:supplies@pharmabest.ca" className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-white transition-colors font-semibold">
                <Mail className="h-3.5 w-3.5" />
                supplies@pharmabest.ca
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerNav.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-semibold text-white/55 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-5">Support</h4>
            <ul className="flex flex-col gap-3">
              {footerNav.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-semibold text-white/55 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30 font-medium">
            &copy; {new Date().getFullYear()} Pharmabest Supplies. All rights reserved.
          </p>
          <p className="text-xs text-white/30 font-medium">Toronto, Ontario, Canada</p>
        </div>
      </div>
    </footer>
  )
}
