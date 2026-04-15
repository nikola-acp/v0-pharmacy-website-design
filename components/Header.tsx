"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Shop All", href: "#products" },
  { label: "Why Us", href: "#about" },
  { label: "Custom Orders", href: "#custom" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#3B6FE6] shadow-lg py-2" : "bg-[#3B6FE6] py-4"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-0 group">
            <Image
              src="/logo-icon.png"
              alt="Pharmabest Supplies"
              width={80}
              height={80}
              className="h-12 lg:h-14 w-auto object-contain"
              priority
            />
            <span className="text-white text-[16px] font-black uppercase tracking-tighter leading-[1.3]">
              Pharmabest<br />
              <span className="text-blue-400">Supplies</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white text-[15px] font-semibold transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex flex-col items-end gap-0.5">
              <a
                href="tel:+16474292677"
                className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                (647) 429-2677
              </a>
              <a
                href="mailto:supplies@pharmabest.ca"
                className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                Email Us
              </a>
            </div>
            <a href="#custom" className="btn-brand !py-2.5 !px-6 !text-[13px] group">
              Get a Quote
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-[#3B6FE6] z-40 border-t border-white/10">
          <nav className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl font-bold hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-8 mt-4 border-t border-white/10 flex flex-col gap-6">
              <a href="tel:+16474292677" className="flex items-center gap-4 text-white/70 text-lg font-semibold">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                (647) 429-2677
              </a>
              <a href="mailto:supplies@pharmabest.ca" className="flex items-center gap-4 text-white/70 text-lg font-semibold">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                supplies@pharmabest.ca
              </a>
              <a href="#custom" className="btn-brand !py-4 !text-lg w-full">
                Get a Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
