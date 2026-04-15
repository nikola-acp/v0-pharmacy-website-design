const footerCols = [
  {
    heading: "Shop",
    links: [
      { label: "Plain Thermal Labels", href: "#products" },
      { label: "Plain Thermal Receipts", href: "#products" },
      { label: "Custom Thermal Labels", href: "#products" },
      { label: "Custom Thermal Receipts", href: "#products" },
      { label: "Thermal Printers", href: "#products" },
      { label: "Shop All", href: "#products" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "Product Guide", href: "#products" },
      { label: "Label Sizing Help", href: "#contact" },
      { label: "Custom Branding", href: "#custom" },
      { label: "Ordering FAQ", href: "#contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Technical Support", href: "#contact" },
      { label: "Shipping Info", href: "#contact" },
      { label: "Custom Orders", href: "#custom" },
      { label: "Wholesale Pricing", href: "#contact" },
    ],
  },
  {
    heading: "About Us",
    links: [
      { label: "Our Story", href: "#about" },
      { label: "Why Pharmabest", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#contact" },
    ],
  },
  {
    heading: "Partner",
    links: [
      { label: "Wholesale", href: "#contact" },
      { label: "Dropship", href: "#contact" },
      { label: "Referral Program", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        {/* Top section: Brand + link columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_repeat(5,1fr)] gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#00BA74] text-white font-black text-xl">
                P
              </span>
              <span className="font-extrabold text-[20px] tracking-tight">
                Pharmabest Supplies
              </span>
            </div>
            <p className="text-white/60 text-[14px] leading-relaxed max-w-[280px] mb-5">
              Your trusted partner for pharmacy thermal labels, thermal
              receipts, printers, and accessories. Based in Toronto, serving
              pharmacies across Ontario.
            </p>
            <div className="space-y-1.5 text-[14px]">
              <a
                href="tel:+16474292677"
                className="block text-[#00BA74] hover:text-white transition-colors font-semibold"
              >
                +1 (647) 429-2677
              </a>
              <a
                href="mailto:supplies@pharmabest.ca"
                className="block text-[#00BA74] hover:text-white transition-colors font-semibold"
              >
                supplies@pharmabest.ca
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-white mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-[#00BA74] text-[14px] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-white/40 text-[12px] leading-relaxed pt-10 max-w-3xl">
          Pricing and product specifications are subject to change. Custom
          orders may require a minimum order quantity. For the most up-to-date
          information, please contact our team.
        </p>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/50">
            <li>© 2026 Pharmabest Supplies</li>
            <li>
              <a href="#" className="hover:text-white">Terms</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Privacy</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Disclaimer</a>
            </li>
            <li className="text-white/30">Toronto, Ontario, Canada</li>
          </ul>

          <div className="flex items-center gap-3">
            {["instagram", "facebook", "twitter", "linkedin"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#00BA74] hover:text-[#00BA74] transition-colors"
              >
                <span className="w-3 h-3 rounded-full bg-current" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
