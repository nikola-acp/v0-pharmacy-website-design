import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  Printer,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Sparkles,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "Support & Printer Drivers | Pharmabest Supplies",
  description:
    "Technical support and printer driver installation help for Pharmabest thermal printers. Free setup guidance for Fillware, PharmaClik, Kroll and more.",
};

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Help & Support"
        title="Support & Printer Drivers"
        intro="Comprehensive support for your Pharmabest thermal printer. We're committed to keeping your pharmacy running smoothly — from first-time setup to years of daily use."
      />

      {/* Section 1: Printer Setup & Drivers */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <div className="section-label mb-4">Installation & Drivers</div>
              <h2 className="mb-6 text-slate-900">
                Thermal Printer Setup & Drivers
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Need help installing or configuring your Pharmabest thermal
                printer? Our team will walk you through driver installation and
                setup personally — at no cost. We&apos;ll make sure your printer
                is configured correctly for your pharmacy software (Fillware,
                PharmaClik, Kroll, or others) before you go live.
              </p>
              <ul className="space-y-4 mb-10">
                <SupportPerk text="Available Monday–Friday, 9:00 AM – 6:00 PM EST" />
                <SupportPerk text="Free remote support included with every printer" />
                <SupportPerk text="Compatible with Fillware, PharmaClik, Kroll, and more" />
              </ul>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#3B6FE6] text-white font-black text-sm uppercase tracking-wider hover:bg-[#2A56CA] transition-all shadow-xl shadow-blue-600/20 group"
              >
                Contact Us to Guide Installation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="relative rounded-[40px] bg-gradient-to-br from-[#3B6FE6] to-blue-700 text-white p-10 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                    <Printer className="w-8 h-8" />
                  </div>
                  <div className="text-5xl font-black mb-2">Free</div>
                  <p className="text-white/90 text-base leading-relaxed">
                    Remote setup assistance with every thermal printer order.
                    One call and we handle the rest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Customer Support */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <div className="section-label mb-4">Reach Us</div>
            <h2 className="mb-4 text-slate-900">Customer Support</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              For installation help, setup guidance, or any technical issue, our
              support team is available to assist.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <SupportChannel
              icon={<Mail className="w-6 h-6" />}
              label="Email"
              value="supplies@pharmabest.ca"
              href="mailto:supplies@pharmabest.ca"
            />
            <SupportChannel
              icon={<Phone className="w-6 h-6" />}
              label="Phone"
              value="+1 (647) 429-2677"
              href="tel:+16474292677"
            />
            <SupportChannel
              icon={<Clock className="w-6 h-6" />}
              label="Hours"
              value="Mon–Fri, 9 AM – 6 PM EST"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Additional Resources */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <div className="section-label mb-4">Resources</div>
            <h2 className="mb-4 text-slate-900">Additional Resources</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Quick links to the information and services pharmacies ask for most.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard
              icon={<HelpCircle className="w-6 h-6" />}
              title="FAQs"
              description="Quick answers to common product and service questions."
              href="/faqs"
              cta="Browse FAQs"
            />
            <ResourceCard
              icon={<Sparkles className="w-6 h-6" />}
              title="Custom Orders"
              description="Branded labels and receipts built to your specs."
              href="/#custom"
              cta="Design Yours"
            />
            <ResourceCard
              icon={<FileText className="w-6 h-6" />}
              title="Request a Quote"
              description="Volume pricing for high-quantity orders."
              href="/#custom"
              cta="Get a Quote"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function SupportPerk({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
      <span className="text-slate-700 text-[15px] lg:text-base leading-relaxed">
        {text}
      </span>
    </li>
  );
}

function SupportChannel({
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
  const inner = (
    <div className="bg-white border border-slate-100 rounded-[28px] p-7 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all h-full">
      <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-5">
        {icon}
      </div>
      <div className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-2">
        {label}
      </div>
      <div className="text-slate-900 text-lg font-bold">{value}</div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function ResourceCard({
  icon,
  title,
  description,
  href,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group bg-slate-50 border border-slate-100 rounded-[28px] p-7 lg:p-8 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all flex flex-col"
    >
      <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-black text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-[15px] leading-relaxed mb-6 flex-1">
        {description}
      </p>
      <span className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-sm group-hover:gap-2.5 transition-all">
        {cta}
        <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
