import Image from "next/image";

type Product = {
  badge: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  reviews: string;
  price: string;
  oldPrice?: string;
  stat: string;
  quantity: string;
};

const products: Product[] = [
  {
    badge: "Labels",
    title: "Plain Thermal Labels",
    description:
      "High-adhesion durable label rolls for prescription bottles and general pharmacy use.",
    image: "/product-plain-thermal-labels.jpg",
    rating: 5,
    reviews: "1,240+",
    price: "$49.99",
    stat: "20% more labels",
    quantity: "12,000 / box",
  },
  {
    badge: "Receipts",
    title: "Plain Thermal Receipts",
    description:
      "Crystal-clear thermal receipt rolls for long-lasting transaction records.",
    image: "/product-plain-thermal-receipts.jpg",
    rating: 5,
    reviews: "980+",
    price: "$39.99",
    oldPrice: "$44.99",
    stat: "20% more for 10% less",
    quantity: "24,000 / box",
  },
  {
    badge: "Custom",
    title: "Custom Thermal Labels",
    description:
      "Branded labels with your pharmacy's logo, name, and contact information.",
    image: "/product-custom-thermal-labels.jpg",
    rating: 5,
    reviews: "560+",
    price: "$69.99",
    stat: "20% more labels",
    quantity: "12,000 / box",
  },
  {
    badge: "Custom",
    title: "Custom Thermal Receipts",
    description:
      "Branded receipt rolls featuring your pharmacy logo on every transaction.",
    image: "/product-custom-thermal-receipts.jpg",
    rating: 5,
    reviews: "420+",
    price: "$59.99",
    stat: "20% more for 10% less",
    quantity: "24,000 / box",
  },
  {
    badge: "Hardware",
    title: "Thermal Printers",
    description:
      "Fast, reliable thermal printers built for high-volume pharmacy environments.",
    image: "/product-thermal-printer.jpg",
    rating: 5,
    reviews: "310+",
    price: "Free",
    stat: "Free with initial purchase",
    quantity: "Per location",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[#FFB400]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? "fill-current" : "text-gray-200 fill-current"}`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-[#F3F6F4] py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Our Products</p>
          <h2 className="mb-4">A complete lineup for your pharmacy</h2>
          <p className="text-[#545C5F] text-[16px] lg:text-[18px] max-w-[640px] mx-auto font-normal">
            IDA, Guardian, and Pharmasave thermal labels and thermal receipts
            available. Best price guaranteed.
          </p>
        </div>

        <div className="overflow-x-auto scroll-hide -mx-6 lg:mx-0">
          <div className="flex gap-6 px-6 lg:px-0 snap-x snap-mandatory lg:grid lg:grid-cols-3 xl:grid-cols-5 lg:gap-5">
            {products.map((product) => (
              <article
                key={product.title}
                className="group bg-white rounded-[16px] p-5 flex flex-col shrink-0 w-[280px] lg:w-auto snap-start border border-gray-100 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.2)] transition-all"
              >
                <div className="mb-4">
                  <span className="badge-pill text-[#008352]">
                    {product.badge}
                  </span>
                </div>

                <div className="relative aspect-square rounded-[12px] overflow-hidden bg-[#F3F4F6] mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(min-width: 1280px) 20vw, 280px"
                  />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Stars count={product.rating} />
                  <span className="text-[11px] text-[#545C5F] font-semibold">
                    {product.reviews} reviews
                  </span>
                </div>

                <h4 className="!text-[16px] !font-extrabold leading-snug mb-1.5">
                  {product.title}
                </h4>
                <p className="text-[12px] text-[#545C5F] leading-snug mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[18px] font-extrabold text-[#202324]">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-[13px] text-[#D24D3E] line-through font-semibold">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-[#00BA74] font-extrabold uppercase tracking-wide mb-4">
                  {product.stat}
                </div>

                <div className="mt-auto">
                  <button className="w-full btn-pill !py-3 !text-[12px]">
                    Order Now
                  </button>
                  <p className="text-[11px] text-center text-[#98A1A4] mt-2">
                    {product.quantity}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a href="#custom" className="btn-pill-outline">
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
