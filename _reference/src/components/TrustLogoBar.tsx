import Image from "next/image";

const logos = [
  { src: "/logo-guardian.png", alt: "Guardian" },
  { src: "/logo-pharmasave.png", alt: "Pharmasave" },
  { src: "/logo-ida.png", alt: "I.D.A." },
];

export default function TrustLogoBar() {
  const items = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <p className="text-center text-[12px] font-bold uppercase tracking-[0.18em] text-[#545C5F] mb-6">
          Trusted by{" "}
          <span className="text-[#00BA74]">71+ Ontario pharmacies</span>
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-track marquee-slow items-center">
          {items.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-12 shrink-0"
              style={{ minWidth: "200px" }}
            >
              <div className="relative h-12 w-[150px] opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
