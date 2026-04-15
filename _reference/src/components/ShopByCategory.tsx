import Image from "next/image";

const categories = [
  {
    title: "Thermal Labels",
    description:
      "High-adhesion labels for prescription bottles and general pharmacy use.",
    image: "/product-plain-thermal-labels.jpg",
    bg: "#B7EFC2",
    href: "#products",
  },
  {
    title: "Thermal Receipts",
    description:
      "Crystal-clear receipt rolls for long-lasting transaction records.",
    image: "/product-plain-thermal-receipts.jpg",
    bg: "#BBE1EE",
    href: "#products",
  },
  {
    title: "Custom Printing",
    description:
      "Branded labels and receipts with your pharmacy's logo and contact info.",
    image: "/product-custom-thermal-labels.jpg",
    bg: "#FFF5AD",
    href: "#products",
  },
  {
    title: "Printers & Accessories",
    description:
      "Fast, reliable thermal printers built for high-volume pharmacy workflows.",
    image: "/product-thermal-printer.jpg",
    bg: "#FFD9D0",
    href: "#products",
  },
];

export default function ShopByCategory() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Our Lineup</p>
          <h2>Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group relative rounded-[24px] overflow-hidden p-8 lg:p-10 flex items-center gap-4 min-h-[220px] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)] transition-all"
              style={{ background: cat.bg }}
            >
              <div className="relative z-10 max-w-[55%]">
                <h3 className="!text-[24px] !font-extrabold !leading-tight mb-2 text-[#1F1F1F]">
                  {cat.title}
                </h3>
                <p className="text-[14px] text-[#1F1F1F]/75 leading-snug mb-5">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-1.5 bg-[#1F1F1F] text-white px-5 py-2.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider group-hover:bg-black transition-colors">
                  Shop Now
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>

              <div className="absolute right-4 bottom-4 top-4 w-[180px] lg:w-[220px]">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="220px"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
