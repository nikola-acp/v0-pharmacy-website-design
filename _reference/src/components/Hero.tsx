import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#BFE0F6] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: copy */}
          <div className="relative z-10">
            <p className="section-label mb-5 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#00BA74]" />
              Trusted by 71+ Ontario Pharmacies
            </p>
            <h1 className="mb-6">
              Your Partner for{" "}
              <span className="text-[#008352]">Pharmacy Supplies</span>
            </h1>
            <p className="text-[#34393A] text-[18px] lg:text-[20px] leading-[1.5] max-w-[520px] mb-8 font-normal">
              Premium thermal labels, receipt rolls, printers, and accessories —
              with the best prices, fastest delivery, and dedicated support for
              every pharmacy across Ontario.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#products" className="btn-pill">
                Shop Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#custom" className="btn-pill-outline">
                Get a Quote
              </a>
            </div>

            {/* Mini stats row */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-[480px]">
              <div>
                <div className="text-[28px] font-extrabold text-[#202324] leading-none">
                  71+
                </div>
                <div className="text-[12px] font-semibold text-[#545C5F] mt-1.5">
                  Ontario pharmacies
                </div>
              </div>
              <div>
                <div className="text-[28px] font-extrabold text-[#202324] leading-none">
                  24h
                </div>
                <div className="text-[12px] font-semibold text-[#545C5F] mt-1.5">
                  Ships within
                </div>
              </div>
              <div>
                <div className="text-[28px] font-extrabold text-[#202324] leading-none">
                  20%
                </div>
                <div className="text-[12px] font-semibold text-[#545C5F] mt-1.5">
                  More per box
                </div>
              </div>
            </div>
          </div>

          {/* Right: product collage */}
          <div className="relative h-[420px] lg:h-[520px]">
            {/* Background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] lg:w-[460px] lg:h-[460px] rounded-full bg-white/60" />

            {/* Product images positioned */}
            <div className="absolute top-4 left-4 w-[220px] h-[220px] lg:w-[260px] lg:h-[260px] rounded-2xl overflow-hidden bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] rotate-[-4deg]">
              <Image
                src="/product-plain-thermal-labels.jpg"
                alt="Plain thermal labels"
                fill
                className="object-cover"
                sizes="260px"
              />
            </div>
            <div className="absolute top-16 right-4 w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] rounded-2xl overflow-hidden bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] rotate-[5deg]">
              <Image
                src="/product-custom-thermal-labels.jpg"
                alt="Custom thermal labels"
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] h-[220px] lg:w-[260px] lg:h-[260px] rounded-2xl overflow-hidden bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] rotate-[-2deg]">
              <Image
                src="/product-thermal-printer.jpg"
                alt="Thermal printer"
                fill
                className="object-cover"
                sizes="260px"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute top-2 right-8 bg-[#00BA74] text-white w-20 h-20 rounded-full flex flex-col items-center justify-center text-center shadow-lg rotate-[8deg] z-10">
              <span className="text-[10px] font-bold uppercase tracking-wide leading-tight">Save</span>
              <span className="text-[22px] font-black leading-none">20%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
