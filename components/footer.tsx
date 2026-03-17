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
    <footer id="support" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/15">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2L10 10M10 10L6 7M10 10L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="3" y="11" width="14" height="7" rx="1.5" stroke="white" strokeWidth="1.8"/>
                  <path d="M7 14.5h6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight">Pharmabest</span>
                <span className="text-[11px] font-medium tracking-widest text-primary-foreground/60 uppercase">Supplies</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/65 max-w-sm leading-relaxed">
              Your trusted partner for pharmacy labels, receipts, thermal printers, and accessories. Based in Toronto, serving pharmacies across Ontario.
            </p>
            <a
              href="mailto:supplies@pharmabest.ca"
              className="mt-4 inline-block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              supplies@pharmabest.ca
            </a>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {footerNav.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 mb-4">Support</h4>
            <ul className="flex flex-col gap-2.5">
              {footerNav.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Pharmabest Supplies. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">Toronto, Ontario, Canada</p>
        </div>
      </div>
    </footer>
  )
}
