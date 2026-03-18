import Link from "next/link"
import Image from "next/image"
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
            <Link href="/" className="inline-flex mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BhoRNq96tHZwnbe1bItzKtGJiS7AAx.png"
                alt="Pharmabest Supplies"
                width={280}
                height={72}
                className="h-16 w-auto object-contain opacity-70"
              />
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
