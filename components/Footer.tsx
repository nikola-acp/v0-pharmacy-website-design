import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

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
    heading: "Support",
    links: [
      { label: "Product Guide", href: "#products" },
      { label: "Label Sizing Help", href: "#contact" },
      { label: "Custom Branding", href: "#custom" },
      { label: "Ordering FAQ", href: "#contact" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Story", href: "#about" },
      { label: "Why Pharmabest Supplies", href: "#about" },
      { label: "Contact Us", href: "#contact" },
      { label: "Request Quote", href: "#custom" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-0 mb-8 group">
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
            <p className="text-slate-400 text-base leading-relaxed max-w-sm mb-10">
              The premier supplier of precision-engineered thermal supplies for Ontario pharmacies. 
              Committed to quality, speed, and unbeatable value.
            </p>
            <div className="space-y-4">
              <a href="tel:+16474292677" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-blue-900/30">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <span className="font-bold">+1 (647) 429-2677</span>
              </a>
              <a href="mailto:supplies@pharmabest.ca" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-blue-900/30">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span className="font-bold">supplies@pharmabest.ca</span>
              </a>
              <div className="flex items-center gap-3 text-slate-300 group">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <span className="font-bold">Toronto, Ontario, Canada</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {footerCols.map((col) => (
                <div key={col.heading}>
                  <h3 className="text-sm font-black uppercase tracking-widest text-white mb-8">
                    {col.heading}
                  </h3>
                  <ul className="space-y-4">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-slate-400 hover:text-white transition-colors text-base font-medium"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-slate-500 text-sm font-medium">
              &copy; 2026 Pharmabest Supplies Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors">Privacy</a>
              <a href="#" className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors">Terms</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-900/30 hover:text-blue-400 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-900/30 hover:text-blue-400 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-900/30 hover:text-blue-400 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
