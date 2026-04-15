import Link from "next/link";

const navLinks = [
  { label: "Shop All", href: "#products" },
  { label: "Why Us", href: "#about" },
  { label: "Custom Orders", href: "#custom" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#1F1F1F] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Top bar: Logo + icon links */}
        <div className="h-[68px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#00BA74] text-white font-black text-lg">
              P
            </span>
            <span className="font-extrabold text-[18px] tracking-tight">
              Pharmabest Supplies
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7 text-[12px] font-semibold uppercase tracking-wider">
            <a
              href="tel:+16474292677"
              className="flex items-center gap-1.5 hover:text-[#00BA74] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515L10 8l-2 1a11 11 0 006 6l1-2 3.485.78A2 2 0 0120 15.72V18a2 2 0 01-2 2A16 16 0 013 5z" />
              </svg>
              (647) 429-2677
            </a>
            <a
              href="mailto:supplies@pharmabest.ca"
              className="flex items-center gap-1.5 hover:text-[#00BA74] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            <a href="#custom" className="btn-pill-green !py-2 !px-5 !text-[11px]">
              Get a Quote
            </a>
          </div>
        </div>

        {/* Secondary nav */}
        <nav className="border-t border-white/10">
          <ul className="flex items-center gap-8 h-[44px] text-[13px] font-semibold tracking-wide">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/80 hover:text-[#00BA74] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
