import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

const shopLinks = [
  { label: "Plain Thermal Labels", href: "/#products" },
  { label: "Plain Thermal Receipts", href: "/#products" },
  { label: "Custom Thermal Labels", href: "/#products" },
  { label: "Custom Thermal Receipts", href: "/#products" },
  { label: "Thermal Printers", href: "/#products" },
  { label: "Shop All", href: "/#products" },
];

const supportLinks = [
  { label: "FAQs", href: "/faqs" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Refunds & Returns", href: "/refunds-and-returns" },
  { label: "Support & Printer Drivers", href: "/support" },
  { label: "Request a Quote", href: "/#custom" },
  { label: "Contact Us", href: "/#contact" },
];

const companyLinks = [
  { label: "Our Story", href: "/#about" },
  { label: "Why Pharmabest Supplies", href: "/#about" },
  { label: "Contact Us", href: "/#contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61568221675761",
    icon: <Facebook className="w-4 h-4" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pharmabestca/",
    icon: <Instagram className="w-4 h-4" />,
  },
  {
    label: "LinkedIn",
    href: "http://linkedin.com/company/pharmabest-ca",
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    label: "X",
    href: "https://x.com/pharmabest_ca",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="w-[14px] h-[14px]"
      >
        <path d="M18.244 2H21l-6.52 7.452L22 22h-6.77l-4.76-6.226L4.77 22H2l7.02-8.022L2 2h6.91l4.305 5.69L18.244 2Zm-1.186 18h1.87L7.02 4H5.084l11.974 16Z" />
      </svg>
    ),
  },
];

const payments = ["Visa", "Mastercard", "Amex", "Discover", "PayPal"];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-0 mb-6 group">
              <Image
                src="/logo-icon.png"
                alt="Pharmabest Supplies"
                width={60}
                height={60}
                className="h-10 w-auto object-contain"
              />
              <span className="text-white text-[16px] font-black uppercase tracking-tighter leading-[1.3]">
                Pharmabest<br />
                <span className="text-blue-400">Supplies</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              The premier supplier of precision-engineered thermal supplies for
              Ontario pharmacies. Committed to quality, speed, and unbeatable
              value.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white/80 hover:bg-blue-600 hover:text-white transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Shop */}
          <FooterColumn heading="Shop" links={shopLinks} />

          {/* Column 3: Support */}
          <FooterColumn heading="Support" links={supportLinks} />

          {/* Column 4: Company & Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-black uppercase tracking-widest text-white mb-6">
              Company
            </h3>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-3">
              <a
                href="tel:+16474292677"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-bold">+1 (647) 429-2677</span>
              </a>
              <a
                href="mailto:supplies@pharmabest.ca"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-bold">supplies@pharmabest.ca</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                Toronto, Ontario, Canada
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                Mon–Fri, 9 AM – 6 PM EST
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900">
          <div className="flex justify-center md:justify-end mb-6">
            <div className="flex flex-wrap items-center gap-2">
              {payments.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-300 text-[10px] font-black uppercase tracking-widest"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm font-medium text-center md:text-left">
              &copy; 2026 Pharmabest Supplies Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="lg:col-span-2">
      <h3 className="text-sm font-black uppercase tracking-widest text-white mb-6">
        {heading}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-slate-400 hover:text-white transition-colors text-[15px]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
