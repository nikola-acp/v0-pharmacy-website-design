import Image from "next/image";

const productOptions = [
  "Plain Thermal Labels",
  "Plain Thermal Receipts",
  "Custom Thermal Labels",
  "Custom Thermal Receipts",
  "Thermal Printer",
  "Other (Please specify)",
];

export default function CustomOrder() {
  return (
    <section
      id="custom"
      className="bg-[#FEF1E1] py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <div>
            <p className="section-label mb-4">Custom Orders</p>
            <h2 className="mb-5">
              Need something{" "}
              <span className="text-[#008352]">specifically for you?</span>
            </h2>
            <p className="text-[#34393A] text-[17px] leading-relaxed mb-8 max-w-[460px]">
              Fill in the details below and we&apos;ll get back to you within one
              business day with a custom quote — including volume pricing for
              high-quantity orders.
            </p>

            {/* Visual product stack */}
            <div className="relative h-[280px] max-w-[460px]">
              <div className="absolute left-0 bottom-0 w-[180px] h-[180px] rounded-[20px] overflow-hidden bg-white shadow-xl rotate-[-3deg]">
                <Image
                  src="/product-custom-thermal-labels.jpg"
                  alt="Custom labels"
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
              <div className="absolute left-[120px] top-0 w-[200px] h-[200px] rounded-[20px] overflow-hidden bg-white shadow-xl rotate-[4deg]">
                <Image
                  src="/product-custom-thermal-receipts.jpg"
                  alt="Custom receipts"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="absolute right-0 bottom-4 bg-[#00BA74] text-white rounded-full px-5 py-3 text-[13px] font-extrabold uppercase tracking-wider shadow-lg rotate-[-2deg]">
                Branded for you
              </div>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="bg-white rounded-[28px] p-8 lg:p-10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.2)]">
            <h3 className="!text-[20px] !font-extrabold mb-6">
              Request a Custom Quote
            </h3>

            <form className="space-y-5">
              <Field label="Product Type">
                <select className="w-full rounded-xl border border-gray-200 bg-[#F8F9FA] px-4 py-3 text-[14px] font-medium text-[#202324] focus:outline-none focus:border-[#00BA74]">
                  <option>Select a product...</option>
                  {productOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Quantity (Rolls)">
                  <input
                    type="text"
                    placeholder="e.g. 10"
                    className="w-full rounded-xl border border-gray-200 bg-[#F8F9FA] px-4 py-3 text-[14px] placeholder:text-[#98A1A4] focus:outline-none focus:border-[#00BA74]"
                  />
                </Field>
                <Field label="Pharmacy Name">
                  <input
                    type="text"
                    placeholder="e.g. Queen St. Pharmacy"
                    className="w-full rounded-xl border border-gray-200 bg-[#F8F9FA] px-4 py-3 text-[14px] placeholder:text-[#98A1A4] focus:outline-none focus:border-[#00BA74]"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Email">
                  <input
                    type="email"
                    placeholder="you@pharmacy.com"
                    className="w-full rounded-xl border border-gray-200 bg-[#F8F9FA] px-4 py-3 text-[14px] placeholder:text-[#98A1A4] focus:outline-none focus:border-[#00BA74]"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    type="tel"
                    placeholder="(647) 000-0000"
                    className="w-full rounded-xl border border-gray-200 bg-[#F8F9FA] px-4 py-3 text-[14px] placeholder:text-[#98A1A4] focus:outline-none focus:border-[#00BA74]"
                  />
                </Field>
              </div>

              <Field label="Details">
                <textarea
                  rows={4}
                  placeholder="Branding, logo, special requirements..."
                  className="w-full rounded-xl border border-gray-200 bg-[#F8F9FA] px-4 py-3 text-[14px] placeholder:text-[#98A1A4] focus:outline-none focus:border-[#00BA74] resize-none"
                />
              </Field>

              <button
                type="submit"
                className="w-full btn-pill-green !py-4 !text-[13px]"
              >
                Submit Request
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <p className="text-[11px] text-[#98A1A4] text-center font-normal">
                We&apos;ll respond within one business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
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
