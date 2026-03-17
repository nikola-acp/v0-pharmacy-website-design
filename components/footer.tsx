import Link from "next/link"

const footerNav = {
  company: [
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  support: [
    { label: "Technical Support", href: "#contact" },
    { label: "Custom Orders", href: "#contact" },
    { label: "Shipping Info", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer id="support" className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/20">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M11 3v7M11 10L7 7m4 3l4-3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="3" y="12" width="16" height="7" rx="2" stroke="white" strokeWidth="1.8"/>
                  <path d="M8 15.5h6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[17px] font-bold tracking-tight">Pharmabest</span>
                <span className="text-[11px] font-semibold tracking-[0.18em] text-sky-300 uppercase">Supplies</span>
              </div>
            </Link>
            <p className="text-sm text-white/55 max-w-sm leading-relaxed">
              Your trusted partner for pharmacy thermal labels, receipts, thermal printers, and accessories. Based in Toronto, serving pharmacies across Ontario.
            </p>
            <a
              href="mailto:supplies@pharmabest.ca"
              className="mt-4 inline-block text-sm text-sky-300 hover:text-white transition-colors"
            >
              supplies@pharmabest.ca
            </a>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {footerNav.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Support</h4>
            <ul className="flex flex-col gap-2.5">
              {footerNav.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} Pharmabest Supplies. All rights reserved.
          </p>
          <p className="text-xs text-white/35">Toronto, Ontario, Canada</p>
        </div>
      </div>
    </footer>
  )
}
