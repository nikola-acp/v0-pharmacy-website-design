import Link from "next/link"

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ],
  support: [
    { label: "Technical Support", href: "#support" },
    { label: "Shipping Info", href: "#" },
    { label: "Custom Orders", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer id="support" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold tracking-tight">
                Pharmabest Supplies
              </span>
            </Link>
            <p className="mt-4 text-primary-foreground/70 max-w-md leading-relaxed">
              Your trusted partner for high-quality pharmacy essentials. Based in Toronto, we specialize in labels, receipts, thermal printers, and accessories to streamline operations for pharmacies across Ontario.
            </p>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Pharmabest Supplies. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Facebook", "Instagram", "LinkedIn", "X"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                <span className="sr-only">{social}</span>
                <span className="text-xs font-medium">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
