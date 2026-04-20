import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "FAQs | Pharmabest Supplies",
  description:
    "Answers to common questions about Pharmabest Supplies products, shipping, custom orders, and technical support.",
};

const faqs = [
  {
    q: "What products does Pharmabest Supplies offer?",
    a: "We offer a range of pharmacy essentials, including plain and customized labels, thermal receipt rolls, and reliable thermal printers. All our products are designed to streamline pharmacy operations and maintain a professional standard of service.",
  },
  {
    q: "Can I place a custom order?",
    a: "Yes. We specialize in custom orders. Whether you need labels or receipts with your pharmacy's logo, specific colors, or unique dimensions, we can create solutions tailored to your needs.",
  },
  {
    q: "Are your thermal printers compatible with pharmacy software?",
    a: "Yes. Our thermal printers are compatible with leading pharmacy software including Fillware, PharmaClik, and Kroll, ensuring seamless integration into your existing workflow.",
  },
  {
    q: "Do you provide support for setting up thermal printers?",
    a: "Yes. We offer free remote technical support for printer setup. Our team will guide you through installation, driver downloads, and troubleshooting.",
  },
  {
    q: "What are your shipping options?",
    a: "We ship via Canada Post, Purolator, and UPS to ensure fast and reliable delivery. For full details, see our Shipping Policy page.",
  },
  {
    q: "Do you offer bulk pricing?",
    a: "Yes. We offer competitive pricing for bulk orders. Contact us at supplies@pharmabest.ca or +1 (647) 429-2677 for a custom quote.",
  },
  {
    q: "How can I reach your customer support team?",
    a: "Email supplies@pharmabest.ca or call +1 (647) 429-2677 during business hours (Monday–Friday, 9:00 AM – 6:00 PM EST).",
  },
  {
    q: "How do I place an order?",
    a: "Orders can be placed directly through our website, or by emailing supplies@pharmabest.ca. Our team is happy to assist with any questions.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Help Center"
        title="Frequently Asked Questions"
        intro={
          <>
            Answers to the most common questions about our products, shipping, and
            support. Can&apos;t find what you&apos;re looking for?{" "}
            <Link
              href="/#contact"
              className="text-blue-600 font-semibold hover:underline"
            >
              Contact us
            </Link>
            .
          </>
        }
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <Accordion type="multiple" className="w-full max-w-[920px] space-y-4">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-slate-50 border border-slate-100 rounded-2xl px-6 lg:px-8 last:border-b !border-b"
              >
                <AccordionTrigger className="!py-6 !text-base lg:!text-lg font-bold text-slate-900 hover:!no-underline [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-blue-600">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="!text-base text-slate-600 leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 max-w-[920px] rounded-[32px] bg-gradient-to-br from-[#3B6FE6] to-blue-700 text-white p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="!text-white text-xl lg:text-2xl font-black mb-1">
                Still have questions?
              </h3>
              <p className="text-white/85">
                Our team responds within one business day.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-blue-700 font-black text-[13px] uppercase tracking-widest hover:bg-blue-50 transition-all shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
