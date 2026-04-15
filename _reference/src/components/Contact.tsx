"use client";

import { useState } from "react";

export default function Contact() {
  const [tab, setTab] = useState<"general" | "tech">("general");

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14 max-w-[720px] mx-auto">
          <p className="section-label mb-3">Contact Us</p>
          <h2 className="mb-4">
            Let&apos;s find the{" "}
            <span className="relative inline-block text-[#008352]">
              right solution
            </span>{" "}
            for you
          </h2>
          <p className="text-[#545C5F] text-[17px] leading-relaxed font-normal">
            Whether you need products, pricing, or technical support — we
            respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-stretch">
          {/* Left: Contact info card */}
          <div className="bg-[#1F1F1F] text-white rounded-[28px] p-10 flex flex-col">
            <p className="section-label !text-[#00BA74] mb-4">Get in Touch</p>
            <h3 className="!text-white !text-[26px] !font-extrabold mb-2">
              Pharmabest Supplies
            </h3>
            <p className="text-white/60 text-[14px] mb-8">Toronto, Ontario</p>

            <div className="space-y-6 mb-10">
              <InfoItem
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515L10 8l-2 1a11 11 0 006 6l1-2 3.485.78A2 2 0 0120 15.72V18a2 2 0 01-2 2A16 16 0 013 5z" />
                  </svg>
                }
                label="Phone"
                value="+1 (647) 429-2677"
                href="tel:+16474292677"
              />
              <InfoItem
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                label="Email"
                value="supplies@pharmabest.ca"
                href="mailto:supplies@pharmabest.ca"
              />
              <InfoItem
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                label="Location"
                value="Toronto, Ontario, Canada"
              />
              <InfoItem
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                label="Hours"
                value="Mon – Fri, 9 AM – 6 PM"
              />
            </div>

            <div className="mt-auto pt-8 border-t border-white/10">
              <p className="text-[13px] text-white/70 mb-4">
                Ready to place an order?
              </p>
              <a href="#products" className="btn-pill-green w-full">
                Order Now
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#F3F6F4] rounded-[28px] p-10">
            <div className="mb-6">
              <span className="block text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#545C5F] mb-3">
                Request Type
              </span>
              <div className="bg-white rounded-full p-1.5 inline-flex border border-gray-200">
                <button
                  type="button"
                  onClick={() => setTab("general")}
                  className={`px-5 py-2.5 rounded-full text-[12px] font-extrabold uppercase tracking-wider transition-all ${
                    tab === "general"
                      ? "bg-[#1F1F1F] text-white"
                      : "text-[#545C5F]"
                  }`}
                >
                  General Inquiry
                </button>
                <button
                  type="button"
                  onClick={() => setTab("tech")}
                  className={`px-5 py-2.5 rounded-full text-[12px] font-extrabold uppercase tracking-wider transition-all ${
                    tab === "tech"
                      ? "bg-[#1F1F1F] text-white"
                      : "text-[#545C5F]"
                  }`}
                >
                  Tech Support
                </button>
              </div>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Name">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] placeholder:text-[#98A1A4] focus:outline-none focus:border-[#00BA74]"
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    placeholder="you@pharmacy.com"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] placeholder:text-[#98A1A4] focus:outline-none focus:border-[#00BA74]"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Pharmacy Name">
                  <input
                    type="text"
                    placeholder="e.g. Queen St. Pharmacy"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] placeholder:text-[#98A1A4] focus:outline-none focus:border-[#00BA74]"
                  />
                </Field>
                <Field label="Phone (optional)">
                  <input
                    type="tel"
                    placeholder="(647) 000-0000"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] placeholder:text-[#98A1A4] focus:outline-none focus:border-[#00BA74]"
                  />
                </Field>
              </div>

              <Field label="Message">
                <textarea
                  rows={5}
                  placeholder={
                    tab === "general"
                      ? "How can we help you today?"
                      : "Describe the issue you're experiencing..."
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] placeholder:text-[#98A1A4] focus:outline-none focus:border-[#00BA74] resize-none"
                />
              </Field>

              <button type="submit" className="w-full btn-pill !py-4 !text-[13px]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-[#00BA74]/15 text-[#00BA74] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/50 mb-1">
          {label}
        </div>
        <div className="text-[15px] font-semibold text-white">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }
  return content;
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#545C5F] mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
