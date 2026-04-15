"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      fullName: fd.get("fullName"),
      email: fd.get("email"),
      pharmacyName: fd.get("pharmacyName"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    };

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      toast.success("Message sent! We'll get back to you within 1 business day.");
      form.reset();
    } catch {
      toast.error("Couldn't send your message. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          {/* Left: Info */}
          <div className="lg:w-1/3">
            <div className="section-label mb-6">Contact Us</div>
            <h2 className="mb-6 leading-tight">
              Let&apos;s find the <span className="text-blue-600">right solution</span> for your pharmacy
            </h2>
            <p className="text-slate-600 text-lg mb-10">
              Whether you need products, custom pricing, or technical support — we respond within one business day.
            </p>

            <div className="space-y-8">
              <ContactInfoItem
                icon={<Phone className="w-5 h-5" />}
                label="Call Us"
                value="+1 (647) 429-2677"
                href="tel:+16474292677"
              />
              <ContactInfoItem
                icon={<Mail className="w-5 h-5" />}
                label="Email Support"
                value="supplies@pharmabest.ca"
                href="mailto:supplies@pharmabest.ca"
              />
              <ContactInfoItem
                icon={<MapPin className="w-5 h-5" />}
                label="Our Office"
                value="Toronto, Ontario, Canada"
              />
              <ContactInfoItem
                icon={<Clock className="w-5 h-5" />}
                label="Business Hours"
                value="Mon - Fri, 9 AM - 6 PM EST"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-2/3">
            <div className="bg-slate-50 rounded-[40px] p-8 lg:p-12 border border-slate-100 shadow-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Full Name">
                    <input
                      name="fullName"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[15px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                    />
                  </Field>
                  <Field label="Work Email">
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@pharmacy.com"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[15px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Pharmacy Name">
                    <input
                      name="pharmacyName"
                      type="text"
                      required
                      placeholder="e.g. Queen St. Pharmacy"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[15px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                    />
                  </Field>
                  <Field label="Phone Number (Optional)">
                    <input
                      name="phone"
                      type="tel"
                      placeholder="(647) 000-0000"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[15px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                    />
                  </Field>
                </div>

                <Field label="Your Message">
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us how we can assist your pharmacy today..."
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[15px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary !py-5 !text-base group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({
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
    <div className="flex items-center gap-5 group">
      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <div className="text-[11px] font-black uppercase tracking-widest text-slate-600 mb-1">{label}</div>
        <div className="text-slate-900 font-bold">{value}</div>
      </div>
    </div>
  );

  return href ? <a href={href} className="block">{content}</a> : content;
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
      <span className="block text-[11px] font-black uppercase tracking-widest text-slate-600 mb-3 ml-1">
        {label}
      </span>
      {children}
    </label>
  );
}
